import axios from "axios";

const RootPath = 'http://localhost:3004';
const OnlineRoot = 'https://jsonplaceholder.typicode.com';

//TODO Function global GET
const Get = (path, typeRoot) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${typeRoot ? OnlineRoot : RootPath}/${path}`)
        .then(res => {
            resolve(res.data);
        }, err => {
            reject(err);
        });
    });
    return promise;
}

const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

const API = {
    getNewsBlog,
    getComments
}

export default API;

