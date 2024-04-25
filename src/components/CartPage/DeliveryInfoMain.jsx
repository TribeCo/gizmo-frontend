'use client'
import React, { useState } from 'react';
import { Box, FormControlLabel, Checkbox, Typography, Grid, TextField, Radio, RadioGroup, Button } from '@mui/material';
import DeliveryInfoCard from './DeliveryInfoCard';
import DeliveryInfoHeader from './DeliveryInfoHeader';
import { SenderInformation, formatFullAddress } from '@/services/DashBoard';

function DeliveryInfoMain({ addresses }) {

    const [name_delivery, setName_Delivery] = useState('');
    const [phone_delivery, setPhone_Delivery] = useState('');
    const [description, setDescription] = useState('');
    const [delivery_method, setDelivery_Method] = useState('');
    const [checkedAddresses, setCheckedAddresses] = useState({});

    const handleAddressChange = (event) => {
        setCheckedAddresses({ ...checkedAddresses, [event.target.name]: event.target.checked });
    };

    const handleShippingChange = (event) => {
        setDelivery_Method(event.target.value);
    };

    const currentAddress = addresses.data.find(address => address.current);

    const handleSubmit = async () => {
        const formData = {
            name_delivery,
            phone_delivery,
            description,
            delivery_method,
        };
        try {
            const response = await SenderInformation(formData);
            console.log('Success:', response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Box>
            <DeliveryInfoHeader number={0} />
            <Box
                sx={{
                    py: {xs:4 , md:7},
                    display: 'flex',
                    flexDirection: 'column',
                    px: 5,
                    gap: 1,
                    width: { xs: 'auto', xl: '1282px' },
                }}
            >
                <Typography sx={{ fontSize: { xs: '14px', sm: '20px', md: '24px', lg: '28px' }, fontWeight: '700', color: '#213346', mb: 2 }} > آدرس انتخاب شده برای ارسال : </Typography>
                <Typography sx={{ fontSize: { xs: '12px', sm: '16px', md: '20px', lg: '24px' }, fontWeight: '400', mb: {xs: 3 , md:10} }} >
                    {formatFullAddress(currentAddress)}                                  
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', sm: '20px', md: '24px', lg: '28px' }, fontWeight: '700', color: '#213346', mb: 0.5 }} > آدرس‌های ذخیره شده : </Typography>
                {addresses.data.map((address, index) => (
                    <FormControlLabel
                        sx={{ ml: {xs: 0, md: 0.5} }}
                        key={index}
                        control={
                            <Checkbox
                                checked={checkedAddresses[`checkbox${index}`] || false}
                                onChange={handleAddressChange}
                                name={`checkbox${index}`}
                            />
                        }
                        label={<Typography sx={{ fontSize: { xs: '12px', sm: '16px', md: '20px', lg: '24px' }, fontWeight: '400' }}>{formatFullAddress(address)}</Typography>}
                    />
                ))}
                <Typography sx={{ fontSize: { xs: '14px', sm: '20px', md: '24px', lg: '28px' }, fontWeight: '700', color: '#213346', mt: { xs:4, md:7 }, mb: 3 }} > اضافه کردن آدرس جدید : </Typography>
                <DeliveryInfoCard />
            </Box>
            <DeliveryInfoHeader number={1} />
            <Box
                sx={{
                    py: { xs:4 , md:7 },
                    display: 'flex',
                    flexDirection: 'column',
                    px: 5,
                    gap: 1,
                    width: { xs: 'auto', xl: '1282px' },
                }}
            >
                <Typography sx={{ fontSize: { xs: '14px', sm: '20px', md: '24px', lg: '28px' }, fontWeight: '700', color: '#213346', mb: 2 }} > اطلاعات گیرنده : </Typography>
                <Grid container spacing={2} sx={{ pl: {xs: 0, md:2 } }}> 
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> نام و نام خانوادگی : </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={name_delivery}
                            onChange={(e) => setName_Delivery(e.target.value)}
                            sx={{
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                },
                                width: {xs: '320', sm: '380', md: '420', lg: '550px'},
                                backgroundColor: '#EEEEEE',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> شماره تماس : </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={phone_delivery}
                            onChange={(e) => setPhone_Delivery(e.target.value)}
                            sx={{
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                },
                                width: {xs: '320', sm: '380', md: '420', lg: '550px'},
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
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            sx={{
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                    height: '120px',
                                },
                                width: {xs: '320', sm: '380', md: '420', lg: '550px'},
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
                    gap: { xs: 3, lg: 10 },
                    width: { xs: 'auto', xl: '1282px' },
                }}
                value={delivery_method}
                onChange={handleShippingChange}
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
