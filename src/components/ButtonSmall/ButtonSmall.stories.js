import { ButtonSmall } from ".";

export default {
  title: "Components/ButtonSmall",
  component: ButtonSmall,
  argTypes: {
    property1: {
      options: ["disabled", "hover", "press", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "disabled",
    className: {},
    subtract: "/img/subtract-3.svg",
  },
};
