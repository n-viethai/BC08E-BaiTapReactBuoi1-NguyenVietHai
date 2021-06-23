import React, { Component } from "react";
import BannerCoponent from "./BannerCoponent";
import ItemComponent from "./ItemComponent";

export default class BodyCoponent extends Component {
  render() {
    return (
      <div>
          <BannerCoponent />
          <ItemComponent />
      </div>
    );
  }
}
