import { nanoid } from "nanoid";
import { useState } from "react";

function BookmarkForm({ addBookmark, createTag }) {

    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [tag, setTag] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        const newBookmark = {
            title,
            url,
            tag,
            id: nanoid(),
        }
        addBookmark(newBookmark);
        clearForm();
    }

    const clearForm = () => {
        setTitle('');
        setUrl('');
        setTag('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Page Title:</label>
        <input 
            type="text" 
            name="title" 
            id="title-text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="url">URL:</label>
        <input 
            type="url" 
            name="url" 
            id="url-text" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
        />
        <label htmlFor="tag">Sorting tag:</label>
        <input 
            type="text" 
            name="tag" 
            id="tag-text" 
            value={tag}
            onChange={(e) => setTag(e.target.value)}
        />
        <button type="button" onClick={() => clearForm()}>Clear</button>
        <button type="submit">Submit</button>
    </form>
  );
}

export default BookmarkForm;
