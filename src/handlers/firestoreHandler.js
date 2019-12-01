import { db } from "../firebase.js";

export const getDirectoryById = (directoryId) => {
    return new Promise((resolve, reject) => {
        db.collection("directories")
        .doc(directoryId)
        .get()
        .then(snapshot => {
            resolve(snapshot.data());
        });
    })
}

export const getFullDirectoryPathById = (directoryId) => {
    return getFullDirectoryPathByIdHelper(directoryId, []);
}

export const getRootDirectory = () => {
    return new Promise((resolve, reject) => {
        db.collection("directories")
        .where("name", "==", "Dashboard")
        .get()
        .then(snapshot => {
            snapshot.forEach(res => {
                resolve({
                    ...res.data(),
                    id: res.id
                });
            })
        })
    })
}

export const constructDirectoryHierarchy = () => {
    return new Promise((resolve, reject) => {
        getRootDirectory()
        .then(rootDir => {
            resolve(constructDirectoryHierarchyHelper(rootDir.id, null))
        });
    })
}

const constructDirectoryHierarchyHelper = (parentDirectoryId, hierarchy) => {
    return new Promise((resolve, reject) => {
        if (parentDirectoryId === "") {
            resolve(hierarchy)
        } else {
            getDirectoryById(parentDirectoryId)
            .then(parentDirectory => {
                hierarchy = {
                    name: parentDirectory.name,
                    childDirectories: [],
                    childPosts: parentDirectory.childPosts != null ? parentDirectory.childPosts : [],
                };
                if (parentDirectory.childDirectories == null || parentDirectory.childDirectories.length === 0) {
                    resolve(hierarchy);
                } else {
                    parentDirectory.childDirectories.forEach(directoryId => {
                        constructDirectoryHierarchyHelper(directoryId, hierarchy)
                        .then(res => {
                            hierarchy.childDirectories.push(res);
                            resolve(hierarchy)
                        });
                    });
                }
            });
        }
    });
}

const getFullDirectoryPathByIdHelper = (directoryId, directories) => {
    return new Promise((resolve, reject) => {
        getDirectoryById(directoryId)
        .then(dir => {
            directories.push(dir);
            if (dir.parentDirectoryId == null) {
                resolve(directories);
            } else {
                getFullDirectoryPathByIdHelper(dir.parentDirectoryId, directories)
                .then(res => {
                    resolve(directories);
                });
            }
        })
    })
}

