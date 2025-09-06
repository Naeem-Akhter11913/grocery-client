import { tableRowsTypes } from "./types";

export const tableRows: tableRowsTypes[] = [
    {
        id: 1,
        // product: '/popular-products/product-1-1.jpg',
        product: {
            imgUrl: '/popular-products/product-1-1.jpg',
            title: "Field Roast Chao Cheese Creamy Original",
            rating: 5
        },
        'unit price': 2.51,
        quantity: 4,
        subtotal: 5,
    },
    {
        id: 2,
        // product: '/popular-products/product-2-1.jpg',
        product: {
            imgUrl: '/popular-products/product-2-1.jpg',
            title: "Fresh Organic Mustard Leaves Bell Pepper",
            rating: 5
        },
        'unit price': 2.51,
        quantity: 1,
        subtotal: 8,
    },
    {
        id: 3,
        product: {
            imgUrl: '/popular-products/product-3-1.jpg',
            title: "Field Roast Chao Cheese Creamy Original",
            rating: 5
        },
        'unit price': 2.51,
        quantity: 4,
        subtotal: 76,
    },
    {
        id: 4,
        product: {
            imgUrl: '/popular-products/product-4-1.jpg',
            title: "Blue Diamond Almonds Lightly Salted",
            rating: 4
        },
        'unit price': 2.51,
        quantity: 6,
        subtotal: 4,
    },
]