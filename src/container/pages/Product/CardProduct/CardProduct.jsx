//TODO LIBRARY
import React, {Component} from "react";
import Counter from "./Counter";

class CardProduct extends Component {
    render(){
        return(
            <div className="kartu">
                <div className="img-thumb-product">
                    <img src="https://bazis.eduarsip.id/assets/images/user/pbmttaawun20201230092656.jpg" alt="" />
                </div>
                <div className="prod-title">Minyak Goreng</div>
                <div className="prod-price">Rp26.000,00</div>
                <Counter />
            </div>
        )
    }
}

export default CardProduct;