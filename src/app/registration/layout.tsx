import React , {ReactNode} from "react";
import registration from "./seo";

export const metadata = registration;

const RegistrationLayout = ({children} : {children: ReactNode}) =>{
    return (
        <div>{children}</div>
    )
}

export default RegistrationLayout;