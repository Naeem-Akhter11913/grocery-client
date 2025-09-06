import React, { ReactNode } from 'react';
import contact from './seo';

export const metadata = contact;

const ContactLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>{children}</div>
    )
}

export default ContactLayout