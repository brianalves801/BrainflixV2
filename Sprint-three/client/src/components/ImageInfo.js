import React, { Component } from "react";
import Viewicon from "../Assets/Icons/PNG/views.png";
import Likeicon from "../Assets/Icons/PNG/likes.png";
export default class ImageInfo extends React.Component {
  render() {
    return (
      <div className="combination">
        <div className="maincontent__textcontainer">
          <div className="maincontent__title">{this.props.imageInfo.title}</div>
          <div className="maincontent__semicontainer">
            <div className="maincontent__author">
              <p>{this.props.imageInfo.channel}</p>
              <p className="maincontent__date">
                {this.props.imageInfo.timestamp}
              </p>
            </div>
            <div className="maincontent__icons">
              <div className="maincontent__views">
                <img
                  className="maincontent__viewsicon"
                  alt="view"
                  src={Viewicon}
                />
                <p className="maincontent__iconnumber">
                  {this.props.imageInfo.views}
                </p>
              </div>
              <div className="maincontent__likes">
                <img
                  className="maincontent__likesicon"
                  alt="likes"
                  src={Likeicon}
                />
                <p className="maincontent__iconnumber">
                  {this.props.imageInfo.likes}
                </p>
              </div>
            </div>
          </div>
          <p className="maincontent__text">
            {this.props.imageInfo.description}
          </p>
        </div>
      </div>
    );
  }
}
