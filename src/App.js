import "./App.css";
import { useState } from "react";
import Posts from "./containers/Posts";

function App() {
  const post = [
    { id: 111, title: "Happiness", author: "John" },
    { id: 112, title: "MIU", author: "Dean" },
    { id: 113, title: "Enjoy Life", author: "Jasmine" },
  ];
  const [title, setTitle] = useState("");
  const [postsList, setPostList] = useState(post);
  const titleHandler = (title) => {
    const post = [...postsList];
    post[0].title = title;
    setPostList(post);
  };

  return (
  <div class="myDivapp">
      <Posts postList={postsList} />
     
      <input
        type="text"
        id="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <br />
      <button onClick={() => titleHandler(title)}>Change Name</button>
      </div>

  );
}

export default App;
