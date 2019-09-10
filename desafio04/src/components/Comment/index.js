import React from "react";
import "./style.css";

import profile from "../../assets/img/perfil.jpg";

function Comment() {
  return (
    <div className="comment">
      <img className="photo" src={profile} alt="Foto do perfil de Gabriel" />
      <p className="message">
        <strong className="name">Gabriel Dissotti </strong>
        Dá uma olhada no canal da rocketseat no youtube, eles sempre postam umas
        coisas muito legais, e ainda ensinam a criar varios layouts de alguns
        projetos do zero.
      </p>
    </div>
  );
}

export default Comment;
