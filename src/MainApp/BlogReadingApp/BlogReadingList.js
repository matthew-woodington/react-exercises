function BlogReadingList({ blogs, displayPost }) {
  const blogTitles = blogs.map(({ title, id }) => (
    <li className="blog-list-item" key={id} onClick={() => displayPost(id)}>
      {title}
    </li>
  ));
  return <ul className="blog-list">{blogTitles}</ul>;
}

export default BlogReadingList;
