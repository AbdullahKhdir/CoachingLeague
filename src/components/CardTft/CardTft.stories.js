import { CardTft } from ".";

export default {
  title: "Components/CardTft",
  component: CardTft,
  argTypes: {
    property1: {
      options: ["DISABLED", "ACTIVE", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "DISABLED",
    className: {},
    subtract: "/img/subtract-20.svg",
    maskGroup: "/img/mask-group.png",
    img: "/img/mask-group-11.png",
    teamfightTactics: "/img/teamfight-tactics-seeklogo-3-2.svg",
    overlapGroupClassName: {},
  },
};
