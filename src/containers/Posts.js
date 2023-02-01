import React from "react";
import Post from "../components/Post";

export default function Posts(props) {
  const list = props.postList.map((p) => (
    <Post id={p.id} key={p.id} title={p.title} author={p.author} />
  ));
  return list;
}
