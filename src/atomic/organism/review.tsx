import React from "react";

import { useMediaQuery, useReviewData } from "@/hooks";

import { ReviewDesktop, ReviewMobile } from "./review-layouts";
import ReviewHead from "../molecule/review-head";
import ReviewDescription from "../molecule/review-description";
import ReviewLink from "../molecule/review-link";
import ReviewCardSlider from "./review-card-slider";

import { TCountryCode } from "@/model/TCodes";

interface IReviewProps {
    headText: string;
    descriptionText: string;
    linkText: string;

    country_code: TCountryCode;
}

const LG_BOOTSTRAP = 992;

export default function Review({ country_code, descriptionText, headText, linkText }: IReviewProps) {
    const { reviews, appId } = useReviewData({ country_code });
    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);

    if (!reviews || !appId) return <></>;

    if (isMobile) {
        return (
            <ReviewMobile
                head={<ReviewHead text={headText} />}
                description={<ReviewDescription text={descriptionText} />}
                link={<ReviewLink text={linkText} id={appId} countryCode={country_code} />}
                slider={<ReviewCardSlider reviews={reviews} />}
            />
        );
    }

    return (
        <ReviewDesktop
            head={<ReviewHead text={headText} />}
            description={<ReviewDescription text={descriptionText} />}
            link={<ReviewLink text={linkText} id={appId} countryCode={country_code} />}
            slider={<ReviewCardSlider reviews={reviews} />}
        />
    );
}
