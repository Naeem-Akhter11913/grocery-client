import React, { ReactNode } from "react"
import dashboard from "./seo"

export const metadata = dashboard;

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div>{children}</div>
    )
}
