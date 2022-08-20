import React, {Component, Fragment} from "react";
import Post from "../../component/Post/Post";
import './BlogPost.css';
import axios from "axios";

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
            }
        }
    }

    //TODO Pembuatan method get
    getPostApi = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then(res => {
            // console.log(res.data);
            this.setState({
                post: res.data
            })
        });
    }

    //TODO Menyimpan data ke API
    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then(res => {
            console.log(res);
            this.getPostApi();
        }, err => {
            console.log('Error: ', err);
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
        console.log(data);
        //TODO Delete API menggunakan axios
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => this.getPostApi());
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
        //TODO kita sasar id (target)
        formBlogPostNew['id'] = timestamp;
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
        this.postDataToAPI();
    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add">
                    <label htmlFor="title">Judul</label>
                    <input type="text" name="title" placeholder="Tambahkan judul" onChange={this.handleFormChange} />
                    <label htmlFor="body">Deskripsi</label>
                    <textarea name="body" id="body-content" cols="30" rows="10" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove}/>
                    })
                }

            </Fragment>
        )
    }
}

export default BlogPost;
