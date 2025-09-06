'use client'
import dynamic from "next/dynamic";
import React, { Suspense, useState } from "react";
import { useJsApiLoader } from '@react-google-maps/api';

import Loader from "@/components/loader/loader";
const ContactForm = dynamic(() => import("@/components/contact/contact-form/ContactForm"), { ssr: false, loading: () => <Loader /> });
const HelpPage = dynamic(() => import("@/components/contact/help/HelpPage"), { ssr: false, loading: () => <Loader /> });
const Map = dynamic(() => import("@/components/contact/map-location/Map"), { ssr: false, loading: () => <Loader /> });
const ContactLocations = dynamic(() => import("@/components/contact/ContactLocations/ContactLocations"), { ssr: false, loading: () => <Loader /> });
const SliderComponent = dynamic(() => import("@/components/sliderComponent"),{ssr:false, loading: () => <Loader />});


const Contact = () => {
    const [latLng, setLatLng] = useState<{ lat: number; lng: number } | null>(null);

    console.log(process.env.PROD)
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCZM9D2U6X887BgFghbaOcGr_8WZFEZs_Q',
    })

    const [map, setMap] = React.useState<google.maps.Map | null>(null)

    const onLoad = React.useCallback(function callback(map: google.maps.Map) {
        const bounds = new window.google.maps.LatLngBounds(
            { lat: -85, lng: -180 },
            { lat: 85, lng: 180 }
        )
        map.fitBounds(bounds);

        google.maps.event.addListenerOnce(map, "bounds_changed", () => {
            map.setZoom(2)
        })

        setMap(map)
    }, []);

    const onUnmount = React.useCallback(function callback() {
        setMap(null)
    }, [])

    const searchPlace = (latlng: { lat: number; lng: number }) => {
        const newPos = { lat: latlng.lat, lng: latlng.lng }
        map?.setCenter(newPos);
        map?.setZoom(20);

        if (map)
            google.maps.event.addListenerOnce(map, 'idle', () => {
                setLatLng({ ...newPos })
            });
    }

    return (
        <Suspense fallback={<Loader />}>
            <div className="px-2">
                <HelpPage />
                <Map onLoad={onLoad} onUnmount={onUnmount} isLoaded={isLoaded} markerPosition={latLng} />
                <ContactLocations searchPlace={searchPlace} />
                <ContactForm />
            </div>
            {/* <HeroSlider /> */}
            <SliderComponent />
        </Suspense>
    )
}

export default Contact;