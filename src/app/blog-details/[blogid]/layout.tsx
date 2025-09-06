import React, { ReactNode } from 'react';
import blogDetails from '../seo';

export const metadata = blogDetails;

export default async function BlogDetailsLayout({ children }: { children: ReactNode }) {
  // const data = await getAbou
  return (
    <div>{children}</div>
  )
}