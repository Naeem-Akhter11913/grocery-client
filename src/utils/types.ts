import { ReactNode } from "react"
type contentType = {
  url: string,
  name: string
}
export type naveType = {
  label: string,
  icon?: ReactNode,
  dropdown: boolean,
  page?: string,
  content?: contentType[]
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


export type hoverData = {
  name: string,
  url: string
}

export type offercType = {
  icon: string, // replace with actual file name
    title: string,
    description:string,
    linkText: string
}