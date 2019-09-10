import React from "react";

import "./style.css";

import profile from "../../assets/img/perfil.jpg";

import Comment from "../Comment";

function Post() {
  return (
    <div className="post">
      <div className="header">
        <img className="photo" src={profile} alt="Foto do perfil de Gabriel" />
        <div className="profile">
          <p className="name">Gabriel Dissotti</p>
          <p className="date">04 Jun 2019</p>
        </div>
      </div>
      <div className="question">
        <p>
          E aí, blz? <br /> <br />
          <br />
          Onde posso encontrar um bom conteúdo sobre como trabalhar com css/sass
          ?
        </p>
      </div>
      <div className="answers">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}

export default Post;
