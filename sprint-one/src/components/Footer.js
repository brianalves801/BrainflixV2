import React from "react";
import Video1 from "../Assets/Images/video-list-1.jpg";
import Video2 from "../Assets/Images/video-list-2.jpg";
import Video3 from "../Assets/Images/video-list-3.jpg";
import Video4 from "../Assets/Images/video-list-4.jpg";
import Video5 from "../Assets/Images/video-list-5.jpg";
import Video6 from "../Assets/Images/video-list-6.jpg";
import Video7 from "../Assets/Images/video-list-7.jpg";
import Video8 from "../Assets/Images/video-list-8.jpg";

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { footerArray: props.footerArray };
  }
  render() {
    let Video = this.props.footerArray.map(footerObject => {
      return (
        <div className="combination">
          <div className="footer__all">
            <div className="footer__video">
              <img src={footerObject.Image}></img>
            </div>
            <div className="footer__both">
              <p className="footer__title">{footerObject.Title}</p>
              <p className="footer__artist">{footerObject.Artist}</p>
            </div>
          </div>
        </div>
      );
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

// export default function footerArray(props) {
//   let videos = this.props.footerArray.map(footerObject => {
//     return (
//       <div className="footer__all">
//         <div className="footer__video">
//           <img src={footerObject.Image}></img>
//         </div>
//         <div className="footer__both">
//           <p className="footer__title">{footerObject.Title}</p>
//           <p className="footer__artist">{footerObject.Artist}</p>
//         </div>
//       </div>
//     );
//   });
//   return (
//     <>
//       <h3 className="footer__heading">
//         <hr />
//         Next Video
//       </h3>
//       <div className="footer__videos">{videos}</div>
//     </>
//   );
// }
