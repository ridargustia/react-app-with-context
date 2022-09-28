import React, { Component } from "react";
import { connect } from 'react-redux';
import ActionType from "../../../../redux/reducer/globalActionType";
import {RootContext} from "../../../Home/Home";

class Counter extends Component {
    // state = {
    //     order: 0
    // }

    // handleCounterChange = (value) => {
    //     this.props.ubahCounter(value);
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     });
    // }

    // handleMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order);
    //         })
    //     }
    // }

    render(){
        console.log(this.props);
        return(
            <RootContext.Consumer>
                {
                    value => {
                        console.log(value);
                        return(
                            <div className="counter">
                                <button className="minus" onClick={()=>null}>-</button>
                                <input type="text" value={value.totalOrder} />
                                <button className="plus" onClick={()=>null}>+</button>
                            </div>
                        );
                    }
                }
            </RootContext.Consumer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type: ActionType.MINUS_ORDER}),
    }
}

export default Counter;