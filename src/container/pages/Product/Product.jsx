//TODO LIBRARY
import React, {Component, Fragment} from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
// import { connect } from "react-redux";
import { RootContext } from "../../Home/Home";

//TODO PAGES
import CardProduct from "./CardProduct/CardProduct";

//TODO STYLES
import './Product.css';

class Product extends Component {
    // state = {
    //     order: 0
    // }

    // handleCounterChange= (newValue) => {
    //     this.setState({
    //         order: newValue
    //     });
    // }

    render(){
        return(
            <RootContext.Consumer>
                {
                    value=>{
                        return(
                            <Fragment>
                                <div className="bg">
                                    <div className="header">
                                        <div className="logo">
                                            <FaShopify size={34}/>
                                            {/* <img src="" alt="" /> */}
                                        </div>
                                        <div className="troley">
                                            <FaShoppingCart size={20}/>
                                            <div className="count">{value.state.totalOrder}</div>
                                        </div>
                                    </div>
                                    <CardProduct />
                                </div>
                            </Fragment>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

export default Product;