import SetNewPassword from '@/components/auth/reset-password-form/SetNewPassword'
import HeroSlider from '@/components/heroSlider'
import ServiceProvide from '@/components/service-provide/ServiceProvide'
import React from 'react'

const ResetPassword = () => {
    return (
        <>
            <SetNewPassword />
            <HeroSlider />
            <ServiceProvide />
        </>
    )
}

export default ResetPassword