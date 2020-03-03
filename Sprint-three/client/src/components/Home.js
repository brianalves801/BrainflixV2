import React, { Component } from "react";
import Hero from "./Hero";
import Comments from "./Comments";
import Maincontent from "./Maincontent";

export default function Home(props) {
  return (
    <>
      <div className="hero">
        <Hero videoInfo={props.videoInfo} />
      </div>
      <div className="container">
        <Maincontent videoInfo={props} />
        <Comments commentArray={props.state.commentArray} />

        <div className="combo"></div>
      </div>
    </>
  );
}
