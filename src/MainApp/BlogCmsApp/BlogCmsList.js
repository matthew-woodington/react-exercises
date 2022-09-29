function BlogCmsList({ blogs, displayPost }) {
  const blogTitles = blogs.map(({ title, id }) => (
    <li key={id} onClick={() => displayPost(id)}>
      {title}
    </li>
  ));
  return <ul>{blogTitles}</ul>;
}

export default BlogCmsList;
