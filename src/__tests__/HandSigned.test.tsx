import React from "react";
import renderer from "react-test-renderer";
import { HandSigned } from "../HandSigned";

it("changes the class when hovered", () => {
  const component = renderer.create(<HandSigned />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
