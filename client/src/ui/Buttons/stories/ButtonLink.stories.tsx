import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { PrimaryButtonLink } from '..';
import { GoogleIcon } from '../../Icons/Providers';

const meta: Meta<typeof PrimaryButtonLink> = {
  title: 'UI/Buttons/Link',
  tags: ['autodocs'],
  component: PrimaryButtonLink,
};

export default meta;
type Story = StoryObj<typeof PrimaryButtonLink>;

export const Primary: Story = {
  args: {
    text: 'Example',
    href: '/',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Example',
    href: '/',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    text: 'Example',
    href: '/',
    variant: 'outline',
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Example',
    href: '/',
    variant: 'secondary',
  },
  render: (args) => <PrimaryButtonLink {...args} icon={<GoogleIcon />} />,
};
