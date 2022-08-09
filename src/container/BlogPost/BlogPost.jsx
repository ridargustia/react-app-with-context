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
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                // console.log(res.data);
                this.setState({
                    post: res.data
                })
            });
    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body}/>
                    })
                }

            </Fragment>
        )
    }
}

export default BlogPost;
