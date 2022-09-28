import { useState } from "react";
import BookmarkForm from "./BookmarkForm";
import BookmarkList from "./BookmarkList";

function BookmarkApp() {
  const [bookmarks, setBookmarks] = useState([]);
  const [tags, setTags] = useState([]);

  const addBookmark = (newBookmark) => {
    setBookmarks([...bookmarks, newBookmark]);
  };

  const createTag = () => {
    const currentTags = bookmarks.map((bookmark) => bookmark.tag);
    console.log(currentTags);
    const uniqueTags = [...new Set(currentTags)];
    setTags(uniqueTags);
  };

  return (
    <div>
      <BookmarkForm addBookmark={addBookmark} createTag={createTag} />
      <BookmarkList bookmarks={bookmarks} tags={tags} />
    </div>
  );
}

export default BookmarkApp;
