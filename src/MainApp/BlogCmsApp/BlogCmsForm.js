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
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title:</label>
        <input
          required
          name="title"
          id="title-text"
          type="text"
          placeholder="Blog title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Content:</label>
        <textarea
          required
          name="body"
          id="body-text"
          cols="30"
          rows="10"
          placeholder="Enter blog content here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="button" onClick={(e) => clearForm()}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BlogCmsForm;
