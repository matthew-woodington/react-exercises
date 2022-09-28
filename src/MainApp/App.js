import { useState } from 'react';
import "./App.css";
import BlogCms from "./BlogCmsApp/BlogCms";
import BlogForm from "./BlogForm/BlogForm";
import BlogReadingApp from "./BlogReadingApp/BlogReadingApp";
import BookmarkApp from "./BookmarkApp/BookmarkApp";
import ContactList from "./ContactList/ContactList";

const APP_OPTIONS = ["blog-form", "reading", "contacts", "bookmark", "blog-cms", "main"]

function App() {

  const [appView, setAppView] = useState("main");

  let activeHTML 
  if (appView === "main") {
    activeHTML = "";
  } else if (appView === "blog-form") {
    activeHTML = <BlogForm />;
  } else if (appView === "reading") {
    activeHTML = <BlogReadingApp />;
  } else if (appView === "contacts") {
    activeHTML = <ContactList />;
  } else if (appView === "bookmark") {
    activeHTML = <BookmarkApp />;
  } else if (appView === "blog-cms") {
    activeHTML = <BlogCms />;
  }


  return (
    <div className="App">
      <nav>
        <button type="button" onClick={() => setAppView("blog-form")}>Blog Form</button>
        <button type="button" onClick={() => setAppView("contacts")}>Contact List</button>
        <button type="button" onClick={() => setAppView("reading")}>Blog Reader</button>
        <button type="button" onClick={() => setAppView("bookmark")}>Bookmark App</button>
        <button type="button" onClick={() => setAppView("blog-cms")}>Blog CMS</button>
      </nav>
      <main>{activeHTML}</main>
    </div>
  );
}

export default App;
