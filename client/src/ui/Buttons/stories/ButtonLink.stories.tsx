import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { ButtonLink } from '..';
import { GoogleIcon } from '../../Icons/Providers';

const meta: Meta<typeof ButtonLink> = {
  title: 'UI/Buttons/Link',
  tags: ['autodocs'],
  component: ButtonLink,
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

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
  render: (args) => <ButtonLink {...args} icon={<GoogleIcon />} />,
};
