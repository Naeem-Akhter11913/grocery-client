import React, { ReactNode } from 'react'
import forgetPass from './seo'


export const metadata = forgetPass;
const forgetPasswordLayout = ({children}:{children: ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default forgetPasswordLayout