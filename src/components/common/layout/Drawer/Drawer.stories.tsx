import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DrawerPresentation } from "./Drawer";

export default {
  title: "layout/Drawer",
  component: DrawerPresentation,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DrawerPresentation>;

const Template: ComponentStory<typeof DrawerPresentation> = () => (
  <DrawerPresentation />
);

export const Primary = Template.bind({});
