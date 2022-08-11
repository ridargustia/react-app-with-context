import React from "react";

const post = (props) => {
    return(
        <div className="card">
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/tech" alt="dummy" />
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default post;