import React from 'react';
import AnimatedText from '../AnimatedText/AnimatedText';

export default {
  title: 'Components/AnimatedText',
  component: AnimatedText,
};

const Template = (args) => <AnimatedText {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello World!',
};
