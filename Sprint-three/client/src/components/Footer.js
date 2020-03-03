import React from "react";

import { Link } from "react-router-dom";

export default class Video extends React.Component {
  render() {
    {
      if (this.props.footerArray === undefined) {
        return <p>Loading footer array</p>;
      } else {
        let Video = this.props.footerArray.map(footerObject => {
          let pathValue = this.props.activeID.pathname.split("/");
          let id = pathValue.pop();
          if (id !== footerObject.id) {
            return (
              <Link key={footerObject.id} to={"/videos/" + footerObject.id}>
                <div className="combination">
                  <div className="footer__all">
                    <div className="footer__video">
                      <img alt="Videoimage" src={footerObject.image}></img>
                    </div>
                    <div className="footer__both">
                      <p className="footer__title">{footerObject.title}</p>
                      <p className="footer__artist">{footerObject.channel}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          }
        });

        return (
          <>
            <h3 className="footer__heading">
              <hr className="footer__hr" />
              Next Video
            </h3>
            <div className="footer__videos">{Video}</div>
          </>
        );
      }
    }
  }
}
