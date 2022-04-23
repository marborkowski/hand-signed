import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HandSigned } from "../HandSigned";

export default {
  title: "Hand-Signed/Example",
  component: HandSigned,
  argTypes: {},
} as ComponentMeta<typeof HandSigned>;

const Template: ComponentStory<typeof HandSigned> = (args) => (
  <HandSigned {...args} />
);

export const Primary = Template.bind({});
