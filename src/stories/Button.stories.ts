import type { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup } from '../components/Button/Button';

const meta = {
  title: 'components/Button',
  component: ButtonGroup,

  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    label: 'Button',
  },
};

export const OutlineButton: Story = {
  args: {
    type: 'default',
    label: 'Button',
  },
};

export const Dashed: Story = {
  args: {
    type: 'dashed',
    label: 'Button',
  },
};
