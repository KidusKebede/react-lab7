import React from "react";
import './Post.css';

export default function Post(props) {
  return (
    <div class="myDiv">
      <h1>ID: {props.id}</h1>
      <h1>Title:{props.title}</h1>
      <h2>Author:{props.author}</h2>
    </div>
  );
}
