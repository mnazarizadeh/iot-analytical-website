import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

class Video extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <section id="video">
        <div id="video-install" className="video-pic">
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="35kiDy5gnZs"
            rel="0"
            onClose={() => this.setState({ isOpen: false })}
          />
          <button className="btn btn-lg" onClick={this.openModal}>
            <i className="fa fa-play fa-2x"></i>
          </button>
        </div>
      </section>
    );
  }
}

export default Video;
