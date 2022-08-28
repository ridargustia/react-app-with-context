//TODO LIBRARY
import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

//TODO PAGES
import BlogPost from "../pages/BlogPost/BlogPost";
import Product from "../pages/Product/Product";
import LifeCycle from "../pages/LifeCycle/LifeCycle";
import YoutubeComp from "../pages/YoutubeComp/YoutubeComp";
import DetailPost from "../../component/DetailPost/DetailPost";

//TODO STYLES
import './Home.css';

class Home extends Component {
    constructor(props){
        //TODO Karena Meng-extends Component
        super(props);

        //TODO Deklarasi state di dalam constructor
        this.state = {
            showComp: true,
        }
    }

    render(){
        return (
            //TODO MEMBUAT ROUTING APLIKASI
            <Router>
                {/* <div>
                    <Product />
                    <hr />
                    {
                        this.state.showComp ?
                        <LifeCycle /> : null
                    }
                    <hr />
                    <BlogPost />
                </div> */}
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/youtube">Youtube</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<BlogPost />} />
                        <Route path="/detail-post/:id" element={<DetailPost />} />
                        <Route path="/lifecycle" element={<LifeCycle />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/youtube" element={<YoutubeComp />} />
                    </Routes>
                </Fragment>
            </Router>
        )
    }
}

export default Home;