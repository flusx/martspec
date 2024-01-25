import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import ImageI18N from "src/atomic/atom/img-i18n";
import PageHeader from "src/atomic/molecule/page-header";
export default function Emotion() {
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page ms-base-new emotion" },
            React.createElement(PageHeader, { title: "EMOTION.HEAD", subtitleLevel1: "EMOTION.ABOUT_1", subtitleLevel2: "EMOTION.ABOUT_2", appId: 1562956213, appDownloadTitle: "EMOTION.DWN", imgSrc: "/img/page/emotion/emotion.png", imgAlt: "EMOTION.IMG", imgH: 400, imgW: 512 }),
            React.createElement("section", null,
                React.createElement("div", { className: "row g-4" },
                    React.createElement("div", { className: "col-lg-8 col-md-6" },
                        React.createElement("div", { className: "block bg-violet" },
                            React.createElement("h3", null, _("EMOTION.LIST1.LI1_HEAD")),
                            React.createElement("p", null, _("EMOTION.LIST1.LI1_TEXT")))),
                    React.createElement("div", { className: "col-lg-4 col-md-6" },
                        React.createElement("div", { className: "block bg-yellow" },
                            React.createElement("h3", null, _("EMOTION.LIST1.LI2_HEAD")),
                            React.createElement("p", null, _("EMOTION.LIST1.LI2_TEXT")))),
                    React.createElement("div", { className: "col-lg-8 col-md-6 order-md-4" },
                        React.createElement("div", { className: "block bg-violet" },
                            React.createElement("h3", null, _("EMOTION.LIST1.LI3_HEAD")),
                            React.createElement("p", null, _("EMOTION.LIST1.LI3_TEXT")))),
                    React.createElement("div", { className: "col-lg-4 col-md-6" },
                        React.createElement("div", { className: "block bg-yellow" },
                            React.createElement("h3", null, _("EMOTION.LIST1.LI4_HEAD")),
                            React.createElement("p", null, _("EMOTION.LIST1.LI4_TEXT")))))),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement("h2", null, _("EMOTION.HEAD1")),
                        React.createElement("p", null, _("EMOTION.DESK1")),
                        React.createElement("a", { href: Locale.i18nLink("emotion/color-test"), className: "ms-btn-large" }, _("EMOTION.BTN1"))),
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement(ImageI18N, { src: "/img/page/emotion/emotion-screen-april-en.webp", w: 512, h: 598, cls: "ms-base-image mt-mob-xs", alt: _("EMOTION.ALT1") })))),
            React.createElement("section", { className: "bg-gray" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement("h2", null, _("EMOTION.HEAD2")),
                        React.createElement("p", null, _("EMOTION.DESK2")),
                        React.createElement("a", { href: Locale.i18nLink("emotion/biorhythms"), className: "ms-btn-large" }, _("EMOTION.BTN_BIORHYTHM"))),
                    React.createElement("div", { className: "col-lg-6 order-lg-first" },
                        React.createElement(ImageI18N, { src: "/img/page/emotion/emotion-diagram.webp", w: 512, h: 367, cls: "mx-lg-0 ms-base-image mt-mob-s", alt: _("EMOTION.ALT2") }))),
                React.createElement("div", { className: "row g-4" },
                    React.createElement("div", { className: "col-lg-4 col-12" },
                        React.createElement("div", { className: "block bg-yellow" },
                            React.createElement("h3", null, _("EMOTION.LIST2.LI1_HEAD")),
                            React.createElement("p", null, _("EMOTION.LIST2.LI1_TEXT")))),
                    React.createElement("div", { className: "col-lg-4 col-12" },
                        React.createElement("div", { className: "block bg-green" },
                            React.createElement("h3", null, _("EMOTION.LIST2.LI2_HEAD")),
                            React.createElement("p", null, _("EMOTION.LIST2.LI2_TEXT")))),
                    React.createElement("div", { className: "col-lg-4 col-12" },
                        React.createElement("div", { className: "block bg-violet" },
                            React.createElement("h3", null, _("EMOTION.LIST2.LI3_HEAD")),
                            React.createElement("p", null, _("EMOTION.LIST2.LI3_TEXT")))))),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement("h2", null, _("EMOTION.HEAD3")),
                        React.createElement("p", null, _("EMOTION.DESK3_1")),
                        React.createElement(ImageI18N, { src: "/img/page/emotion/emotion-screen-stress-en.webp", w: 512, h: 522, cls: "ms-base-image d-block d-lg-none mt-mob-xs mb-mob-xs", alt: _("EMOTION.ALT3") }),
                        React.createElement("h3", null, _("EMOTION.DESK3_2")),
                        React.createElement("ul", { className: "d-flex gap-4 how-list" },
                            React.createElement("li", { className: "bg-orange" }, _("EMOTION.LIST3.LI1_TEXT")),
                            React.createElement("li", { className: "bg-aqua" }, _("EMOTION.LIST3.LI2_TEXT")),
                            React.createElement("li", { className: "bg-yellow" }, _("EMOTION.LIST3.LI3_TEXT")),
                            React.createElement("li", { className: "bg-violet" }, _("EMOTION.LIST3.LI4_TEXT")),
                            React.createElement("li", { className: "bg-blue" }, _("EMOTION.LIST3.LI5_TEXT")))),
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement(ImageI18N, { src: "/img/page/emotion/emotion-screen-stress-en.webp", w: 512, h: 443, cls: "ms-base-image d-none d-lg-block", alt: _("EMOTION.ALT3") })))),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement(ImageI18N, { src: "/img/page/emotion/emotion-screen-test-en.webp", w: 390, h: 512, cls: "ms-base-image d-none d-lg-block", alt: _("EMOTION.ALT4") })),
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement("h2", null, _("EMOTION.HEAD4")),
                        React.createElement("p", null, _("EMOTION.DESK4_1")),
                        React.createElement(ImageI18N, { src: "/img/page/emotion/emotion-screen-test-en.webp", w: 390, h: 512, cls: "ms-base-image d-block d-lg-none mt-mob-xs mb-mob-xs", alt: _("EMOTION.ALT4") }),
                        React.createElement("h3", null, _("EMOTION.DESK4_2")),
                        React.createElement("ul", { className: "checkmark-list" },
                            React.createElement("li", null, _("EMOTION.LIST4.LI1_TEXT")),
                            React.createElement("li", null, _("EMOTION.LIST4.LI2_TEXT")),
                            React.createElement("li", null, _("EMOTION.LIST4.LI3_TEXT")),
                            React.createElement("li", null, _("EMOTION.LIST4.LI4_TEXT")),
                            React.createElement("li", null, _("EMOTION.LIST4.LI5_TEXT")),
                            React.createElement("li", null, _("EMOTION.LIST4.LI6_TEXT")))))),
            React.createElement("section", { className: "bg-gray" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-12 mb-2" },
                        React.createElement("h2", null, _("EMOTION.HEAD5"))),
                    React.createElement("div", { className: "col-12" },
                        React.createElement("ul", { className: "list-with-icons" },
                            React.createElement("li", null,
                                React.createElement("div", { className: "icon" },
                                    React.createElement("img", { src: "/img/atom/icons/icon-defense.svg", alt: _("EMOTION.ALT5_1") })),
                                React.createElement("div", null,
                                    React.createElement("h3", null, _("EMOTION.LIST5.LI1_HEAD")),
                                    React.createElement("p", null, _("EMOTION.LIST5.LI1_TEXT")))),
                            React.createElement("li", null,
                                React.createElement("div", { className: "icon" },
                                    React.createElement("img", { src: "/img/atom/icons/icon-sync.svg", alt: _("EMOTION.ALT5_2") })),
                                React.createElement("div", null,
                                    React.createElement("h3", null, _("EMOTION.LIST5.LI2_HEAD")),
                                    React.createElement("p", null, _("EMOTION.LIST5.LI2_TEXT")))),
                            React.createElement("li", null,
                                React.createElement("div", { className: "icon" },
                                    React.createElement("img", { src: "/img/atom/icons/icon-no-auth.svg", alt: _("EMOTION.ALT5_3") })),
                                React.createElement("div", null,
                                    React.createElement("h3", null, _("EMOTION.LIST5.LI3_HEAD")),
                                    React.createElement("p", null, _("EMOTION.LIST5.LI3_TEXT")))),
                            React.createElement("li", null,
                                React.createElement("div", { className: "icon" },
                                    React.createElement("img", { src: "/img/atom/icons/icon-no-ads.svg", alt: _("EMOTION.ALT5_4") })),
                                React.createElement("div", null,
                                    React.createElement("h3", null, _("EMOTION.LIST5.LI4_HEAD")),
                                    React.createElement("p", null, _("EMOTION.LIST5.LI4_TEXT")))))))),
            React.createElement("section", { className: "bg-gray bg-merge-top personality-traits-list" },
                React.createElement("div", { className: "row mb-0" },
                    React.createElement("div", { className: "col-12 mb-2" },
                        React.createElement("h2", null, _("EMOTION.HEAD6")))),
                React.createElement("div", { className: "row g-4" },
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement("div", { className: "block bg-violet" },
                            React.createElement("h3", null, _("EMOTION.LIST6.LI1_HEAD")),
                            React.createElement("p", null, _("EMOTION.LIST6.LI1_TEXT")),
                            React.createElement("a", { href: Locale.i18nLink("emotion/anxiety"), className: "ms-read-more-btn" },
                                React.createElement("span", null, _("EMOTION.LIST6.BTN"))))),
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement("div", { className: "block bg-green" },
                            React.createElement("h3", null, _("EMOTION.LIST6.LI2_HEAD")),
                            React.createElement("p", null, _("EMOTION.LIST6.LI2_TEXT")),
                            React.createElement("a", { href: Locale.i18nLink("emotion/productivity"), className: "ms-read-more-btn" },
                                React.createElement("span", null, _("EMOTION.LIST6.BTN"))))),
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement("div", { className: "block bg-aqua" },
                            React.createElement("h3", null, _("EMOTION.LIST6.LI3_HEAD")),
                            React.createElement("p", null, _("EMOTION.LIST6.LI3_TEXT")),
                            React.createElement("a", { href: Locale.i18nLink("emotion/harmony"), className: "ms-read-more-btn" },
                                React.createElement("span", null, _("EMOTION.LIST6.BTN"))))),
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement("div", { className: "block bg-orange" },
                            React.createElement("h3", null, _("EMOTION.LIST6.LI4_HEAD")),
                            React.createElement("p", null, _("EMOTION.LIST6.LI4_TEXT")),
                            React.createElement("a", { href: Locale.i18nLink("emotion/independence"), className: "ms-read-more-btn" },
                                React.createElement("span", null, _("EMOTION.LIST6.BTN"))))),
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement("div", { className: "block bg-yellow" },
                            React.createElement("h3", null, _("EMOTION.LIST6.LI5_HEAD")),
                            React.createElement("p", null, _("EMOTION.LIST6.LI5_TEXT")),
                            React.createElement("a", { href: Locale.i18nLink("emotion/energy"), className: "ms-read-more-btn" },
                                React.createElement("span", null, _("EMOTION.LIST6.BTN"))))),
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement("div", { className: "block bg-blue" },
                            React.createElement("h3", null, _("EMOTION.LIST6.LI6_HEAD")),
                            React.createElement("p", null, _("EMOTION.LIST6.LI6_TEXT")),
                            React.createElement("a", { href: Locale.i18nLink("emotion/openness"), className: "ms-read-more-btn" },
                                React.createElement("span", null, _("EMOTION.LIST6.BTN"))))))),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement("h2", null, _("EMOTION.HEAD7")),
                        React.createElement("p", { className: "mb-0" }, _("EMOTION.DESK7")))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-12" },
                        React.createElement("ul", { className: "list-with-icons extended" },
                            React.createElement("li", null,
                                React.createElement("div", { className: "icon" },
                                    React.createElement("img", { src: "/img/atom/icons/icon-sport.svg", alt: "" })),
                                React.createElement("div", null,
                                    React.createElement("h3", null, _("EMOTION.LIST7.LI1_HEAD")),
                                    React.createElement("p", null, _("EMOTION.LIST7.LI1_TEXT")))),
                            React.createElement("li", null,
                                React.createElement("div", { className: "icon" },
                                    React.createElement("img", { src: "/img/atom/icons/icon-bag.svg", alt: "" })),
                                React.createElement("div", null,
                                    React.createElement("h3", null, _("EMOTION.LIST7.LI2_HEAD")),
                                    React.createElement("p", null, _("EMOTION.LIST7.LI2_TEXT")))),
                            React.createElement("li", null,
                                React.createElement("div", { className: "icon" },
                                    React.createElement("img", { src: "/img/atom/icons/icon-health.svg", alt: "" })),
                                React.createElement("div", null,
                                    React.createElement("h3", null, _("EMOTION.LIST7.LI3_HEAD")),
                                    React.createElement("p", null, _("EMOTION.LIST7.LI3_TEXT")))),
                            React.createElement("li", null,
                                React.createElement("div", { className: "icon" },
                                    React.createElement("img", { src: "/img/atom/icons/icon-research.svg", alt: "" })),
                                React.createElement("div", null,
                                    React.createElement("h3", null, _("EMOTION.LIST7.LI4_HEAD")),
                                    React.createElement("p", null, _("EMOTION.LIST7.LI4_TEXT")))),
                            React.createElement("li", null,
                                React.createElement("div", { className: "icon" },
                                    React.createElement("img", { src: "/img/atom/icons/icon-note.svg", alt: "" })),
                                React.createElement("div", null,
                                    React.createElement("h3", null, _("EMOTION.LIST7.LI5_HEAD")),
                                    React.createElement("p", null, _("EMOTION.LIST7.LI5_TEXT")))),
                            React.createElement("li", null,
                                React.createElement("div", { className: "icon" },
                                    React.createElement("img", { src: "/img/atom/icons/icon-heart.svg", alt: "" })),
                                React.createElement("div", null,
                                    React.createElement("h3", null, _("EMOTION.LIST7.LI6_HEAD")),
                                    React.createElement("p", null, _("EMOTION.LIST7.LI6_TEXT")))))))),
            React.createElement("section", null,
                React.createElement("div", { className: "row text-lg-start text-center page-bottom" },
                    React.createElement("div", { className: "col-12 block bg-violet" },
                        React.createElement("div", null,
                            React.createElement("h2", null, _("EMOTION.HEAD8")),
                            React.createElement("p", { className: "flex-grow-1" }, _("EMOTION.DESK8")),
                            React.createElement("a", { href: `https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`, target: "_blank", title: _("EMOTION.DWN"), className: "ms-btn-apple mt-5 mx-lg-0 mx-auto", style: { backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' } })),
                        React.createElement(ImageI18N, { src: "/img/page/emotion/emotion-screen-app-en.webp", w: 400, h: 400, cls: "ms-base-image ms-lg-auto me-lg-0", alt: _("EMOTION.ALT4") }))))),
        React.createElement(Footer, null));
}
//# sourceMappingURL=emotion.js.map