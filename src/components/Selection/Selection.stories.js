import { Selection } from ".";

export default {
  title: "Components/Selection",
  component: Selection,
  argTypes: {
    property1: {
      options: ["selected", "INVALID-COUPON", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "selected",
    className: {},
    groupClassName: {},
    vector: "/img/vector.svg",
    group: "/img/group-10365743-1-1.svg",
    subtract: "/img/subtract-13.svg",
    divClassName: {},
    buttonSmallSubtract: "/img/subtract-14.svg",
    check: "/img/check-222359-1.svg",
    frame: "/img/frame.svg",
    precision: "/img/precision-4610224-1.svg",
  },
};
