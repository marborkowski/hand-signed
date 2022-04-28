import React from "react";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HandSigned } from "../HandSigned";
import initial from "./assets/mock";
import "./styles.css";

export default {
  title: "Hand-Signed/Example",
  component: HandSigned,
  argTypes: {
    initialData: {
      description: "overwritten description",
      defaultValue: initial,
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof HandSigned>;

const Template: ComponentStory<typeof HandSigned> = (args) => {
  const mainRef = React.useRef(null);

  const showResponse = (name, response) => {
    action(name || "")(response);
  };

  return (
    <>
      <div>
        <HandSigned
          style={{ border: "1px solid #ccc" }}
          {...args}
          ref={mainRef}
        />
      </div>
      <div className="buttons">
        <button
          onClick={() => showResponse("data", mainRef.current.getRawData())}
        >
          get raw data
        </button>
        <button onClick={() => mainRef.current.clear()}>clear</button>
        <button
          onClick={() => showResponse("canvas", mainRef.current.getDataURL())}
        >
          get base64 image/png data
        </button>

        <button
          onClick={() => showResponse("ref", mainRef.current.internalRef)}
        >
          get ref
        </button>
      </div>
    </>
  );
};

export const Primary = Template.bind({});
