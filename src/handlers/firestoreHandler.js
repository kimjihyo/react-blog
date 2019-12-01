import { db } from "../firebase.js";
import firebase from 'firebase';


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
                resolve(constructDirectoryHierarchyHelper(rootDir.id, null));
            });
    })
}

export const addDirectory = (name, parentDirectoryId) => {
    return new Promise((resolve, reject) => {
        db.collection("directories")
            .add({
                name: name,
                childPosts: [],
                childDirectories: [],
                parentDirectoryId: parentDirectoryId,
            })
            .then(docRef => {
                db.collection("directories")
                    .doc(parentDirectoryId)
                    .update({
                        childDirectories: firebase.firestore.FieldValue.arrayUnion(docRef.id)
                    });
                resolve(docRef.id);
            });
    });
}

export const renameDirectory = (id, name) => {
    return new Promise((resolve, reject) => {
        db.collection("directories")
            .doc(id)
            .update({
                name: name
            });
    });
}

export const removeDirectory = (id) => {
    getDirectoryById(id)
        .then(directory => {
            let parentDirectoryId = directory.parentDirectoryId;
            db.collection("directories")
                .doc(id)
                .delete()
                .then(() => {
                    db.collection("directories")
                        .doc(parentDirectoryId)
                        .update({
                            childDirectories: firebase.firestore.FieldValue.arrayRemove(id),
                        })
                });
        });
}

export const getPostById = (postId) => {
    return new Promise((resolve, reject) => {
        db.collection("posts")
            .doc(postId)
            .get()
            .then(snapshot => resolve({ ...snapshot.data(), id: snapshot.id }));
    });
}

export const moveAllPostsToTestDirectory = () => {
    return new Promise((resolve, reject) => {
        db.collection("posts")
            .get()
            .then(snapshot => {
                snapshot.forEach(post => {
                    addPostInDirectory(post.id, "3TRBv7MAF0NR2x28wqO4");
                });
            });
    });
}

export const addPostInDirectory = (postId, directoryId) => {
    getPostById(postId)
        .then(post => {
            if (post.directoryId == null || post.directoryId != directoryId) {
                db.collection("posts")
                    .doc(postId)
                    .update({
                        directoryId: directoryId
                    });

                db.collection("directories")
                    .doc(directoryId)
                    .update({
                        childPosts: firebase.firestore.FieldValue.arrayUnion(postId)
                    });
            } else {
                console.log("already exists");
            }
        });
}

export const moveDirectory = (id, parentDirectory) => {

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
                        isOpenByDefault: parentDirectory.isOpenByDefault,
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

