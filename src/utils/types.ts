import { ReactNode } from "react"

export type naveType = {
    label: string,
    icon?: ReactNode,
    dropdown: boolean
}

export type CategoryItem = {
    image: string,
    title: string,
    items: number
}