import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Dropdown, DropdownOption } from './Dropdown';
import { MdInfo } from 'react-icons/md';
import { pxToRem } from '../../shared';

const TemplateOptions: DropdownOption[] = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
  { label: 'Four', value: 4 },
];

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  render: (args) => {
    const [current, setCurrent] = useState<number | undefined>(undefined);

    return (
      <Dropdown
        {...args}
        value={current}
        onChange={(e) => setCurrent(Number(e.target.value))}
      >
        {TemplateOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label || option.value}
          </option>
        ))}
      </Dropdown>
    );
  },
  args: {
    placeholder: 'Default Dropdown menu',
    label: 'Label',
    helperText: '',
    error: false,
    required: false,
    variant: 'outlined',
    style: {
      width: pxToRem(300),
    },
  },

  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1416-80014&t=jaciSdrjiv4kZ1qN-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1416-82426&t=jaciSdrjiv4kZ1qN-4',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

/**
 * FIlled Dropdoen menu
 */
export const Outlined: Story = {};

/**
 * Dropdown menu with error
 */
export const Error: Story = {
  args: {
    error: true,
  },
};

/**
 * Dropdown menu with end icon
 */
export const EndIcon: Story = {
  args: {
    endIcon: <MdInfo size={pxToRem(24)} />,
  },
};

/**
 * Disabled Dropdown menu
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },

  parameters: {
    a11y: {
      config: {
        // Element has disabled attribute for screen readers, so contrast can be ignored
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Component should be disabled
    await userEvent.click(canvas.getByTestId('dropdown'));
    expect(canvas.getByTestId('dropdown')).toBeDisabled();
  },
};

/**
 * Dropdown menu with interaction test
 */
export const ChangeValueTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Component should be enabled
    await userEvent.click(canvas.getByTestId('dropdown'));
    expect(canvas.getByTestId('dropdown')).toBeEnabled;

    // Try switching between options and see that the displayed value is reflected correctly
    fireEvent.change(canvas.getByTestId('dropdown'), { target: { value: 2 } });
    await userEvent.click(canvas.getByDisplayValue('Two'));
    fireEvent.change(canvas.getByTestId('dropdown'), { target: { value: 1 } });
    await userEvent.click(canvas.getByDisplayValue('One'));
  },
};

/**
 * Outlined Dropdown menu
 */
export const Filled: Story = {
  args: {
    variant: 'outlined',
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=691-10867&t=jaciSdrjiv4kZ1qN-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1416-77602&t=jaciSdrjiv4kZ1qN-4',
      },
    ],
  },
};
