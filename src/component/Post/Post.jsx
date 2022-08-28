//TODO LIBRARY
import React from "react";
import {useNavigate} from "react-router-dom";

const Post = (props) => {
    const navigate = useNavigate();
    return(
        <div className="card">
            <div className="img-thumbnail">
                <img src="https://placeimg.com/200/150/tech" alt="dummy" />
            </div>
            <div className="content">
                <p className="judul" onClick={() => navigate(`/detail-post/${props.data.id}`)}>{props.data.title}</p>
                <p className="deskripsi">{props.data.body}</p>
                <button className="update" onClick={() => props.update(props.data)}>Edit</button>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default Post;