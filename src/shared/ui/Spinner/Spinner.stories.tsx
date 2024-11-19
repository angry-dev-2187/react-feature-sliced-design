import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "./Spinner";

import Flex from "~shared/ui/Flex";

const style: React.CSSProperties = {
  width: "100%",
  minHeight: "512px",
  padding: "56px 24px",
  overflow: "auto",
};

const meta: Meta<typeof Spinner> = {
  title: "DESIGN_SYSTEM: Spinner",
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "default",
  },

  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md"],
    },
    variant: {
      control: "select",
      options: ["highlight", "accent", "default"],
    },
  },

  render: (args) => {
    return (
      <Flex align="center" justify="center" style={style}>
        <Spinner {...args} />
      </Flex>
    );
  },
};
