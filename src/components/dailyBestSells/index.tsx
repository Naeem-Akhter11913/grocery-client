// 'use client'
// import React from 'react'
// import './style.css'
// import { RightArrow } from '@/utils/Arrows';
// import DailyBestSellsCardSlider from './components/DailyBestSellsCardSlider';

// const DailyBestSells = () => {

//   return (
//     <div className='row mx-2 mt-3'>
//       <div className='col-3 col-md-6 col-sm-12'>
//         <div className='cover-bg-image p-3'>
//           <div className='daily-best-sale-text d-flex gap-5 flex-column mt-5'>
//             <h1>Bring nature into your home</h1>
//             <button type='button' className='mt-5'>Shop Now <span><RightArrow /></span></button>
//           </div>
//         </div>
//       </div> 


//       <div className="col-9 col-md-6 col-sm-12">
//         <DailyBestSellsCardSlider />
//       </div>
//     </div>
//   )
// }

// export default DailyBestSells

'use client'
import React from 'react'
import './style.css'
import { RightArrow } from '@/utils/Arrows';
import dynamic from 'next/dynamic';
import Loader from '../loader/loader';
const DailyBestSellsCardSlider = dynamic(() => import('./components/DailyBestSellsCardSlider'),{ssr: false, loading: () => <Loader />});

const DailyBestSells = () => {
  return (
    <div className="daily-best-grid">
      <aside className="daily-best-left">
        <div className="cover-bg-image p-3">
          <div className="daily-best-sale-text d-flex gap-5 flex-column mt-5">
            <h1>Bring nature into your home</h1>
            <button type="button" className="mt-5">
              Shop Now <span><RightArrow /></span>
            </button>
          </div>
        </div>
      </aside>

      <section className="daily-best-right" style={{
        display:'flex',
        justifyContent:'center',
        alignContent:'center'
      }}>
        <DailyBestSellsCardSlider />
      </section>
    </div>
  )
}

export default DailyBestSells
