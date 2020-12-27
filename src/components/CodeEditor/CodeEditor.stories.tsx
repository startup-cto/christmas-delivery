import React from "react";
import { Meta, Story } from "@storybook/react";
import { CodeEditor, Props } from "./CodeEditor";

export default {
  title: "Christmas Delivery/CodeEditor",
  component: CodeEditor,
} as Meta;

const Template: Story<Props> = (args) => <CodeEditor {...args} />;

export const Default = Template.bind({});
