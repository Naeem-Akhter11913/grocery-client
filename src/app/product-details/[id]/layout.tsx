import React from 'react';
import productDetails from '../seo';

export const metadata = productDetails;


export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
