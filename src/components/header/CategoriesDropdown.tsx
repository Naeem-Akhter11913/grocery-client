'use client';
import React, { useEffect, useMemo, useState } from 'react';
import './categoriesDropdown.css'
import debounce from '@/hook/debounce';

const items = [
    "All Categories",
    "Milks and Dairies",
    "Wines & Alcohol",
    "Clothing & Beauty",
    "Pet Foods & Toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh Seafood",
    "Noodles & Rice",
    "Ice cream"
];
const CategoriesDropdown: React.FC<{ isShow: boolean }> = ({ isShow }) => {

    const [filterItems, setFilterItems] = useState<string[]>([]);
    const [isSeeMore, setIsSeeMore] = useState<boolean>(false)



    const handleSearch = (ty: any) => {
        const searchPromt: string = ty.join('');

        setFilterItems(() => {
            if (searchPromt.length <= 0) {
                if (isSeeMore)
                    setFilterItems([...items])
                else
                    setFilterItems(items.slice(0, 4))
            }
            return items.filter(item => item.toLowerCase().includes(searchPromt))
        })
    }

    const debounceSearch = useMemo(() => {
        return debounce(handleSearch, 1000);
    }, []);


    useEffect(() => {
        if (isSeeMore)
            setFilterItems([...items])
        else
            setFilterItems(items.slice(0, 4))
    }, [isSeeMore])

    return (
        <div className={`${isShow ? 'show' : 'hide'}  position-absolute z-3 bg-white center-css p-3 `}>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Search items....." onChange={(e) => debounceSearch(e.target.value)} />
            </div>
            {filterItems.map(it => {
                return <span key={it}>
                    <p>{it}</p>
                </span>
            })}
            {!isSeeMore ? <p onClick={() => setIsSeeMore(!isSeeMore)}>See More....</p> :
                <p onClick={() => setIsSeeMore(!isSeeMore)}>See Less....</p>}
        </div>
    );
};

export default CategoriesDropdown;
