import { Faq } from ".";

export default {
  title: "Components/Faq",
  component: Faq,
  argTypes: {
    property1: {
      options: ["open", "close", "hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "open",
    className: {},
    unchecked: "/img/unchecked-121718-1.svg",
  },
};
