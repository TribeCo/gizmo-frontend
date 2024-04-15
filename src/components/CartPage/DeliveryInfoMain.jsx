import React, { useState } from 'react';
import { Box, FormControlLabel, Checkbox, Typography, Grid, TextField, Radio, RadioGroup } from '@mui/material';
import DeliveryInfoCard from './DeliveryInfoCard';
import DeliveryInfoHeader from './DeliveryInfoHeader';

const CircleUncheckedIcon = () => (
    <SvgIcon>
        <circle cx="12" cy="12" r="10" stroke="#747678" strokeWidth="2" fill="none" />
    </SvgIcon>
);

const CircleCheckedIcon = () => (
    <SvgIcon>
        <circle cx="12" cy="12" r="10" fill="#22668D" /> {/* Customize the checkmark color and size */}
    </SvgIcon>
);

function DeliveryInfoMain() {

    const [checkedAddresses, setCheckedAddresses] = useState({});
    const [selectedShipping, setSelectedShipping] = useState('پست پیشتاز'); // Default shipping method

    const handleAddressChange = (event) => {
        setCheckedAddresses({ ...checkedAddresses, [event.target.name]: event.target.checked });
    };

    const handleShippingChange = (event) => {
        setSelectedShipping(event.target.value);
    };

    // Example addresses
    const savedAddresses = [
        "آدرس ۱: تهران، خیابان انقلاب",
        "آدرس ۲: اصفهان، خیابان شیخ صدوق",
    ];

    return (
        <Box>
            <DeliveryInfoHeader number={0} />
            <Box
                sx={{
                    py: {xs:4 , md:7},
                    display: 'flex', // Use flex layout
                    flexDirection: 'column', // Arrange children in a column
                    px: 5,
                    gap: 1,
                    width: { xs: 'auto', xl: '1282px' },
                }}
            >
                <Typography sx={{ fontSize: { xs: '14px', sm: '20px', md: '24px', lg: '28px' }, fontWeight: '700', color: '#213346', mb: 2 }} > آدرس انتخاب شده برای ارسال : </Typography>
                <Typography sx={{ fontSize: { xs: '12px', sm: '16px', md: '20px', lg: '24px' }, fontWeight: '400', mb: {xs: 3 , md:10} }} > لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. </Typography>
                <Typography sx={{ fontSize: { xs: '14px', sm: '20px', md: '24px', lg: '28px' }, fontWeight: '700', color: '#213346', mb: 0.5 }} > آدرس‌های ذخیره شده : </Typography>
                {savedAddresses.map((address, index) => (
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
                        label={<Typography sx={{ fontSize: { xs: '12px', sm: '16px', md: '20px', lg: '24px' }, fontWeight: '400' }}>{address}</Typography>}
                    />
                ))}
                <Typography sx={{ fontSize: { xs: '14px', sm: '20px', md: '24px', lg: '28px' }, fontWeight: '700', color: '#213346', mt: { xs:4, md:7 }, mb: 3 }} > اضافه کردن آدرس جدید : </Typography>
                <DeliveryInfoCard />
            </Box>
            <DeliveryInfoHeader number={1} />
            <Box
                sx={{
                    py: { xs:4 , md:7 },
                    display: 'flex', // Use flex layout
                    flexDirection: 'column', // Arrange children in a column
                    px: 5,
                    gap: 1,
                    width: { xs: 'auto', xl: '1282px' },
                }}
            >
                <Typography sx={{ fontSize: { xs: '14px', sm: '20px', md: '24px', lg: '28px' }, fontWeight: '700', color: '#213346', mb: 2 }} > اطلاعات گیرنده : </Typography>
                <Grid container spacing={2} sx={{ pl: {xs: 0, md:2 } }}> {/* Adjust spacing between Grid items */}
                    <Grid item xs={12} sm={6}> {/* Full width on xs screens, half width on sm screens */}
                        <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> نام و نام خانوادگی : </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
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
                    <Grid item xs={12} sm={6}> {/* Full width on xs screens, half width on sm screens */}
                        <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> شماره تماس : </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
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
                    <Grid item xs={12}> {/* Full width on all screen sizes */}
                        <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> توضیحات بیشتر: </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
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
                        px: {xs: 5, md: 10},
                        gap: {xs: 3 , lg: 15},
                        width: { xs: 'auto', xl: '1282px' },
                    }}
                    value={selectedShipping}
                    onChange={handleShippingChange}
                >
                    <FormControlLabel
                        value="پست پیشتاز"
                        control={<Radio />}
                        label={<Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' }, fontWeight: '700', color: '#747678' }}>ارسال با پست پیشتاز : هزینه 35 هزار تومان</Typography>}
                    />
                    <FormControlLabel
                        value="تیپاکس"
                        control={<Radio />}
                        label={<Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' }, fontWeight: '700', color: '#747678' }}>ارسال با تیپاکس : هزینه 35 هزار تومان</Typography>}
                    />
                </RadioGroup>
        </Box>
    );
}

export default DeliveryInfoMain;
