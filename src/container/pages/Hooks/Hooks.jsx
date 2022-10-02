import React, { Component, useState, useEffect } from "react";
import './Hooks.css';

// class Hooks extends Component{
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     componentDidMount(){
//         document.title = `Title Count: ${this.state.count}`;
//     }

//     componentDidUpdate(){
//         document.title = `Title Count: ${this.state.count}`;
//     }

//     componentWillUnmount(){
//         document.title = 'React App';
//     }

//     render(){
//         return(
//             <div className="p-hooks">
//                 <p>Score: {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Tambah Score</button>
//             </div>
//         )
//     }
// }

//TODO Stateless Component dengan hooks
const Hooks = () => {
    //* Buat State dan function untuk merubah state-nya
    //* Buat useState dan definisikan value awalnya
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Title Count: ${count}`;
        return () => {
            document.title = 'React App';
        }
    });

    return(
        <div className="p-hooks">
            <p>Score: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah Score</button>
        </div>
    )
}

export default Hooks;