import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import { Footer } from "@/atomic/organism/footer";

export default {
    title: "Organism",
} satisfies StoryDefault;

export const FooterStory: Story = () => (
    <div className="w-100">
        <Footer />
    </div>
);

FooterStory.storyName = "Footer";
