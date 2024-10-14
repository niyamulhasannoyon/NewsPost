import { useEffect, useState } from "react";
import PostElement from "./PostElement";


const NewsPost = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [])
    
    return (
        <div>
            <h1>Post {post.length}</h1>
            {
                post.map(post => <PostElement key={post.id} post ={post} ></PostElement>)
            }
        </div>
    );
};

export default NewsPost;