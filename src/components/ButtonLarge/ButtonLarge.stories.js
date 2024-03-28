import { ButtonLarge } from ".";

export default {
  title: "Components/ButtonLarge",
  component: ButtonLarge,
  argTypes: {
    hover: {
      options: ["disabled", "hover", "press", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    hover: "disabled",
    className: {},
    subtract: "/img/subtract-7.svg",
    text: "CREATE ACCOUNT",
    subtractClassName: {},
  },
};
