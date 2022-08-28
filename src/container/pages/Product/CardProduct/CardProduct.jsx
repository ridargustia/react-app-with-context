//TODO LIBRARY
import React, {Component} from "react";

class CardProduct extends Component {
    state = {
        order: 0
    }

    handleCounterChange = (value) => {
        this.props.ubahCounter(value);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        });
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }
    render(){
        return(
            <div className="kartu">
                <div className="img-thumb-product">
                    <img src="https://bazis.eduarsip.id/assets/images/user/pbmttaawun20201230092656.jpg" alt="" />
                </div>
                <div className="prod-title">Minyak Goreng</div>
                <div className="prod-price">Rp26.000,00</div>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;