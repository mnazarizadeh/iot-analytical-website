import React, { Component } from "react";
import { Player, BigPlayButton } from "video-react";
import "./../assets/css/video-react.css";

class Video extends Component {
  render() {
    return (
      <div id="video">
        <Player
          poster="assets/img/video-pic.jpg"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <BigPlayButton position="center" />
        </Player>
      </div>
    );
  }
}

export default Video;
