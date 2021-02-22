import * as React from "react";
import _, { locale } from "src/i18n/locale"
import { Footer } from "../part/footer";
import ContactUs from "src/part/contact-us";
import IronImage from "src/part/iron-image";
import NavBarLang from "src/part/navbar-signin";
const logo = require("src/img/logo_256.png").default;


export default function LandingPage() {
    return (
        <div>
            <NavBarLang />

            <section id="header" className="ms-s-header">
                <div className="text-vertical-center">
                    <img src={logo} alt={_("MAIN.HEAD")} />
                    <h1>{_("MAIN.HEAD")}</h1>
                    <h4>{_("MAIN.SUBHEAD")}</h4>
                </div>
            </section>

            <section className="rr-s-product pw-color-bg-secondary">
                <div className="ms-product-row">
                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <p className="mt-2">{_("MAIN.P1.SUBHEAD")}</p>
                        <h1>{_("MAIN.P1.HEAD")}</h1>
                        <h2>{_("MAIN.P1.TEXT")}</h2>
                        <a href={locale.i18nLink("electrolyte")} className="mt-3 rr-btn-large">{_("MAIN.P1.BTN")}</a>
                    </div>
                    <div className="col-md-4 order-sm-1">
                        <IronImage imgLo="/img/p_electrolyte_sm.png" imgHi="/img/p_electrolyte.png" text={_("MAIN.P1.IMG")} />
                    </div>
                </div>
            </section>


            <section className="rr-s-product my-5">
                <div className="ms-product-row">
                    <div className="col-md-4">
                        <IronImage imgLo="/img/p_mass_sm.png" imgHi="/img/p_mass.png" text={_("MAIN.P2.IMG")} />
                    </div>

                    <div className="col-md-6 align-self-center">
                        <p className="mt-2">{_("MAIN.P2.SUBHEAD")}</p>
                        <h1>{_("MAIN.P2.HEAD")}</h1>
                        <h2>{_("MAIN.P2.TEXT")}</h2>
                        <a href={locale.i18nLink("logmass")} className="mt-3 rr-btn-large pull-right">{_("MAIN.P2.BTN")}</a>
                    </div>
                </div>
            </section>


            <section className="rr-s-product pw-color-bg-secondary">
                <div className="ms-product-row">
                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <p className="mt-2">{_("MAIN.P3.SUBHEAD")}</p>
                        <h1>{_("MAIN.P3.HEAD")}</h1>
                        <h2>{_("MAIN.P3.TEXT")}</h2>
                        <a href={locale.i18nLink("logvitamin")} className="mt-3 rr-btn-large">{_("MAIN.P3.BTN")}</a>
                    </div>

                    <div className="col-md-4 order-sm-1">
                        <IronImage imgLo="/img/p_vitamin_sm.png" imgHi="/img/p_vitamin.png" text={_("MAIN.P3.IMG")} />
                    </div>
                </div>
            </section>


            <section className="rr-s-product my-5">
                <div className="ms-product-row">
                    <div className="col-md-4">
                        <IronImage imgLo="/img/p_waist_sm.png" imgHi="/img/p_waist.png" text={_("MAIN.P4.IMG")} />
                    </div>

                    <div className="col-md-6 align-self-center">
                        <p className="mt-2">{_("MAIN.P4.SUBHEAD")}</p>
                        <h1>{_("MAIN.P4.HEAD")}</h1>
                        <h2>{_("MAIN.P4.TEXT")}</h2>
                        <a href={locale.i18nLink("logwaist")} className="mt-3 rr-btn-large pull-right">{_("MAIN.P4.BTN")}</a>
                    </div>
                </div>
            </section>

            {/* <ContactUs setIsLoading={setIsLoading} /> */}
            <Footer />
        </div>
    );
}