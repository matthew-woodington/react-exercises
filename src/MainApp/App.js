import { useState } from "react";
import "./App.css";
import BlogCms from "./BlogCmsApp/BlogCms";
import BlogForm from "./BlogForm/BlogForm";
import BlogReadingApp from "./BlogReadingApp/BlogReadingApp";
import BookmarkApp from "./BookmarkApp/BookmarkApp";
import ContactList from "./ContactApp/ContactApp";

// const APP_OPTIONS = ["blog-form", "reading", "contacts", "bookmark", "blog-cms", "main"];

function App() {
  const [appView, setAppView] = useState("main");

  let activeHTML;
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
      <nav className="nav-bar">
        <div className="site-name" onClick={() => setAppView("main")}>App Library</div>
        <button className="nav-button" type="button" onClick={() => setAppView("blog-form")}>
          Blog Form
        </button>
        <button className="nav-button" type="button" onClick={() => setAppView("contacts")}>
          Contact List
        </button>
        <button className="nav-button" type="button" onClick={() => setAppView("reading")}>
          Blog Reader
        </button>
        <button className="nav-button" type="button" onClick={() => setAppView("bookmark")}>
          Bookmark App
        </button>
        <button className="nav-button" type="button" onClick={() => setAppView("blog-cms")}>
          Blog CMS
        </button>
      </nav>
      <main className="main-site">{activeHTML}</main>
    </div>
  );
}

export default App;
