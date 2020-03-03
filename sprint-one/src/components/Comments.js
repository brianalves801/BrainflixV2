import React from "react";
import Mohan from "../Assets/Images/Mohan.jpg";

// export default function commentArray(props) {
//   let threeComments = props.commentArray.map(commentObject => {
//     return (
//       <div className="comments">
//         <p className="footer__namedate">
//           <hr />
//           {commentObject.Name} {commentObject.Date}
//         </p>
//         <p className="footer__comment">{commentObject.Comment}</p>
//       </div>
//     );
//   });

// export default Comments;
export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { commentArray: props.commentArray };
  }
  render() {
    let threeComments = this.state.commentArray.map(commentObject => {
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
                  <p className="comment__name">{commentObject.Name}</p>
                  <p className="comment__date">{commentObject.Date}</p>
                </div>
                <p className="comment__comment">{commentObject.Comment}</p>
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
                <img className="comment__textboxpic" src={Mohan} />
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
  }
}

//   return (
//     <>
//       <div className="comment__container">
//         <div className="comment__title">
//           <p>3 Comments</p>
//         </div>
//         <div className="comment__heading">
//           <p>JOIN THE CONVERSATION</p>
//         </div>
//         <div className="comment__textboxcontainer">
//           <div className="column">
//             <img className="comment__textboxpic" src={Mohan} />
//           </div>
//           <textarea
//             className="comment__textbox"
//             placeholder="That was easily the most spectacular BMX moment ever."
//             cols="30"
//             rows="5"
//           ></textarea>

//           <div className="comment__buttoncontainer">
//             <input
//               className="comment__button"
//               id="--button"
//               type="button"
//               name="BUTTON"
//               value="COMMENT"
//             />
//           </div>
//         </div>
//         <div className="comment__threecomments">{threeComments}</div>
//       </div>
//     </>
//   );
// }
