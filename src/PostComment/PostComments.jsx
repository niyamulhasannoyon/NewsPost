import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";



const PostComments = () => {

    const {postId} = useParams();

    const [postInfo, setPostInfo] = useState({})

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPostInfo(data))
    }, [])

    const { title, body} = postInfo;

    const postStyle = {
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
        width: '80%',
        cursor: 'pointer',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'white',
        overflowWrap: 'break-word',
    };

    return (
        <div>
            <div style={postStyle}>
            <h4>{postId}</h4>
            <h2>{title}</h2>
            <p>{body}</p>
            </div>
            <div>
                <Comments />
            </div>
        </div>
    );
};

export default PostComments;