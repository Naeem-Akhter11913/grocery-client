import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdClear } from 'react-icons/md';

const CartHover = () => {
    return (
        <div className="cart-hover bg-white">
            <div className="card shadow-lg p-3 cart-box">
                <div className="d-flex align-items-center mb-3">
                    <Image
                        src="/popular-products/product-1-1.jpg"
                        alt="Daisy Casual Bag"
                        width={60}
                        height={60}
                        className="rounded"
                    />
                    <div className="ms-3 flex-grow-1 text-start">
                        <h6 className="mb-1">Daisy Casual Bag</h6>
                        <p>1 × $800.00</p>
                    </div>
                    <button className="btn btn-sm btn-link text-dark"><MdClear /></button>
                </div>

                {/* Item 2 */}
                <div className="d-flex align-items-center mb-3">
                    <Image
                        src="/popular-products/product-2-1.jpg"
                        alt="Corduroy Shirts"
                        width={60}
                        height={60}
                        className="rounded"
                    />
                    <div className="ms-3 flex-grow-1 text-start">
                        <h6 className="mb-1">Corduroy Shirts</h6>
                        <p>1 × $3200.00</p>
                    </div>
                    <button className="btn btn-sm btn-link text-dark"><MdClear /></button>
                </div>

                <hr />

                {/* Total */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <strong>Total</strong>
                    <strong className="text-success">$4000.00</strong>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between">
                    <Link href={'/shop-cart'} className="btn btn-outline-success rounded-pill px-3">View cart</Link>
                    <button className="btn btn-success rounded-pill px-3">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartHover;