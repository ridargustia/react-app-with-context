//TODO LIBRARY
import React from "react";

//TODO STYLES
import './VideoThumbComponent.css';

const VideoThumbComponent = (props) => {
    return <div className="card-wrapper">
        <div className="img-thumb">
            <img src="https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202" alt="" />
            <p className="time">{props.time}</p>
        </div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
    </div>
}

//MEMBUAT NILAI DEFAULT APABILA PROPS TIDAK DIISI
VideoThumbComponent.defaultProps = {
    time: '00.00',
    title: 'Undefined Title',
    desc: 'Undefined Description'
}

export default VideoThumbComponent;