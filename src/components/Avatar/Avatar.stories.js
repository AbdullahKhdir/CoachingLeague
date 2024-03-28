import { Avatar } from ".";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    property1: {
      options: ["challenger-1", "master-1", "challenger-2", "master-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "challenger-1",
    className: {},
    rectangleClassName: {},
  },
};
