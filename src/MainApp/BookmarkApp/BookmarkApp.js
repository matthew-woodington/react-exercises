import { useState } from "react";
import BookmarkForm from "./BookmarkForm";
import BookmarkList from "./BookmarkList";
import { nanoid } from "nanoid";

const INITIAL_LINKS = [
  {
    title: "React",
    url: "https://reactjs.org/",
    tag: "react",
    id: nanoid(),
  },
  {
    title: "Javascript",
    url: "https://www.javascript.com/",
    tag: "javascript",
    id: nanoid(),
  },
  {
    title: "Python",
    url: "https://www.python.org/",
    tag: "python",
    id: nanoid(),
  },
  {
    title: "NPMJS",
    url: "https://www.npmjs.com/",
    tag: "javascript",
    id: nanoid(),
  },
  {
    title: "React Bootstrap",
    url: "https://react-bootstrap.github.io/",
    tag: "react",
    id: nanoid(),
  },
];

function BookmarkApp() {
  const [bookmarks, setBookmarks] = useState(INITIAL_LINKS);

  const addBookmark = (newBookmark) => {
    setBookmarks([...bookmarks, newBookmark]);
  };

  return (
    <div className="bookmark-app">
      <BookmarkForm addBookmark={addBookmark} />
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
}

export default BookmarkApp;
