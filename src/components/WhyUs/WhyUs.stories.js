import { WhyUs } from ".";

export default {
  title: "Components/WhyUs",
  component: WhyUs,
  argTypes: {
    property1: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover",
    className: {},
    subtract: "/img/subtract-2.svg",
    shield: "/img/shield-109123-2-1.svg",
    divClassName: {},
  },
};
