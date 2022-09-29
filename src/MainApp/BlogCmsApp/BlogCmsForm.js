import { useState } from "react";
import { nanoid } from "nanoid";

function BlogCmsForm({ addBlog }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      body,
      id: nanoid(),
    };
    addBlog(newBlog);
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <form className="cms-form" onSubmit={handleSubmit}>
        <h1 className="cms-form-title">Add Blog</h1>
        <label className="cms-form-label" htmlFor="title">
          Blog Title:
        </label>
        <input
          className="cms-form-title-text"
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
          className="cms-form-body-text"
          required
          name="body"
          id="body-text"
          cols="30"
          rows="10"
          placeholder="Enter blog content here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <div className="cms-form-buttons">
          <button className="cms-button" type="button" onClick={(e) => clearForm()}>
            Clear
          </button>
          <button className="cms-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogCmsForm;
