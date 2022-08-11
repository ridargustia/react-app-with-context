import React, {Component, Fragment} from "react";
import Post from "../../component/Post/Post";
import './BlogPost.css';
import axios from "axios";

class BlogPost extends Component {
    constructor(props){
        super(props);

        this.state = {
            post: []
        }
    }

    //TODO Pembuatan method get
    getPostApi = () => {
        axios.get('http://localhost:3004/posts')
        .then(res => {
            // console.log(res.data);
            this.setState({
                post: res.data
            })
        });
    }

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

    handleRemove = (data) => {
        console.log(data);
        //TODO Delete API menggunakan axios
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => this.getPostApi());
    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
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
