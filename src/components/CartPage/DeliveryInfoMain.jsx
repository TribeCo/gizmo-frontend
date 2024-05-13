'use client'
import React, { useState, useEffect } from 'react';
import { Box, FormControlLabel, Checkbox, Typography, Grid, TextField, Radio, RadioGroup, Button } from '@mui/material';
import DeliveryInfoCard from './DeliveryInfoCard';
import DeliveryInfoHeader from './DeliveryInfoHeader';
import { MakeDefaultAddress, fetchAddresses, formatFullAddress } from '@/services/DashBoard';
import { useAuth } from "@/context/AuthContext";

function DeliveryInfoMain({ handleSenderChange }) {

    const [checkedAddresses, setCheckedAddresses] = useState({});
    const [addresses, setAddresses] = useState([]);
    const { tokens } = useAuth();

    useEffect(() => {
        if (tokens) {
            handleGetAddress();
        }
    }, [tokens]);

    const handleGetAddress = async () => {
        setAddresses((await fetchAddresses(tokens)).data)
    }

    const handleChange = (event, id) => {
        const newCheckedState = Object.keys(checkedAddresses).reduce(
            (state, key) => ({ ...state, [key]: false }),
            { [event.target.name]: event.target.checked }
        );
        setCheckedAddresses(newCheckedState);
        if (event.target.checked) {
            MakeCurrent(id);
        }
    };

    const MakeCurrent = async () => {
        try {
            if (!selectedAddressId) {
                alert('Please select an address first');
                return;
            }
            const response = ((await MakeDefaultAddress(selectedAddressId, tokens)).messages);
            setAddresses((await fetchAddresses(tokens)).data);
            alert(`${response}`);
        } catch (error) {
            console.error('Error setting default address:', error);
            alert(error.message);
        };
    }
    
    const currentAddress = addresses.find(address => address.current);
    const otherAddress = addresses.filter(address => (!address.current));

    return (
        <Box>
            <DeliveryInfoHeader number={0} />
            <Box
                sx={{
                    py: { xs: 4, md: 7 },
                    display: 'flex',
                    flexDirection: 'column',
                    px: 5,
                    gap: 1,
                    width: { xs: 'auto', xl: '1282px' },
                }}
            >
                <Typography sx={{ fontSize: { xs: '14px', sm: '20px', md: '24px', lg: '28px' }, fontWeight: '700', color: '#213346', mb: 2 }} > آدرس انتخاب شده برای ارسال : </Typography>
                <Typography sx={{ fontSize: { xs: '12px', sm: '16px', md: '20px', lg: '24px' }, fontWeight: '400', mb: { xs: 3, md: 10 } }} >
                    {formatFullAddress(currentAddress)}
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', sm: '20px', md: '24px', lg: '28px' }, fontWeight: '700', color: '#213346', mb: 0.5 }} > آدرس‌های ذخیره شده : </Typography>
                {otherAddress.map((address, index) => (
                    <FormControlLabel
                        sx={{ ml: { xs: 0, md: 0.5 } }}
                        key={index}
                        control={
                            <Checkbox
                                checked={checkedAddresses[`checkbox${index}`] || false}
                                onChange={(e) => handleChange(e, address.id)}
                                name={`checkbox${index}`}
                            />
                        }
                        label={<Typography sx={{ fontSize: { xs: '12px', sm: '16px', md: '20px', lg: '24px' }, fontWeight: '400' }}>{formatFullAddress(address)}</Typography>}
                    />
                ))}
                <Typography sx={{ fontSize: { xs: '14px', sm: '20px', md: '24px', lg: '28px' }, fontWeight: '700', color: '#213346', mt: { xs: 4, md: 7 }, mb: 3 }} > اضافه کردن آدرس جدید : </Typography>
                <DeliveryInfoCard  setAddress={setAddresses}/>
            </Box>
            <DeliveryInfoHeader number={1} />
            <Box
                sx={{
                    py: { xs: 4, md: 7 },
                    display: 'flex',
                    flexDirection: 'column',
                    px: 5,
                    gap: 1,
                    width: { xs: 'auto', xl: '1282px' },
                }}
            >
                <Typography sx={{ fontSize: { xs: '14px', sm: '20px', md: '24px', lg: '28px' }, fontWeight: '700', color: '#213346', mb: 2 }} > اطلاعات گیرنده : </Typography>
                <Grid container spacing={2} sx={{ pl: { xs: 0, md: 2 } }}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> نام و نام خانوادگی : </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            // value={SenderInfo.name_delivery}
                            onChange={handleSenderChange("name_delivery")}
                            sx={{
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                },
                                width: { xs: '320', sm: '380', md: '420', lg: '550px' },
                                backgroundColor: '#EEEEEE',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> شماره تماس : </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            // value={SenderInfo.phone_delivery}
                            onChange={handleSenderChange("phone_delivery")}
                            sx={{
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                },
                                width: { xs: '320', sm: '380', md: '420', lg: '550px' },
                                backgroundColor: '#EEEEEE',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> توضیحات بیشتر: </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            // value={SenderInfo.description}
                            onChange={handleSenderChange("description")}
                            sx={{
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                    height: '120px',
                                },
                                width: { xs: '320', sm: '380', md: '420', lg: '550px' },
                                backgroundColor: '#EEEEEE',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <DeliveryInfoHeader number={2} />
            <RadioGroup
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    py: 5,
                    px: { xs: 5, md: 10 },
                    gap: { xs: 3, lg: 5 },
                    width: { xs: 'auto', xl: '1282px' },
                }}
                // value={SenderInfo.delivery_method}
                onChange={handleSenderChange('delivery_method')}
            >
                <FormControlLabel
                    value="c"
                    control={<Radio />}
                    label={<Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' }, fontWeight: '700', color: '#747678' }}>درون شهری : هزینه ثابت</Typography>}
                />
                <FormControlLabel
                    value="b"
                    control={<Radio />}
                    label={<Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' }, fontWeight: '700', color: '#747678' }}>ارسال با اتوبوس : هزینه متغیر</Typography>}
                />
                <FormControlLabel
                    value="p"
                    control={<Radio />}
                    label={<Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' }, fontWeight: '700', color: '#747678' }}>پست معمولی : هزینه اقتصادی</Typography>}
                />
                <FormControlLabel
                    value="t"
                    control={<Radio />}
                    label={<Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' }, fontWeight: '700', color: '#747678' }}>تیپاکس (پس کرایه) : سریع و گران</Typography>}
                />
            </RadioGroup>
        </Box>
    );
}

export default DeliveryInfoMain;
