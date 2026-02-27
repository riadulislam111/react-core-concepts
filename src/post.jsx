export default function Post ({post}) {
    return (
        <div className="userCard">
        <p>{post.body}</p>
        <p>Title: {post.title}</p>
        <p>Id: {post.id}</p>
        </div>
    )
}