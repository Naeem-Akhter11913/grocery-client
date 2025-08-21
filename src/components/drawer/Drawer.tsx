'use client'
import React from 'react'
import './style.css';
import dynamic from 'next/dynamic';
const ControlledAccordions = dynamic(() => import('./components/ControlledAccordions'),{ssr:false});

const Drawer = () => {
  return (
    <div>
      <p className="text-center fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <i className="bi bi-list" />
      </p>

      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Logo will be here</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ControlledAccordions />
        </div>
      </div>
    </div>
  )
}

export default Drawer