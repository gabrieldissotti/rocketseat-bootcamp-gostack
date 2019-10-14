import React, { Component } from "react";
import "./assets/css/reset.css";
import "./assets/css/fonts.css";

import "./App.css";

import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
