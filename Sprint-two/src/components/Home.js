import React, { Component } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Comments from "./Comments";
import Footer from "./Footer";
import Maincontent from "./Maincontent";
// import Upload from "./Upload";

export default function Home(props) {
  return (
    <>
      <div className="hero">
        <Hero videoInfo={props.videoInfo} />
      </div>
      <div className="container">
        <Maincontent videoInfo={props} />
        <Comments commentArray={props.state.commentArray} />
        {/* <Footer footerArray={props.state.arr} /> */}

        <div className="combo"></div>
      </div>
    </>
  );
}
// }

// export default Home;
