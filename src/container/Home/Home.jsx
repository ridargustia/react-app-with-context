//TODO LIBRARY
import React, {Component, Fragment, createContext} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

//TODO PAGES
import BlogPost from "../pages/BlogPost/BlogPost";
import Product from "../pages/Product/Product";
import LifeCycle from "../pages/LifeCycle/LifeCycle";
import YoutubeComp from "../pages/YoutubeComp/YoutubeComp";
import DetailPost from "../../component/DetailPost/DetailPost";

//TODO STYLES
import './Home.css';

export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
    state = {
        totalOrder: 5
    }

    dispatch = (action) => {
        if (action.type === 'PLUS_ORDER') {
            return this.setState({
                totalOrder: this.state.totalOrder + 1
            });
        }
        if (action.type === 'MINUS_ORDER') {
            if (this.state.totalOrder > 0) {
                return this.setState({
                    totalOrder: this.state.totalOrder - 1
                });
            }
        }
    }

    render(){
        return (
            //TODO MEMBUAT ROUTING APLIKASI
            <Router>
                <Provider value={
                    {
                        state: this.state,
                        dispatch: this.dispatch
                    }
                }>
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
                </Provider>
            </Router>
        )
    }
}

export default Home;