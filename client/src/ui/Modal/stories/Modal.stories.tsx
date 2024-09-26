import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/ui/Buttons';

import { Modal } from '..';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  tags: ['autodocs'],
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Base: Story = {
  render: () => (
    <Modal button={<Button text="Open" />} content={<div>content</div>} />
  ),
};
