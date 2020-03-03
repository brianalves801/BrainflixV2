import React, { Component } from "react";
import axios from "axios";
import Footer from "./Footer";
import Comments from "./Comments";
import Header from "./Header";
import Hero from "./Hero";
import ImageInfo from "./ImageInfo";

class Maincontent extends Component {
  state = {};
  async componentDidMount() {
    const theId = this.props.videoInfo.match.params.id;
    await axios
      .all([
        axios.get(`http://localhost:5500/api/video`),
        axios.get(`http://localhost:5500/api/video/${theId}`)
      ])
      .then(responseArray => {
        this.setState({
          videos: responseArray[0].data,
          videoInfo: responseArray[1].data
        });
      });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state) {
      if (this.state.videoInfo) {
        if (this.state.videoInfo.id !== this.props.videoInfo.match.params.id) {
          const theId = this.props.videoInfo.match.params.id;
          await axios
            .all([
              axios.get(`http://localhost:5500/api/video`),
              axios.get(`http://localhost:5500/api/video/${theId}`)
            ])
            .then(responseArray => {
              this.setState({
                videos: responseArray[0].data,
                videoInfo: responseArray[1].data
              });
            });
        }
      }
      if (this.state.videos) {
      }
    }
  }
  render() {
    if (this.state.videoInfo) {
      return (
        <>
          <div>
            <Header videoInfo={this.state} />
            <Hero videoInfo={this.state} />
            <div className="combo1">
              <div className="combo2">
                <ImageInfo imageInfo={this.state.videoInfo} />
                <Comments comments={this.state.videoInfo.comments} />
              </div>
              <div className="combo3">
                <Footer
                  footerArray={this.state.videos}
                  activeID={this.props.videoInfo.location}
                />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default Maincontent;
