//TODO LIBRARY
import React, {Component, Fragment} from "react";
import { connect } from "react-redux";

//TODO STYLES
import './LifeCycle.css';

class LifeCycle extends Component {
    //TODO LifeCycle pertama (Mounting)
    constructor(props){
        //TODO Karena Meng-extends Component
        super(props);

        //TODO Deklarasi state di dalam constructor
        this.state = {
            count: 1,
        }

        console.log('constructor');
    }

    //TODO LifeCycle kedua (Mounting) & LifeCycle pertama (Updating)
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');

        return null;
    }

    //TODO LifeCycle keempat (Mounting)
    componentDidMount(){
        console.log('componentDidMount');
        // setTimeout(()=>{
        //     this.setState({
        //         count: 2
        //     });
        // }, 5000)
    }

    //TODO LifeCycle kedua (Updating)
    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate');
        // console.log('nextProps: ', nextProps);
        console.log('nextState: ', nextState);
        console.log('thisState: ', this.state.count);
        console.groupEnd();

        //TODO Jika counting dibatasi maksimal 4
        if (nextState.count >= 5) {
            return false;
        }
        return true;
    }

    //TODO LifeCycle keempat (Updating)
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    //TODO LifeCycle kelima (Updating)
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate');
    }

    //TODO LifeCycle pertama (Unmounting)
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    changeCompCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    //TODO LifeCycle ketiga (Mounting) & LifeCycle ketiga (Updating)
    render(){
        console.log('render');
        return(
            <Fragment>
                <p className="section-title">LifeCycle Page</p>
                <button className="btn" onClick={this.changeCompCount}>Counting {this.state.count}</button>
                <hr />
                <p>Total Order: {0}</p>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}

export default LifeCycle;