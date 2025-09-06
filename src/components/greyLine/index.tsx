import React, { FC } from 'react';
import './style.css';

interface probsTypes {
    title: string;
}

const GreyLine: FC<probsTypes> = ({title}) => {
    return (
        <div className="top-selling-wrapper">
            <h2 className="top-selling-title">{title}</h2>
            <div className="top-selling-underline-container">
                <div className="green-underline"></div>
                <div className="grey-line"></div>
            </div>
        </div>
    )
}

export default GreyLine