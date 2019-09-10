import React from "react";

import "./style.css";

import profile from "../../assets/img/perfil.jpg";

import Comment from "../Comment";

function Post({ post }) {
  return (
    <div className="post">
      <div className="header">
        <img className="photo" src={profile} alt="Foto do perfil de Gabriel" />
        <div className="profile">
          <p className="name">{post.author.name}</p>
          <p className="date">{post.date}</p>
        </div>
      </div>
      <div className="question">
        <p>{post.content}</p>
      </div>
      <div className="answers">
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Post;
