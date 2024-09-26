import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button } from '..';
import { GoogleIcon } from '../../Icons/Providers';

const meta: Meta<typeof Button> = {
  title: 'UI/Buttons/Button',
  tags: ['autodocs'],
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Example',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Example',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    text: 'Example',
    variant: 'outline',
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Example',
    variant: 'secondary',
  },
  render: (args) => <Button {...args} icon={<GoogleIcon />} />,
};
