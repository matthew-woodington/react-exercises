import { useState } from "react";


function BookmarkList({ bookmarks }) {

    const [filter, setFilter] = useState();

    const filterTags = (value) => {
        if (value === 'all') {
            setFilter(null)
        } else {
            setFilter(value)
        }
    }

    // const filterBookmarks = (bookmark) => {
    //     if (filter === null) {
    //         return bookmark
    //     } else if (filter === bookmark.tag) {
    //         return bookmark
    //     }
    // }

    const tags = bookmarks.map(bookmark => bookmark.tag);
    const uniqueTags = [...new Set(tags)];
    const filterOptions = uniqueTags.map((tag) => (
        <option key={tag} value={tag}>{tag}</option>
    ))

    const bookmarkListItems = bookmarks
    .filter(bookmark => {
        if (!filter) {
            return bookmark
        } else if (filter === bookmark.tag) {
            return bookmark
        }
    })
    .map((bookmark) => (
        <li key={bookmark.id}><a href={bookmark.url}>{bookmark.title}</a></li>
    ))

  return (
    <div>
        <select name="" id="" onChange={(e) => filterTags(e.target.value)}>
            <option value="all">all</option>
            {filterOptions}
        </select>
        <ul>{bookmarkListItems}</ul>
    </div>
  );
}

export default BookmarkList;
