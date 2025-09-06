'use client'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Loader from '@/components/loader/loader';

const ForgotPasswordForm = dynamic(() => import("@/components/auth/forget-password/ForgotPasswordForm"), { ssr: false, loading: () => < Loader /> });
const HeroSlider = dynamic(() => import('@/components/heroSlider'), { ssr: false, loading: () => <Loader /> })
const ServiceProvide = dynamic(() => import("@/components/service-provide/ServiceProvide"), { ssr: false, loading: () => <Loader /> })

const ForgotPassword = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ForgotPasswordForm />
      <HeroSlider />
      <ServiceProvide />
    </Suspense>
  )
}

export default ForgotPassword