import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import Accordion from "@/atomic/molecule/accordion";
import _ from "@/i18n/locale";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const AccordionStory: Story = () => (
    <section className="w-100" style={{maxWidth:"1174px", height: "15%" }}>
        <Accordion
            title={_(`VITAMIN.VITAMIN_FAT.NAME`)}
            bgColor="#fff3e9"
            expandIconColor={"e95813"}
            bgImg={{ src: "/img/page/vitamin/vitamin-list-header-fat-bg.svg", width: 114, height: 132 }}
            mobileBgResized={false}
            defaultExpanded={false}
        >
            <p className="pt-4">Here is the content inside the accordion.</p>
        </Accordion>
    </section>
);

AccordionStory.storyName = "Accordion";
