import React from "react";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

export default class ScrollToTop extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          ContainerClassName="MyOverRideClass"
          style={{ background: "#007bff" }}
        />
      </div>
    );
  }
}
