function BlogReadingDisplay(prop) {
  return (
    <div className="active-blog">
      <h1 className="active-title">{prop.post.title || "Active Blog"}</h1>
      <p className="active-body">{prop.post.body}</p>
    </div>
  );
}

export default BlogReadingDisplay;
