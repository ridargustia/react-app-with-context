//TODO LIBRARY
import React, {Component, Fragment} from "react";
import axios from "axios";

//TODO PAGES
import Post from "../../../component/Post/Post";

//TODO STYLES
import './BlogPost.css';
import API from "../../../services";

class BlogPost extends Component {
    constructor(props){
        super(props);

        this.state = {
            post: [],
            //TODO Object untuk menyimpan inputan dari form
            formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userId: 1,
            },
            //TODO Mengkondisikan button update di form
            isUpdate: false,
            comments: []
        }
    }

    //TODO Pembuatan method get
    getPostApi = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        });
        API.getComments().then(result => {
            this.setState({
                comments: result
            })
        })
    }

    //TODO Menyimpan data ke API
    postDataToAPI = () => {
        API.postNewBlog(this.state.formBlogPost).then(result => {
            this.getPostApi();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1,
                },
            });
        });
    }

    //TODO Life Cycle React
    componentDidMount(){
        //TODO Get API menggunakan fetch (JS ES6)
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     });

        //TODO Get API menggunakan axios (library)
        this.getPostApi();
    }

    //TODO Method untuk jalankan fitur delete
    handleRemove = (data) => {
        API.deleteBlog(data).then(result => {
            this.getPostApi();
        });
    }

    //TODO Mengubah value objek sesuai inputan form
    handleFormChange = (event) => {
        // console.log('Get data: ', event.target);
        //TODO Membuat copyan dari object formBlogPost
        let formBlogPostNew = {...this.state.formBlogPost};
        // console.log('Init State: ', this.state.formBlogPost);
        // console.log('New Value: ', formBlogPostNew);
        // console.log(event.target.name);
        //TODO Generate ID berdasarkan timestamp
        let timestamp = new Date().getTime();
        //TODO Inisialisasi value dari form input
        let value = event.target.value;
        if (!this.state.isUpdate) {
            //TODO kita sasar id (target)
            formBlogPostNew['id'] = timestamp;
        }
        //TODO kita sasar title/body-nya (target)
        formBlogPostNew[event.target.name] = value;
        //TODO ubah state awal dengan copy-an obj state
        this.setState({
            formBlogPost: formBlogPostNew
        });
    }

    //TODO Event ketika user menekan tombol submit
    handleSubmit = () => {
        // console.log(this.state.formBlogPost);
        if (this.state.isUpdate) {
            this.putDataToAPI();
        } else {
            this.postDataToAPI();
        }
    }

    //TODO Jalankan library axios dengan method PUT
    putDataToAPI = () => {
        API.putBlog(this.state.formBlogPost, this.state.formBlogPost.id).then(result => {
            this.getPostApi();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1,
                },
            });
        });
    }

    //TODO Mengambil nilai data yang akan di update
    handleUpdate = (data) => {
        // console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        });
    }

    //TODO Menjalankan fungsi detail
    handleDetail = (id) => {

    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add">
                    <label htmlFor="title">Judul</label>
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="Tambahkan judul" onChange={this.handleFormChange} />
                    <label htmlFor="body">Deskripsi</label>
                    <textarea name="body" value={this.state.formBlogPost.body} id="body-content" cols="30" rows="10" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* {
                    this.state.comments.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }

            </Fragment>
        )
    }
}

export default BlogPost;
