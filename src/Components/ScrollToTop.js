import React, { Component } from "react";

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      console.log("show");
      this.setState({
        is_visible: true
      });
    } else {
      console.log("not show");
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      // <div className="scroll-to-top">
      <React.Fragment>
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <a href="/" id="return-to-top">
              <i className="fa fa-chevron-up"></i>
            </a>
          </div>
        )}
      </React.Fragment>
      // </div>
    );
  }
}
