import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import appIds from "@/data/app-ids.json";

import Review from "@/atomic/prototype/review";
import _, { Locale } from "@/i18n/locale";

export default {
    title: "Prototype",
} satisfies StoryDefault;

export const ReviewStory: Story = () => (
    <div className="ms-base-new ms-base-page">
        <Review
            appId={appIds["vitamin"]}
            codes={{
                countryCode: Locale.countryCode,
                languageCode: Locale.language,
            }}
            text={{
                head: _("REVIEW.HEAD"),
                description: _("REVIEW.DESCRIPTION"),
                link: _("REVIEW.LINK_ALL_REVIEWS"),
                fillerCard: {
                    head: [_("REVIEW.FILLER_CARD.HEAD1"), _("REVIEW.FILLER_CARD.HEAD2"), _("REVIEW.FILLER_CARD.HEAD3")],
                    link: _("REVIEW.FILLER_CARD.LINK"),
                },
            }}
        />
    </div>
);

ReviewStory.storyName = "Review";
