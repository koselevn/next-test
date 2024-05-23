import Link from "next/link";

function Post({post}) {
  return (
    <div>
    <br />
      <Link href={'/'}>Back</Link> <br />
      <h2>{post.title}</h2> <br />
      <p>{post.body}</p><br />
      <strong>Autor: {post.userId}</strong>
    </div>
  )
}

export default Post