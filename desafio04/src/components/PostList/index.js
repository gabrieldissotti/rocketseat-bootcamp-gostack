import React, { Component } from "react";

import "./style.css";

import Post from "../Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Gabriel Dissotti",
          avatar: "https://avatars1.githubusercontent.com/u/33178519?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "E aí, blz? Onde eu encontro bons conteúdos sobre css/sass?",
        comments: [
          {
            id: 1,
            author: {
              name: "Efraim Andrade",
              avatar:
                "https://avatars0.githubusercontent.com/u/28229600?s=400&v=4"
            },
            content:
              "Dá uma olhada no canal da rocketseat no youtube, eles sempre postam umas coisas muito legais, e ainda ensinam a criar varios layouts de alguns projetos do zero."
          },
          {
            id: 2,
            author: {
              name: "Mateus Vinínicus",
              avatar:
                "https://avatars0.githubusercontent.com/u/37267490?s=460&v=4"
            },
            content:
              "Mano, da uma olhada no meu site pro crash (ctrgrandprix.netlify.com)"
          },
          {
            id: 3,
            author: {
              name: "Marcos Dissotti",
              avatar:
                "https://avatars1.githubusercontent.com/u/15839676?s=460&v=4"
            },
            content: "Esse ClickUp é bom demais pra ser verdade."
          },
          {
            id: 4,
            author: {
              name: "Raquel Viana",
              avatar:
                "https://cdn.dribbble.com/users/2463415/avatars/small/open-uri20180803-31968-1h9bxoh?1533337040"
            },
            content:
              "Eu perdi todos os meus designs no XD e não tinha backup XD."
          },
          {
            id: 5,
            author: {
              name: "Leonardo Pinto",
              avatar:
                "https://cdn.dribbble.com/users/3170438/avatars/small/383f40eeb09cd2012b6180eb3c3c8bb0.png?1555900039"
            },
            content: "Mano, ninguém mais entra no minecraft.. ;'c"
          },
          {
            id: 6,
            author: {
              name: "Richard Souto",
              avatar:
                "https://res.cloudinary.com/iclouds/image/upload/v1553610174/iclouds_2019/members/jpg/richardsouto-hover.jpg"
            },
            content: "Meeeu, eu comprei um carro com wordpress meeu..."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
