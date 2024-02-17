// Button.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

} satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'contained',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'contained',
    color: 'secondary',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    label: 'Text Button',
    variant: 'text',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};


