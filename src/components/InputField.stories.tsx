import type { Meta, StoryObj } from "@storybook/react-webpack5";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Forms/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "ghost"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    type: {
      control: "radio",
      options: ["text", "password"],
    },
    clearable: { control: "boolean" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Playground: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    helperText: "This will be public",
    variant: "outlined",
    size: "md",
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField label="Normal" placeholder="Type here..." />
      <InputField
        label="Error"
        placeholder="Enter password"
        invalid
        errorMessage="Password too short"
      />
      <InputField
        label="Disabled"
        placeholder="Can't type here"
        disabled
      />
      <InputField
        label="Loading"
        placeholder="Checking..."
        loading
      />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField label="Filled" placeholder="Filled input" variant="filled" />
      <InputField label="Outlined" placeholder="Outlined input" variant="outlined" />
      <InputField label="Ghost" placeholder="Ghost input" variant="ghost" />
    </div>
  ),
};

export const PasswordAndClearable: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField label="Password" placeholder="Enter password" type="password" />
      <InputField label="Search" placeholder="Type to search..." clearable />
    </div>
  ),
};