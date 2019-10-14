import React from "react";
import "./style.css";

function Comment({ comment }) {
  return (
    <div className="comment">
      <img
        className="photo"
        src={comment.author.avatar}
        alt="Foto do perfil de Gabriel"
      />
      <p className="message">
        <strong className="name">{comment.author.name} </strong>
        {comment.content}
      </p>
    </div>
  );
}

export default Comment;
