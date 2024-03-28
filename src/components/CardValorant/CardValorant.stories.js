import { CardValorant } from ".";

export default {
  title: "Components/CardValorant",
  component: CardValorant,
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
    subtract: "/img/subtract-24.svg",
    img: "/img/subtract-60.png",
    maskGroup: "/img/mask-group-14.png",
    valorantLogoBlack: "/img/valorant-logo-black-color-version-2-3.svg",
    overlapGroupClassName: {},
  },
};
