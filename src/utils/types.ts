import { ReactNode } from "react"

export type naveType = {
    label: string,
    icon?: ReactNode,
    dropdown: boolean,
    content?: string[]
}

export type CategoryItem = {
    image: string,
    title: string,
    items: number
}

export type ProductItem = {
    tag: string;
    type: string,
    frontImage: string;
    backImage: string;
    desc: string;
    stars: number;
    brand: string;
    price: {
      current: number;
      original: number;
      currency: string;
    };
  };


  export type hoverData= {
    name:string,
    url: string
  }