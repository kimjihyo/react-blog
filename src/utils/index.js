import { db } from '../firebase.js'; 

export const getPostById = (id) => {
    console.log("getPostById");
    return new Promise((resolve, reject) => {
        db.collection('posts')
        .doc(id)
        .get()
        .then((querySnapshot) => {
            resolve({
                ...querySnapshot.data(),
                id: querySnapshot.id,
                date: convertSecondsToDate(querySnapshot.data().date.seconds),
            });
        })
        .catch(e => {
            reject(e);
        });
    });
}

export const getCommentsByPostId = (id) => {
    console.log("getCommentsByPostId");
    return new Promise((resolve, reject) => {
        db.collection('comments')
        .where('postid', '==', id)
        .get()
        .then((querySnapshot) => {
            let comments = [];
            querySnapshot.forEach((comment) => {
                comments.push({
                    ...comment.data(),
                    date: convertSecondsToDate(comment.data().date.seconds),
                    body: JSON.parse(comment.data().body),
                    id: comment.id,
                });
            });
            resolve(comments);
        })
        .catch(e => {
            reject(e);
        });
    });
}

export const addComment = (comment) => {
    console.log("addComment");
    return new Promise((resolove, reject) => {
        db.collection('comments')
        .add({
            postid: comment.postid,
            author: comment.author,
            body: JSON.stringify(comment.body),
            date: comment.date,
        })
    });
}

export const convertSecondsToDate = (seconds) => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var date = new Date(1970, 0, 1);
    date.setSeconds(seconds);
    return monthNames[date.getMonth()] + ', ' + date.getDate() + ', ' + date.getFullYear();
}

export const getPostings = () => {
    return new Promise((resolve, reject) => {
        db.collection('directories')
        .doc('vMZNKh66nqxUWeo5YaAi')
        .get()
        .then((querySnapshot) => {
            resolve(querySnapshot.data().posts);
        })
        .catch((error) => {
            console.log(error);
        });
    });
}
