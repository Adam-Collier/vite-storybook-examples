import React from 'react';
import { Text } from './index';

const props = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['left', 'right', 'center'],
      },
    },
    heading: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
        options: [
          '5xl',
          '4xl',
          '3xl',
          '2xl',
          'xl',
          'lg',
          'md',
          'base',
          'sm',
          'xs',
          'xxs',
        ],
      },
    },
  },
};

export default props;

const Template = (args) => <Text {...args} />;

export const Body = Template.bind({});

Body.args = {
  align: 'left',
  children: 'This is some text',
  element: 'p',
  lineHeight: 1.75,
  size: 'base',
  weight: 500,
};

export const Heading = Template.bind({});

Heading.args = { ...Body.args, heading: true, size: 'lg' };

export const Truncate = Template.bind({});

Truncate.args = {
  ...Body.args,
  children:
    'Vestibulum ac tellus vel velit malesuada molestie. Aliquam lectus augue, maximus quis ullamcorper sed, bibendum quis erat. Fusce sit amet efficitur nulla, at mattis mi. Integer vitae tempus tellus. In nec enim porttitor diam posuere commodo eu quis eros. Pellentesque urna erat, auctor non molestie vel, aliquet et leo. Integer eu feugiat libero. Maecenas ultricies lacus sit amet elit accumsan, id sodales nisl finibus. Curabitur nec diam sed quam vehicula laoreet a nec augue. Fusce efficitur pharetra nunc, id auctor metus interdum ut. Aliquam arcu nisi, elementum at pretium ac, eleifend sed tortor. Proin tempus erat sit amet lectus ultricies, vitae semper mauris interdum. Aliquam metus nisi, venenatis ac posuere scelerisque, facilisis ut purus. ',
  truncate: 2,
};
