//TODO LIBRARY
import React, {Component, Fragment} from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";

//TODO PAGES
import CardProduct from "./CardProduct/CardProduct";

//TODO STYLES
import './Product.css';

class Product extends Component {
    state = {
        order: 0
    }

    handleCounterChange= (newValue) => {
        this.setState({
            order: newValue
        });
    }

    render(){
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
                            <div className="count">{this.state.order}</div>
                        </div>
                    </div>
                    <CardProduct ubahCounter={(value) => this.handleCounterChange(value)} />
                </div>
            </Fragment>
        )
    }
}

export default Product;