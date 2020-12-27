import React from "react";
import { Meta, Story } from "@storybook/react";

import { ProjectDescription } from "./ProjectDescription";

export default {
  title: "Christmas Delivery/ProjectDescription",
  component: ProjectDescription,
} as Meta;

const Template: Story = (args) => <ProjectDescription {...args} />;

export const Default = Template.bind({});
