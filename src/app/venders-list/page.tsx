'use client'
import React, { useEffect, useState } from 'react'
import { vendors } from './components/contentList'
import { Vendor } from './types/vendersTypes'
const VendorsSearch = dynamic(() =>import('./components/VendorsSearch'),{ssr:false,loading: () => <Loader />});
const VendersList = dynamic(() =>import('./components/VendersList'),{ssr:false,loading: () => <Loader />});
const PaginationComponenet = dynamic(() =>import('@/components/pagination/Pagination'),{ssr:false,loading: () => <Loader />});
import debounce from '@/hook/debounce'
import dynamic from 'next/dynamic'
import Loader from '@/components/loader/loader'

const Venders = () => {
  const [vender, setVender] = useState<Vendor[]>([...vendors]);
  const [serchKeywords, setSearchkeywords] = useState<string>('');


  useEffect(() => {
    const debouncedFilter = debounce(() => {
      const filteredVendors = vendors.filter((items) => items.name.toLowerCase().includes(serchKeywords.toLowerCase())
      );
      setVender(filteredVendors);
    }, 1000);

    debouncedFilter();
  }, [serchKeywords, vendors]);

  return (
    <>
      <VendorsSearch serchKeywords={serchKeywords} callBackFunc={setSearchkeywords} />
      <VendersList vendor={vender} />
      <PaginationComponenet />
    </>
  )
}

export default Venders