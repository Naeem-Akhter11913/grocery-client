import ForgotPasswordForm from '@/components/auth/forget-password/ForgotPasswordForm'
import HeroSlider from '@/components/heroSlider'
import ServiceProvide from '@/components/service-provide/ServiceProvide'
import React from 'react'

const ForgotPassword = () => {
  return (
    <>
      <ForgotPasswordForm />
      <HeroSlider />
      <ServiceProvide />
    </>
  )
}

export default ForgotPassword