import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import BodyCoponent from "./BodyCoponent";
import FooterCoponent from "./FooterCoponent";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BodyCoponent />
        <FooterCoponent />
      </div>
    );
  }
}
