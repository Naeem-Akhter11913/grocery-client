'use client'
import React, { useEffect, useState } from 'react'
import VendorsSearch from './components/VendorsSearch'
import { vendors } from './components/contentList'
import { Vendor } from './types/vendersTypes'
import VendersList from './components/VendersList'
import PaginationComponenet from '@/components/pagination/Pagination'
import debounce from '@/hook/debounce'

const Venders = () => {
  const [vender, setVender] = useState<Vendor[]>([...vendors]);
  const [serchKeywords, setSearchkeywords] = useState<string>('');


  useEffect(() => {
    const debouncedFilter = debounce(() => {
      const filteredVendors = vendors.filter((items) =>
        items.name.toLowerCase().includes(serchKeywords.toLowerCase())
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