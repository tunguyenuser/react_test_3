import React from "react";
import "./App.css";
// import Baitap1 from "./components/bai-tap1";
// import Baitap2 from "./components/bai-tap2";
import RenderingElements from "./rendering-elements";
import HandlingEvent from "./handling-event";
import ExampleHandlingEvent from "./handling-event/example-handling-event";
import State from "./state";
import BaiTapCar from "./handling-event/bai-tap-car";
import ListKeys from "./list-keys";
import Props from "./props";
import LiftingStateUp from "./lifting-state-up";
import LiftingStateUpCart from "./lifting-state-up-cart";
import Home from "./user-managerment/Home";

function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}

      <RenderingElements />
      <hr />
      <HandlingEvent />
      <hr />
      <ExampleHandlingEvent />
      <hr />
      <State />
      <hr />
      <BaiTapCar />
      <hr />
      <ListKeys />
      <hr />
      <Props />
      <hr />
      <LiftingStateUp />
      <hr />
      <LiftingStateUpCart />
      <hr />
      <Home />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
