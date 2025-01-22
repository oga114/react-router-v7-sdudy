import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import PostCard from "../app/components/PostCard";

export default {
  title: "Components/PostCard",
  component: PostCard,
  decorators: [
    (StoryComponent) => (
      <MemoryRouter initialEntries={["/"]}>
        <StoryComponent />
      </MemoryRouter>
    ),
  ],
} as Meta<typeof PostCard>;

const Template: StoryFn<{ post: { id: string; title: string; body: string } }> = (args) => (
  <PostCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  post: {
    id: "1",
    title: "Sample Post Title",
    body: "This is a sample post body content for the Default story.",
  },
};
