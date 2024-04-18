import { useState, useEffect } from 'react';
import { toPersianDigits } from './convert';

export const usePhoneNumber = (initialValue) => {
    const [phoneNumber, setPhoneNumber] = useState(initialValue);
    const [displayValue, setDisplayValue] = useState('');

    useEffect(() => {
        setDisplayValue(toPersianDigits(phoneNumber));
    }, [phoneNumber]);

    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const currentDisplayValue = toPersianDigits(phoneNumber);
        if (input !== currentDisplayValue) {
            const newValue = input.replace(/[^\d۰۱۲۳۴۵۶۷۸۹]/g, '').replace(/[۰۱۲۳۴۵۶۷۸۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
            setPhoneNumber(newValue);
        }
    };

    return { phoneNumber, displayValue, handlePhoneNumberChange };
};
