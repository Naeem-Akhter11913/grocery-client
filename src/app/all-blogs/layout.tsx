import React, { ReactNode } from 'react'
import allBlogs from './seo'

export const metadata = allBlogs;


export default function BlogLayout({children}:{children: ReactNode}) {
  return (
    <div>{children}</div>
  )
}
