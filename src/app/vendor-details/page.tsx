'use client'
import React, { Suspense, useState } from 'react'
import { productsItems } from '@/components/popularProducts/productsArray'
import { ProductItem } from '@/utils/types';
import dynamic from 'next/dynamic';
import Loader from '@/components/loader/loader';
import Link from 'next/link'

const VendorShopDetails = dynamic(() =>import('./components/VendorShopDetails'),{ssr:false, loading: () => <Loader />})
const CategoryCard = dynamic(() =>import('@/components/categoryCard'),{ssr:false, loading: () => <Loader />})
const FillPrice = dynamic(() =>import('@/components/fillPrice'),{ssr:false, loading: () => <Loader />})
const NewProducts = dynamic(() =>import('@/components/newProducts'),{ssr:false, loading: () => <Loader />})
const SideBanner = dynamic(() =>import('@/components/sideBanner'),{ssr:false, loading: () => <Loader />})
const PopularProducts = dynamic(() =>import('@/components/popularProducts'),{ssr:false, loading: () => <Loader />});
const SliderComponent = dynamic(() =>import('@/components/sliderComponent'),{ssr:false, loading: () => <Loader />})
const ServiceProvide = dynamic(() =>import('@/components/service-provide/ServiceProvide'),{ssr:false, loading: () => <Loader />})
const PaginationComponenet = dynamic(() =>import('@/components/pagination/Pagination'),{ssr:false, loading: () => <Loader />})
const DealsOfTheDay = dynamic(() =>import('@/components/dealsOfTheDay'),{ssr:false, loading: () => <Loader />})
const ItemsFilterBar = dynamic(() =>import('@/components/itemsFilterBar/ItemsFilterBar'),{ssr:false, loading: () => <Loader />})

const VendorDetails = () => {
    const [popularProduct, setPopularProduct] = useState<ProductItem[]>([...productsItems]);
    const [showCount, setShowCount] = useState<number>(0);
    const [sortBy, setSortBy] = useState<string>('')

    return (
        <>
            <div className='row g-3 px-3' >
                <div className="col-sm-2">
                    <VendorShopDetails />
                    <CategoryCard />
                    <FillPrice />
                    <NewProducts />
                    <SideBanner />
                </div>
                <div className="col-sm-10">
                    <ItemsFilterBar showCount={showCount} setShowCount={setShowCount} setSortBy={setSortBy} sortBy={sortBy} />
                    <PopularProducts items={popularProduct} />
                    <PaginationComponenet />

                    <div className="d-flex justify-content-between">
                        <p>Deals Of The Day</p>
                        <Link href={'#'}>All Deals</Link>
                    </div>
                    <DealsOfTheDay />
                </div>
            </div>
            <SliderComponent />

            <ServiceProvide />
        </>
    )
}

export default VendorDetails