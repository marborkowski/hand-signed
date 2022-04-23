import { create } from "@storybook/theming";
import Logo from "./logo.svg";

export default create({
  base: "light",
  brandTitle: "Lazy Bastard",
  brandUrl: "https://github.com/marborkowski/hand-signed",
  brandImage: Logo,
});
