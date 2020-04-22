import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <div id="video">
        <iframe
          title="IoT Analytical - Introduction"
          width="100%"
          height="550"
          src="https://www.youtube.com/embed/35kiDy5gnZs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default Video;
