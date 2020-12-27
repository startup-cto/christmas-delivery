import React from "react";
import { Meta, Story } from "@storybook/react";
import { Pixel } from "../../models/Pixel";
import { Props, SleighSprite } from "./SleighSprite";
import { Heading } from "../Sleigh";
import { PixelPerTick } from "../../models/PixelPerTick";

export default {
  title: "Christmas Delivery/Sprites/SleighSprite",
  component: SleighSprite,
} as Meta;

const Template: Story<Props> = (args) => <SleighSprite {...args} />;

export const Default = Template.bind({});
Default.args = {
  sleigh: {
    id: "1",
    command: null,
    heading: Heading.Left,
    maxSpeed: 10 as PixelPerTick,
    position: {
      x: 100 as Pixel,
      y: 100 as Pixel,
    },
  },
};
