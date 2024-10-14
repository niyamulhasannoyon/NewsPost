

const Comments = () => {
    
    const comments = [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "image": "https://ibb.co.com/gJBkbKM",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "image": "https://ibb.co.com/JzG042v",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
            "image": "https://ibb.co.com/vjfzzR1",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        {
            "postId": 3,
            "id": 13,
            "name": "aut inventore non pariatur sit vitae voluptatem sapiente",
            "email": "Kariane@jadyn.tv",
            "image": "https://ibb.co.com/z2p0999",
            "body": "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et"
        },
    ]
    return (
        <div>
            <h3>Comments</h3>
            {
                comments.map(comment => (
                    <div key={comment.id}>
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                        <img src={comment.image} alt={comment.name} />
                    </div>
                ))
            }
        </div>
    );
};

export default Comments;