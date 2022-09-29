import { useState } from "react";
import { nanoid } from "nanoid";

function BlogForm() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      body,
      id: nanoid(),
    };
    setBlogs([...blogs, newBlog]);
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setBody("");
  };

  return (
    <div className="form1-container">
      <h1 className="form1-title">Create New Blog</h1>
      <form className="blog-form1" onSubmit={handleSubmit}>
        <label className="blog1-title-label" htmlFor="title">
          Blog Title:
        </label>
        <input
          className="blog1-title"
          required
          name="title"
          id="title-text"
          type="text"
          placeholder="Blog title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body"></label>
        <textarea
          className="blog1-text"
          required
          name="body"
          id="body-text"
          cols="80"
          rows="15"
          placeholder="Enter blog content here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <section className="form1-buttons">
          <button className="form1-button" type="button" onClick={(e) => clearForm()}>
            Clear
          </button>
          <button className="form1-button" type="submit">
            Submit
          </button>
        </section>
      </form>
    </div>
  );
}

export default BlogForm;
