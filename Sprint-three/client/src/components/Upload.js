import React from "react";
import Header from "./Header";
import axios from "axios";
import Uploadpic from "../Assets/Images/Uploadpic.jpg";

export default class Upload extends React.Component {
  submitHandler = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5500/api/video/", {
        title: event.target.title.value,
        description: event.target.description.value,
        image: Uploadpic
      })
      .then(res => console.log(res.data));
  };
  render() {
    return (
      <>
        <Header />
        <form className="upload__all" onSubmit={this.submitHandler}>
          <div className="upload__title">Upload Video</div>
          <div className="upload__both">
            <div className="upload__thumbnail">
              <p className="upload__thumbnailtitle">VIDEO THUMBNAIL</p>
              <img className="upload__photo" alt="Uploadpic" src={Uploadpic} />
            </div>
            <div className="upload__context">
              <p className="upload__tyv">TITLE YOUR VIDEO</p>
              <textarea
                className="upload__titletextbox"
                placeholder="Add a title to your video"
                cols="20"
                rows="2"
                name="title"
              ></textarea>
              <p className="upload__avd">ADD A VIDEO DESCRIPTION</p>
              <textarea
                className="upload__descriptiontextbox"
                placeholder="Add a description of your video"
                cols="30"
                rows="5"
                name="description"
              ></textarea>
            </div>
          </div>
          <div className="upload__footer">
            <p className="upload__cancel">CANCEL</p>
            <button className="upload__button">PUBLISH</button>
          </div>
        </form>
      </>
    );
  }
}
