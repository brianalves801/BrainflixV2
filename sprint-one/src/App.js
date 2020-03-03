import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Maincontent from "./components/Maincontent";
// import "./styles/style.css";

const footerArray = [
  {
    Image: require("./Assets/Images/video-list-1.jpg"),
    Title: "Becoming A Travel Pro In One Easy Lesson...",
    Artist: "Scotty Cranmer"
  },
  {
    Image: require("./Assets/Images/video-list-2.jpg"),
    Title: "Les Houches The Hidden Gem Of The...",
    Artist: "Scotty Cranmer"
  },
  {
    Image: require("./Assets/Images/video-list-3.jpg"),
    Title: "Travel Health Useful Medical Information...",
    Artist: "Scotty Cranmer"
  },
  {
    Image: require("./Assets/Images/video-list-4.jpg"),
    Title: "Cheap Airline Tickets Great Ways to Save",
    Artist: "Emily Harper"
  },
  {
    Image: require("./Assets/Images/video-list-5.jpg"),
    Title: "Take A Romantic Break In A Boutique Hotel",
    Artist: "Ethan Owen"
  },
  {
    Image: require("./Assets/Images/video-list-6.jpg"),
    Title: "Choose The Perfect Accommodations",
    Artist: "Lydia Perez"
  },
  {
    Image: require("./Assets/Images/video-list-7.jpg"),
    Title: "Cruising Destination Ideas",
    Artist: "Timothy Austin"
  },
  {
    Image: require("./Assets/Images/video-list-8.jpg"),
    Title: "Train Travel On Track For Safety",
    Artist: "Scotty Cranmer"
  }
];

const commentArray = [
  {
    Name: "Michael Lyons",
    Comment:
      "They BLEW the ROOF off at their last show, once everyone strted figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    Date: "12/18/2018"
  },
  {
    Name: "Gary Wong",
    Comment:
      "Every time I see hiim shred I feel so motivated to get off my couch and hop onn my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
    Date: "12/18/2018"
  },
  {
    Name: "Theodore Duncan",
    Comment:
      "How can someone be so good!!! You can tell her lives for this and loves to do it every day. Everytime I see him i feel instantly happy! He's definitely my favorite ever!",
    Date: "11/15/2018"
  }
];
function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <div className="combination">
          <Maincontent />
          <Comments commentArray={commentArray} />
        </div>
        <div className="combo">
          <Footer footerArray={footerArray} />
        </div>
      </div>
    </>
  );
}

export default App;
