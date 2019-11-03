import Axios, {} from 'axios';

let email = "kimjihyo0325@gmail.com";
let password = "Root7554!";
let auth = {
    username: email,
    password: password,
}
let baseUrl = "https://api.github.com";

const getUser = () => {
    return new Promise((resolve, reject) => {
        Axios.get(baseUrl + "/user", {
                auth: auth
            })
            .then(result => {
                resolve(result);
            });
    });
}

const getRepos = (onCompletion) => {
    return new Promise((resolve, reject) => {
        Axios.get(baseUrl + "/user/repos", {
                auth: auth
            })
            .then(result => {
                onCompletion(result.data);
            });
    });
}

export {
    getUser,
    getRepos,
};