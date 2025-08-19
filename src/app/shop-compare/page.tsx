'use client';
import React, { useState } from 'react';
import { itemTypes } from './types';
import { itemsContent } from './table-items';
import { GridDeleteIcon } from '@mui/x-data-grid';
import Image from 'next/image';

const ShopCompare = () => {
  const [items, setItems] = useState<itemTypes[]>([...itemsContent]);


  return (
    <div className='px-3 mb-3'>
      {items.map(({ item, content }, index) => (
        <div className="row" key={index}>
          
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 border  p-3">{item}</div>
          {content.map((url, indx) => {

            if(item === 'Preview' && typeof url === 'string'){
              return <div key={indx} className="col-12 col-sm-4 col-md-3 col-lg-3 border  p-3"><Image src={url} height={150} width={150} alt={`${item+'-'+indx}`} /></div>
            }
            if(item === 'Action'){
              return <div key={indx} className="col-12 col-sm-4 col-md-3 col-lg-3 border  p-3"><button className='btn btn-outline-danger w-50'><GridDeleteIcon/> </button></div>
            }

            if(item === 'Buy now'){
              return <div key={indx} className="col-12 col-sm-4 col-md-3 col-lg-3 border  p-3"><button className={`btn btn-outline-${url === 'Add to cart'? 'success':'danger'} w-50`}>{url}</button></div>
            }
            return <React.Fragment key={indx}>
              <div className="col-12 col-sm-4 col-md-3 col-lg-3 border  p-3">{url}</div>
            </React.Fragment>
          })}
        </div>
      ))}
    </div>
  )
}

export default ShopCompare
