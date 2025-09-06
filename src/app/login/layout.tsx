import { ReactNode } from "react";
import loginSEO from "./seo";

export const metadata = loginSEO;

const LoginLayout = ({children}: {children: ReactNode}) =>{
    return (
        <div>{children}</div>
    )
}

export default LoginLayout