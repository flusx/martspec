import React from "react";
import _, { Locale } from "@/i18n/locale";

import CardReview from "../molecule/card-review";
import RightArrowIcon from "../atom/right-arrow-icon";
import { useMediaQuery } from "@/hooks";

// mb move into i18n/locale.ts
const COUNTRY_CODE = (): string => {
    const code = Locale.language;

    switch (code) {
        case "en":
            return "us";
        case "hi":
            return "in";
        case "ja":
            return "jp";
        case "uk":
            return "ua";
        case "zh":
            return "cn";
        case "ar":
            return "ae";

        default:
            return code;
    }
};

// temp data
// remove it after implementing the fetch func from apple api
const REVIEW_DATA = {
    data: [
        {
            type: "customerReviews",
            id: "00000028-b08c-0014-9674-c54800000000",
            attributes: {
                rating: 5,
                title: "Pretty Stellar",
                body: "Приложение супер. Я все время забывала выпить лекарство, теперь мне приходит уведомление и все сохраняется. Добавьте функцию автосохранения, а то некоторые изменения появляются только после перезагрузки приложения.",
                reviewerNickname: "Oxy39",
                createdDate: "2024-01-02T11:19:36-07:00",
                territory: "USA",
            },
            relationships: {
                response: {
                    links: {
                        self: "https://api.appstoreconnect.apple.com/v1/customerReviews/00000028-b08c-0014-9674-c54800000000/relationships/response",
                        related:
                            "https://api.appstoreconnect.apple.com/v1/customerReviews/00000028-b08c-0014-9674-c54800000000/response",
                    },
                },
            },
            links: {
                self: "https://api.appstoreconnect.apple.com/v1/customerReviews/00000028-b08c-0014-9674-c54800000000",
            },
        },
    ],
    links: {
        self: "https://api.appstoreconnect.apple.com/v1/appStoreVersions/d716c220-3de9-4cf2-a885-8cfb43a11087/customerReviews?filter%5Bterritory%5D=USA&limit=1",
        next: "https://api.appstoreconnect.apple.com/v1/appStoreVersions/d716c220-3de9-4cf2-a885-8cfb43a11087/customerReviews?cursor=AQ.AJJtGDc&filter%5Bterritory%5D=USA&limit=1",
    },
    meta: {
        paging: {
            total: 10,
            limit: 1,
        },
    },
};

const CC = COUNTRY_CODE();
const LG_BOOTSTRAP = 992;

export default function Review() {
    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);

    // should move h2, p, ul into separate molecule components
    if (isMobile) {
        return (
            <section className="review">
                <div className="review-header">
                    <h2>{_("VITAMIN.REVIEW.HEAD")}</h2>
                </div>

                <p className="review__description">{_("VITAMIN.REVIEW.DESCRIPTION")}</p>

                <ul className="card-review-list">
                    {REVIEW_DATA.data.map((r) => (
                        <CardReview
                            key={r.id}
                            createdDate={r.attributes.createdDate}
                            reviewText={r.attributes.body}
                            reviewerNickname={r.attributes.reviewerNickname}
                            rating={r.attributes.rating}
                        />
                    ))}
                </ul>

                <a
                    href={`https://apps.apple.com/${CC}/app/id1519596234?see-all=reviews`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-header__link"
                >
                    {_("VITAMIN.REVIEW.LINK")}

                    <span>
                        <RightArrowIcon />
                    </span>
                </a>
            </section>
        );
    }

    return (
        <section className="review">
            <div className="review-header">
                <h2>{_("VITAMIN.REVIEW.HEAD")}</h2>

                <a
                    href={`https://apps.apple.com/${CC}/app/id1519596234?see-all=reviews`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-header__link"
                >
                    {_("VITAMIN.REVIEW.LINK")}

                    <span>
                        <RightArrowIcon />
                    </span>
                </a>
            </div>

            <p className="review__description">{_("VITAMIN.REVIEW.DESCRIPTION")}</p>

            <ul className="card-review-list">
                {REVIEW_DATA.data.map((r) => (
                    <CardReview
                        key={r.id}
                        createdDate={r.attributes.createdDate}
                        reviewText={r.attributes.body}
                        reviewerNickname={r.attributes.reviewerNickname}
                        rating={r.attributes.rating}
                    />
                ))}
            </ul>
        </section>
    );
}
