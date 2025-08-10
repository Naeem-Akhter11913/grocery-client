'use client'
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Loader from "@/components/loader/loader";
const ContactForm = dynamic(() => import("@/components/contact/contact-form/ContactForm"), { ssr: false, loading: () => <Loader /> });
const HelpPage = dynamic(() => import("@/components/contact/help/HelpPage"), { ssr: false, loading: () => <Loader /> });
const Map = dynamic(() => import("@/components/contact/map-location/Map"), { ssr: false, loading: () => <Loader /> });
const HeroSlider = dynamic(() => import("@/components/heroSlider"), { ssr: false, loading: () => <Loader /> });

const Contact = () => {
    return (
        <Suspense fallback={<Loader />}>
            <HelpPage />
            <Map />
            <ContactForm />
            <HeroSlider />
        </Suspense>
    )
}

export default Contact;