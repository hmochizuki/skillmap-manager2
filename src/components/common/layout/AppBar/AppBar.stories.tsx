import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppBarPresentation as AppBar} from './AppBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'layout/AppBar',
  component: AppBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});