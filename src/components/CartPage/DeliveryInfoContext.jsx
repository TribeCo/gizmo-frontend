import { SenderInformation } from '@/services/DashBoard';
import React, { createContext, useState, useContext } from 'react';

const SenderInfoContext = createContext();

export function useSenderInfo() {
    return useContext(SenderInfoContext);
}

export const SenderInfoProvider = ({ children }) => {
    const [SenderInfo, setSenderInfo] = useState({
        name_delivery: '',
        phone_delivery: '',
        description: '',
        delivery_method: '',
    });

    const handleSenderChange = (fieldName) => (event) => {
        setSenderInfo(prev => ({
            ...prev,
            [fieldName]: event.target.value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await SenderInformation(SenderInfo);
            console.log('Success:', response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <SenderInfoContext.Provider value={{ SenderInfo, handleSenderChange, handleSubmit }}>
            {children}
        </SenderInfoContext.Provider>
    );
};
