import React from "react";

import "./style.css";

import perfil from "../../assets/img/perfil.jpg";

function Header() {
  return (
    <div className="header">
      <h1 className="title">facebook.</h1>
      <div className="perfil">
        <span>Meu perfil</span>
        <img
          className="perfil-photo"
          src={perfil}
          alt="Foto de perfil de Gabriel Dissotti"
        />
      </div>
    </div>
  );
}

export default Header;
