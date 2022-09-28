function BlogReadingDisplay(prop) {
  return (
    <div>
        <h1>{prop.post.title}</h1>
        <p>{prop.post.body}</p>
    </div>
  )
}

export default BlogReadingDisplay;
