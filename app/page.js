import Link from "next/link";

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}

export default async function Home() {
  const post = await fetchData();

  return (
    <div>
      <h1 className="main-h1">Main page</h1>
      {post.map((el) => ( 
        <div key={el.id} className="post">
          <h2>{el.title}</h2>
          <p>{el.body}</p>
          <Link href={`/post/${el.id}`}>More</Link>
        </div>
      ))}
    </div>
  );
}