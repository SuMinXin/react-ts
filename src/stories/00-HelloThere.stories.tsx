import React from "react";
import HelloClass from "../components/00-HelloThere/HelloClass";
import HelloFunction from "../components/00-HelloThere/HelloFunction"
import HelloPure from "../components/00-HelloThere/HelloPure"

export default {
  title: "00-HelloThere",
  parameters: {
    info: { inline: true }
  }
};

export const SayHello = () => (
  <>
    <div>Class Component </div>
    <HelloClass name="MinXin" gender="female" />
    <HelloClass name="FM" gender="M" />
    <br />
    <div>Functional Component</div>
    <HelloFunction name="JK" />
    <HelloFunction name="Judy" />

    <br />
    <div>Pure Component</div>
    <HelloPure name="Cindy" />
    <HelloPure name="Julie" />
  </>
);


