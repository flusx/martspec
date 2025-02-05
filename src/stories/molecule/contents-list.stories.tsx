import React from "react";
import type { Story, StoryDefault } from "@ladle/react";

import ContentsList from "@/atomic/molecule/contents-list";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const ContentsListStory: Story = () => (
    <section className="personality-trait d-flex justify-content-center">
        <div className="contents-list">
            <ContentsList PAGE="ANXIETY" CONTENTS_COUNT={5} />
        </div>
    </section>
);

ContentsListStory.storyName = "ContentsList";
