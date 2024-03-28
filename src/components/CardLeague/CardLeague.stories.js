import { CardLeague } from ".";

export default {
  title: "Components/CardLeague",
  component: CardLeague,
  argTypes: {
    property1: {
      options: ["DISABLED", "ACTIVE", "DEFAULT"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "DISABLED",
    className: {},
    subtract: "/img/subtract-27.svg",
    img: "/img/subtract-62.png",
    maskGroup: "/img/mask-group-5.png",
  },
};
