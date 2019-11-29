import React from "react";
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default function Baitap1() {
  return (
    <div>
      <Header />
      <div className="contents">
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
