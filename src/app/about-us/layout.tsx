import React, { ReactNode } from 'react';
import aboutUsMetadata from './seo';


export const metadata = aboutUsMetadata;

const AboutLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>{children}</div>
    )
}

export default AboutLayout;