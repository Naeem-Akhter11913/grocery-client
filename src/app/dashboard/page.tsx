'use client'
import React, { JSX, useState } from 'react'
import DashboadContent from '@/components/dashboard/dashboard-content';
import MyAccount from '@/components/dashboard/my-account-address';
import MyAddress from '@/components/dashboard/my-address';
import Order from '@/components/dashboard/order';
import TrackOrder from '@/components/dashboard/track-order';
import './style.css'

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

  return (
    <div className='main-container'>
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
  )
}

export default DashboardPage