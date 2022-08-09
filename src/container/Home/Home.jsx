import React, {Component} from "react";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {
    render(){
        return (
            <div>
                <h4>Video Component</h4>
                <hr />
                <BlogPost />
            </div>
        )
    }
}

export default Home;