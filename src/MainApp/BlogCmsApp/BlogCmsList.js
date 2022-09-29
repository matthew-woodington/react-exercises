function BlogCmsList({ blogs, displayPost }) {
  const blogTitles = blogs.map(({ title, id }) => (
    <li className="cms-list-item" key={id} onClick={() => displayPost(id)}>
      {title}
    </li>
  ));
  return (
    <div className="cms-blogs">
      <h1 className="cms-list-title">Blog Posts</h1>
      <p className="cms-instruction">- click to view -</p>
      <ul className="cms-list">{blogTitles}</ul>
    </div>
  );
}

export default BlogCmsList;
