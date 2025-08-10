'use client'
import Loader from '@/components/loader/loader'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
const SetNewPassword = dynamic(() => import('@/components/auth/reset-password-form/SetNewPassword'), { ssr: false, loading: () => <Loader /> })
const HeroSlider = dynamic(() => import('@/components/heroSlider'), { ssr: false, loading: () => <Loader /> })
const ServiceProvide = dynamic(() => import('@/components/service-provide/ServiceProvide'), { ssr: false, loading: () => <Loader /> })

const ResetPassword = () => {
    return (
        <Suspense fallback={<Loader />}>
            <SetNewPassword />
            <HeroSlider />
            <ServiceProvide />
        </Suspense>
    )
}

export default ResetPassword