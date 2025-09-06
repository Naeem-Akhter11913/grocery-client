import React, { ReactNode } from 'react'
import resetPass from './seo'


export const metadata = resetPass;
const Resetlayout = ({children}:{children: ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default Resetlayout