import { Button, Form, Modal } from 'react-bootstrap'
import React, { useEffect, useState, CSSProperties } from 'react'
import { detailsTypes, ModalStateType } from '../type';
import { toast } from 'react-toastify';

import { BeatLoader, ClipLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

type ModalTypes = {
    closeModal: () => void
    modalState: {
        closed: boolean;
        opened: boolean;
        editType: string;
        formData: detailsTypes[];
    },

    updateState: React.Dispatch<React.SetStateAction<ModalStateType>>

};

const EditAddressModal: React.FC<ModalTypes> = ({ closeModal, modalState, updateState }) => {

    const [isValueSaved, setIsValuesSaved] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const updatedFormData = modalState.formData.map(field => field.name === name ? { ...field, value: value } : field);

        updateState(pre => ({ ...pre, formData: updatedFormData }))
    }


    const saveFormData = () => {

        const promise: Promise<string> = new Promise((res, rej) => {
            setLoading(true);
            setTimeout(() => {
                res('Address saved');
                setLoading(false)
            }, 1000)
        })

        promise.then(value => {
            closeModal();
        }).catch(err => {
            console.log("hii", err)
        });

        setTimeout(()=>{
            toast.success('Values Saved')
        },1000)
    }

    // useEffect(() => {
    //     toast.success(isValueSaved)
    // }, [isValueSaved]);

    return (
        <Modal show={modalState.opened} onHide={closeModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>{`Edit ${modalState.editType}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {modalState && modalState.formData && modalState.formData.length > 0 && modalState.formData.map((items, index) => (
                        <Form.Group className="mb-3" key={index}>
                            <Form.Label>{items.placeholder}</Form.Label>
                            <Form.Control type="text" name={items.name} value={items.value} onChange={handleChange} />
                        </Form.Group>

                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal} >Cancel</Button>
                <Button disabled={loading} variant="success" onClick={saveFormData}>{!loading && 'Save'}
                    <BeatLoader
                        color={'#ffffff'}
                        loading={loading}
                        cssOverride={override}
                        size={10}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default React.memo(EditAddressModal);