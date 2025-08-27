// import React, { useState } from 'react';
// import EditAddressModal from './components/EditAddressModal'
// import { Button } from 'react-bootstrap';
// import { detailsTypes } from './type';

// const MyAddress = () => {
//   const [billingAddress, setAddressFirst] = useState<detailsTypes[]>([
//     {
//       name: "addressLine1",
//       value: "3522 Interstate",
//       placeholder: "Enter street address (e.g., 3522 Interstate)",
//     },
//     {
//       name: "addressLine2",
//       value: "75 Business Spur,",
//       placeholder: "Enter apartment, suite, unit, etc.",
//     },
//     {
//       name: "cityLine1",
//       value: "Sault Ste.",
//       placeholder: "Enter city name (e.g., Sault Ste.)",
//     },
//     {
//       name: "cityLine2",
//       value: "Marie, MI 49783",
//       placeholder: "Enter district or ZIP (e.g., Marie, MI 49783)",
//     },
//     {
//       name: "State",
//       value: "New York",
//       placeholder: "Enter state or province (e.g., New York)",
//     },
//   ]);

//   const [shippingAddress, setAddressSecond] = useState<detailsTypes[]>([
//     {
//       name: "Address Line 1",
//       value: "3522 Interstate",
//       placeholder: "Enter street address (e.g., 3522 Interstate)",
//     },
//     {
//       name: "Address Line 2",
//       value: "75 Business Spur,",
//       placeholder: "Enter apartment, suite, unit, etc.",
//     },
//     {
//       name: "City Line 1",
//       value: "Sault Ste.",
//       placeholder: "Enter city name (e.g., Sault Ste.)",
//     },
//     {
//       name: "City Line 2",
//       value: "Marie, MI 49783",
//       placeholder: "Enter district or ZIP (e.g., Marie, MI 49783)",
//     },
//     {
//       name: "State",
//       value: "New York",
//       placeholder: "Enter state or province (e.g., New York)",
//     },
//   ]);

//   const [modalState, setModalState] = useState<{ closed: boolean; opened: boolean; editType: string; formData: detailsTypes[] }>({ closed: true, opened: false, editType: '', formData: [] })

//   const handleOpenModal = (detailsData: detailsTypes[], editType: string) => {
//     setModalState((prev) => ({ ...prev, formData: detailsData, opened: true, closed: false, editType }));
//   }

//   const closeModal = () => {
//     setModalState(prev => ({ ...prev, closed: true, opened: false }));

//   }

//   return (
//     <div className="">
//       <div className="d-flex flex-column flex-md-row justify-content-around gap-1">
//         <div>
//           <h4 className="fw-bold mb-3">Billing Address</h4>

//           {billingAddress.map((item, index) => (
//             <div className="mb-1 lh-1" key={index}>
//               <p className='fs-5' >{item.placeholder}</p>
//               <p className='text-muted'>{item.value}</p>
//             </div>
//           ))}
//           <Button className="btn btn-success" onClick={() => handleOpenModal(billingAddress, 'Billing Address')}>
//             Edit
//           </Button>
//         </div>

//         <div>
//           <h4 className="fw-bold mb-3">Shipping Address</h4>
//           {shippingAddress.map((item, index) => (
//             <div className='mb-1 lh-1' key={index}>
//               <p className='fs-5'>{item.placeholder}</p>
//               <p className='text-muted'>{item.value}</p>
//             </div>
//           ))}
//           <Button className="btn btn-success" onClick={() => handleOpenModal(shippingAddress, 'Shipping Address')}>
//             Edit
//           </Button>
//         </div>
//       </div>
//       {modalState.opened && <EditAddressModal closeModal={closeModal} modalState={modalState} updateState={setModalState} />}
//     </div>
//   )
// }

// export default MyAddress

import React, { useState } from "react";
import EditAddressModal from "./components/EditAddressModal";
import { Button } from "react-bootstrap";
import { detailsTypes } from "./type";
import "./style.css"; // custom styles

const MyAddress = () => {
  const [billingAddress, setAddressFirst] = useState<detailsTypes[]>([
    {
      name: "addressLine1",
      value: "3522 Interstate",
      placeholder: "Enter street address (e.g., 3522 Interstate)",
    },
    {
      name: "addressLine2",
      value: "75 Business Spur,",
      placeholder: "Enter apartment, suite, unit, etc.",
    },
    {
      name: "cityLine1",
      value: "Sault Ste.",
      placeholder: "Enter city name (e.g., Sault Ste.)",
    },
    {
      name: "cityLine2",
      value: "Marie, MI 49783",
      placeholder: "Enter district or ZIP (e.g., Marie, MI 49783)",
    },
    {
      name: "State",
      value: "New York",
      placeholder: "Enter state or province (e.g., New York)",
    },
  ]);

  const [shippingAddress, setAddressSecond] = useState<detailsTypes[]>([
    {
      name: "Address Line 1",
      value: "3522 Interstate",
      placeholder: "Enter street address (e.g., 3522 Interstate)",
    },
    {
      name: "Address Line 2",
      value: "75 Business Spur,",
      placeholder: "Enter apartment, suite, unit, etc.",
    },
    {
      name: "City Line 1",
      value: "Sault Ste.",
      placeholder: "Enter city name (e.g., Sault Ste.)",
    },
    {
      name: "City Line 2",
      value: "Marie, MI 49783",
      placeholder: "Enter district or ZIP (e.g., Marie, MI 49783)",
    },
    {
      name: "State",
      value: "New York",
      placeholder: "Enter state or province (e.g., New York)",
    },
  ]);

  const [modalState, setModalState] = useState<{
    closed: boolean;
    opened: boolean;
    editType: string;
    formData: detailsTypes[];
  }>({ closed: true, opened: false, editType: "", formData: [] });

  const handleOpenModal = (detailsData: detailsTypes[], editType: string) => {
    setModalState((prev) => ({
      ...prev,
      formData: detailsData,
      opened: true,
      closed: false,
      editType,
    }));
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, closed: true, opened: false }));
  };

  return (
    <div className="my-address-container">
      <div className="address-cards">
        {/* Billing Address */}
        <div className="address-card">
          <h4>Billing Address</h4>
          <div className="address-details">
            {billingAddress.map((item, index) => (
              <div className="address-line" key={index}>
                <p className="address-label">{item.placeholder}</p>
                <p className="address-value">{item.value}</p>
              </div>
            ))}
          </div>
          <Button
            variant="success"
            className="edit-btn"
            onClick={() => handleOpenModal(billingAddress, "Billing Address")}
          >
            Edit
          </Button>
        </div>

        {/* Shipping Address */}
        <div className="address-card">
          <h4>Shipping Address</h4>
          <div className="address-details">
            {shippingAddress.map((item, index) => (
              <div className="address-line" key={index}>
                <p className="address-label">{item.placeholder}</p>
                <p className="address-value">{item.value}</p>
              </div>
            ))}
          </div>
          <Button
            variant="success"
            className="edit-btn"
            onClick={() => handleOpenModal(shippingAddress, "Shipping Address")}
          >
            Edit
          </Button>
        </div>
      </div>

      {/* Modal */}
      {modalState.opened && (
        <EditAddressModal
          closeModal={closeModal}
          modalState={modalState}
          updateState={setModalState}
        />
      )}
    </div>
  );
};

export default MyAddress;
