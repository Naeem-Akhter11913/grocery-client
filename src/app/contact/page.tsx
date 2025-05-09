import ContactForm from "@/components/contact/contact-form/ContactForm";
import HelpPage from "@/components/contact/help/HelpPage";
import Map from "@/components/contact/map-location/Map";
import HeroSlider from "@/components/heroSlider";
import React from "react";

const Contact = () => {
    return (
        <>
            <HelpPage />
            <Map />
            <ContactForm />
            <HeroSlider />
        </>
    )
}

export default Contact;