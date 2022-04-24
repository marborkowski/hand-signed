import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HandSigned } from "../HandSigned";
import initial from "../mock";

export default {
  title: "Hand-Signed/Example",
  component: HandSigned,
  argTypes: {},
} as ComponentMeta<typeof HandSigned>;

const Template: ComponentStory<typeof HandSigned> = (args) => {
  const mainRef = React.useRef(null);

  return (
    <>
      <HandSigned {...args} ref={mainRef} initialData={initial} />
      <button
        onClick={() =>
          console.log(JSON.stringify(mainRef.current.getRawData()))
        }
      >
        get data
      </button>
      <button
        onClick={() => console.log(JSON.stringify(mainRef.current.clear()))}
      >
        clear
      </button>
      <button onClick={() => console.log(mainRef.current.getCanvas())}>
        get canvas
      </button>
    </>
  );
};

export const Primary = Template.bind({});
