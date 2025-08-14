'use client';
import React, { useState } from 'react';
import ChatWindow from "../components/ChatWindow";
import StoreCard from "../components/StoreCard";
import VendorShopDetails from '@/app/vendor-details/components/VendorShopDetails';
import SliderComponent from '@/components/sliderComponent';
import ServiceProvide from '@/components/service-provide/ServiceProvide';


export default function StorePage() {
  // const [isInPage,setIsInpage] = useState<boolean>(true)
  return (
    <div>
      <div className="row mx-3">
        <div className="col-md-4">
          <VendorShopDetails isInPage={false} />
        </div>

        <div className="col-md-8 p-0 d-flex flex-column">
          <ChatWindow />
        </div>
      </div>
      <div className='mt-3'>
        <SliderComponent />

      </div>
      <div>
        <ServiceProvide />

      </div>
    </div>
  );
}
