import { useState } from "react";


function BookmarkList({ bookmarks, tags }) {

    const [filter, setFilter] = useState("all");

    const filterButtons = tags.map((tag) => (
        <button onClick={() => setFilter(tag)}>{tag}</button>
    ));

    const filterOptions = () => {
        if (bookmarks.tag === filter) {
            return (bookmarks) => bookmarks.tag;
        } else if (filter === "all") {
            return (bookmarks) => bookmarks;
        }
    }

    const listItems = bookmarks
    .filter(filterOptions)
    .map(({ title, url, id }) => (
        <li key={id}>
            <a href={url}>{title}</a>
        </li>
    ));
  return (
    <div>
        <button onClick={() => setFilter("all")}>All</button>
        {filterButtons}
        <ul>{listItems}</ul>
    </div>
  );
}

export default BookmarkList;
