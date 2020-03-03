import React from "react";
import Mohan from "../Assets/Images/Mohan.jpg";

export default function CommentOutput(props) {
  if (props.comments) {
    let threeComments = props.comments.map((commentinfo, index) => {
      return (
        <>
          <div className="comment__hr">
            <hr />
            <div className="comments">
              <div className="comment__commentpiccontainer">
                <div className="comment__commentpic"></div>
              </div>
              <div className="comment__total">
                <div className="comment__both">
                  <p className="comment__name">{commentinfo.name}</p>
                  <p className="comment__date">{commentinfo.date}</p>
                </div>
                <p className="comment__comment">{commentinfo.comment}</p>
              </div>
            </div>
          </div>
        </>
      );
    });
    return (
      <>
        <div className="combination">
          <div className="comment__container">
            <div className="comment__title">
              <p>3 Comments</p>
            </div>
            <div className="comment__heading">
              <p>JOIN THE CONVERSATION</p>
            </div>
            <div className="comment__textboxcontainer">
              <div className="column">
                <img alt="Mohaan" className="comment__textboxpic" src={Mohan} />
              </div>
              <textarea
                className="comment__textbox"
                placeholder="That was easily the most spectacular BMX moment ever."
                cols="30"
                rows="5"
              ></textarea>

              <div className="comment__buttoncontainer">
                <input
                  className="comment__button"
                  id="--button"
                  type="button"
                  name="BUTTON"
                  value="COMMENT"
                />
              </div>
            </div>
            <div className="comment__threecomments">{threeComments}</div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
