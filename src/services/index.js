import Post from "./Post";
import Get from "./Get";
import Put from "./Put";
import Delete from "./Delete";

//TODO Spesifik Calling API
//*POST
const postNewBlog = (data) => Post('posts', false, data);

//*GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

//*PUT
const putBlog = (data, id) => Put(`posts/${id}`, false, data);

//*DElETE
const deleteBlog = (id) => Delete(`posts/${id}`, false);

const API = {
    getNewsBlog,
    getComments,
    postNewBlog,
    putBlog,
    deleteBlog,
}

export default API;

