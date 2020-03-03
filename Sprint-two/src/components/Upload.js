import React from "react";
import Home from "./Home";
import Header from "./Header";
import Uploadpic from "../Assets/Images/Uploadpic.jpg";
// import Thumbnail from "./";

export default function Upload() {
  return (
    <div className="upload__all">
      <Header />
      <div className="upload__title">Upload Video</div>
      <div className="upload__both">
        <div className="upload__thumbnail">
          <p className="upload__thumbnailtitle">VIDEO THUMBNAIL</p>
          <img className="upload__photo" src={Uploadpic} />
        </div>
        <div className="upload__context">
          <p className="upload__tyv">TITLE YOUR VIDEO</p>
          <textarea
            className="upload__titletextbox"
            placeholder="Add a title to your video"
            cols="20"
            rows="2"
          ></textarea>
          <p className="upload__avd">ADD A VIDEO DESCRIPTION</p>
          <textarea
            className="upload__descriptiontextbox"
            placeholder="Add a description of your video"
            cols="30"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div className="upload__footer">
        <p className="upload__cancel">CANCEL</p>
        <input
          className="upload__button"
          type="button"
          name="publish"
          value="PUBLISH"
        ></input>
      </div>
    </div>
  );
}
