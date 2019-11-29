import React, { Component } from "react";
import Header from "./header";
import Slide from "./slide";
import WhatWeDo from "./what-we-do";
import Contact from "./contact";
import ListCard from "./list-card";
import Footer from "./footer";

export default class Baitap2 extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slide />
        <div className="row">
          <WhatWeDo />
          <Contact />
        </div>
        <ListCard />
        <Footer />
      </div>
    );
  }
}
