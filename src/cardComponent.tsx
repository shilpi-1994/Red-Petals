import React from "react"
import DoneeDetails from './doneeDetails';

export interface DoneeProps {
    requestId: number;
    bloodGroup?: string;
    city?: string;
    area?: string;
    phone?: string;
    amount?: number
}

const sampleDoneeData = [
    {
        requestId : 1234,
        bloodGroup : 'A+',
        city : 'Bangalore',
        area : 'Nagwara',
        phone : '1234567890',
        amount : 300
    },
    {
        requestId : 5678,
        bloodGroup : 'B+',
        city : 'Bangalore',
        area : 'Nagwara',
        phone : '1234567890',
        amount : 100
    },
    {
        requestId : 4563,
        bloodGroup : 'O+',
        city : 'Bangalore',
        area : 'Nagwara',
        phone : '1234567890',
        amount : 700
    }
];

const CardComponent = () => {
    return (
            //@ts-ignore
            <DoneeDetails details={sampleDoneeData as DoneeProps[]}/>   
    )
}

export default CardComponent;
