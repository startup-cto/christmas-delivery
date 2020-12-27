import React from "react";
import { Meta, Story } from "@storybook/react";
import { HouseSprite, Props } from "./HouseSprite";
import { Pixel } from "../../models/Pixel";

export default {
  title: "Christmas Delivery/Sprites/HouseSprite",
  component: HouseSprite,
} as Meta;

const Template: Story<Props> = (args) => <HouseSprite {...args} />;

export const Default = Template.bind({});
Default.args = {
  position: {
    x: 100 as Pixel,
    y: 100 as Pixel,
  },
};
