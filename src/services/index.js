import Post from "./Post";
import Get from "./Get";

//TODO Spesifik Calling API
//*POST
const postNewBlog = (data) => Post('posts', false, data);

//*GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

const API = {
    getNewsBlog,
    getComments,
    postNewBlog,
}

export default API;

