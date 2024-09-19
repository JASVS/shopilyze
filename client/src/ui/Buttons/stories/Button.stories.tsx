import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { PrimaryButton } from '..';
import { GoogleIcon } from '../../Icons/Providers';

const meta: Meta<typeof PrimaryButton> = {
  title: 'UI/Buttons/Button',
  tags: ['autodocs'],
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

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
  render: (args) => <PrimaryButton {...args} icon={<GoogleIcon />} />,
};
