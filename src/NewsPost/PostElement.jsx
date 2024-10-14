import { Link } from 'react-router-dom';

const PostElement = (props) => {

    const {id, title, body} = props.post;
    
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
        <div style={postStyle}>
            <p>{id}</p>
            <h3>{title}</h3>
            <p>{body}</p>
            <> <Link to={`/post/${id}`} >Details</Link> </>
        </div>
    );
};

export default PostElement;