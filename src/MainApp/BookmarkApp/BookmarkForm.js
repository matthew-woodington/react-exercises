import { nanoid } from "nanoid";
import { useState } from "react";

function BookmarkForm({ addBookmark, createTag }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBookmark = {
      title,
      url,
      tag,
      id: nanoid(),
    };
    addBookmark(newBookmark);
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setUrl("");
    setTag("");
  };

  return (
    <form className="bm-form" onSubmit={handleSubmit}>
      <h1 className="bm-form-title">Add New Bookmark</h1>
      <ul className="bm-form-list">
        <li className="bm-form-item">
          <label className="bm-label" htmlFor="title">
            Page Title:
          </label>
          <input
            className="bm-text"
            type="text"
            name="title"
            id="title-text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </li>
      </ul>
      <ul className="bm-form-list">
        <li className="bm-form-item">
          <label className="bm-label" htmlFor="url">
            URL:
          </label>
          <input
            className="bm-text"
            type="url"
            name="url"
            id="url-text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </li>
      </ul>
      <ul className="bm-form-list">
        <li className="bm-form-item">
          <label className="bm-label" htmlFor="tag">
            Sorting tag:
          </label>
          <input
            className="bm-text"
            type="text"
            name="tag"
            id="tag-text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </li>
      </ul>
      <div className="bm-buttons">
        <button className="bm-button" type="button" onClick={() => clearForm()}>
          Clear
        </button>
        <button className="bm-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default BookmarkForm;
