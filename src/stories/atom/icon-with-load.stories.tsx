import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import IconWithLoad from "@/atomic/atom/icon-with-load";

export default {
    title: "Atom",
} satisfies StoryDefault;

export const IconWithLoadStory: Story<{
		classActive: string;
		classPassive: string;
		isActive: boolean;
		isLoading: boolean;
}> = (props) => (
		<IconWithLoad {...props} />
);

IconWithLoadStory.args = {
		classActive: "active",
		classPassive: "passive",
		isActive: true,
		isLoading: true
};

IconWithLoadStory.storyName = "IconWithLoad";