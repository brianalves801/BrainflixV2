import React from "react";

export default function Hero(props) {
  if (props.videoInfo) {
    return (
      <div>
        <div className="hero__container">
          <video
            className="hero__vid"
            controls
            poster={props.videoInfo.videoInfo.image}
          />
        </div>
      </div>
    );
  } else {
    return <> </>;
  }
}
