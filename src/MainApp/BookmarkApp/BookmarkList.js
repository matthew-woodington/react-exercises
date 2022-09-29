import { useState } from "react";

function BookmarkList({ bookmarks }) {
  const [filter, setFilter] = useState();

  const filterTags = (value) => {
    if (value === "all") {
      setFilter(null);
    } else {
      setFilter(value);
    }
  };

  // const filterBookmarks = (bookmark) => {
  //     if (filter === null) {
  //         return bookmark
  //     } else if (filter === bookmark.tag) {
  //         return bookmark
  //     }
  // }

  const tags = bookmarks.map((bookmark) => bookmark.tag);
  const uniqueTags = [...new Set(tags)];
  const filterOptions = uniqueTags.map((tag) => (
    <option key={tag} value={tag}>
      {tag}
    </option>
  ));

  const bookmarkListItems = bookmarks
    .filter((bookmark) => {
      if (!filter) {
        return bookmark;
      } else if (filter === bookmark.tag) {
        return bookmark;
      }
    })
    .map((bookmark) => (
      <li className="bm-item" key={bookmark.id}>
        <a className="bm-link" href={bookmark.url}>
          {bookmark.title}
        </a>
      </li>
    ));

  return (
    <div className="bm-column">
      <h1 className="bm-col-title">Bookmarks</h1>
      <select className="bm-select" name="" id="" onChange={(e) => filterTags(e.target.value)}>
        <option value="all">- Sort Bookmarks -</option>
        {filterOptions}
      </select>
      <ul className="bm-list">{bookmarkListItems}</ul>
    </div>
  );
}

export default BookmarkList;
