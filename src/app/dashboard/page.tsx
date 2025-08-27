'use client'
import React, { JSX, Suspense, useEffect, useState } from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import './style.css'
import Loader from '@/components/loader/loader';
const DashboadContent = dynamic(() => import('@/components/dashboard/dashboard-content'),{ssr:false,loading:() => <Loader/>});
const MyAccount = dynamic(() => import('@/components/dashboard/my-account-address'),{ssr:false,loading:() => <Loader/>});
const MyAddress = dynamic(() => import('@/components/dashboard/my-address'),{ssr:false,loading:() => <Loader/>});
const Order = dynamic(() => import('@/components/dashboard/order'),{ssr:false,loading:() => <Loader/>});
const TrackOrder = dynamic(() => import('@/components/dashboard/track-order'),{ssr:false,loading:() => <Loader/>});


type TabType = 'dashboard' | 'my-account' | 'my-address' | 'order' | 'track-order';

const DashboardPage = () => {
  const [tabType, setTabType] = useState<TabType>('dashboard');

  const [tabs, setTabs] = useState<Record<TabType, JSX.Element>>({
    dashboard: <DashboadContent />,
    'my-account': <MyAccount />,
    'my-address': <MyAddress />,
    order: <Order />,
    'track-order': <TrackOrder />,
  });

  const handleChangeTabs = (tab: TabType) => {
    setTabType(tab);
  }

   useEffect(() => {
    // const titleMap: Record<TabType, string> = {
    //   dashboard: 'User Dashboard',
    //   order: 'My Orders',
    //   'track-order': 'Track My Orders',
    //   'my-address': 'My Addresses',
    //   'my-account': 'Account Settings',
    // };
    // document.title = `Dashboad - ${titleMap[tabType]}`;
    document.title = `Dashboard - ${tabType}`;
  }, [tabType,]);

  return (
    <Suspense fallback={<Loader />}>
    <Head>
      <title>{`Dashboard - ${tabType}`}</title>
      <meta name="description" content={'Custon content'} />
    </Head>
    <div className='main-container mx-3'>
      <div className="tab-container">
        <div className="tab-sum-container">
          <button className={`btn border p-3 ${tabType === 'dashboard' ?'btn-success':'' }`} onClick={() => handleChangeTabs('dashboard')}>Dashboard</button>

          <button className={`btn border p-3 ${tabType === 'order' ?'btn-success':'' }`} onClick={() => handleChangeTabs('order')}>Order</button>
          <button className={`btn border p-3 ${tabType === 'track-order' ?'btn-success':'' }`} name='track-order' onClick={() => handleChangeTabs('track-order')}>Track Order</button>
          <button className={`btn border p-3 ${tabType === 'my-address' ?'btn-success':'' }`} onClick={() => handleChangeTabs('my-address')}>My Address</button>
          <button className={`btn border p-3 ${tabType === 'my-account' ?'btn-success':'' }`} onClick={() => handleChangeTabs('my-account')}>My Account</button>
        </div>
        <div className="tab-content-container">
          {tabs[tabType] || <>null</>}
        </div>
      </div>
    </div>
    </Suspense>
  )
}

export default DashboardPage