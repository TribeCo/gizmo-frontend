'use client'
import React,{useState} from 'react'
import DeliverySummary from '@/components/DeliveryInfoPage/DeliveryPageSummary'
import { Colors } from "@/utils";


import {
	Button,
	Typography,
	Grid,
    Card,
    Stack,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
} from "@mui/material";

export default function DeliveryPageInfo() {

    
    const [addresses, setAddresses] = useState([{
        id: '1',
        province: 'سیستان بلوچستان',
        city: 'ایتالیا',
        postal_code: 6542542578620,
        straight_address: 'کوچه فرانسه، خونه اکبر پشت خونه حاجر تبنمی ستبسنمبیتب سنمتبیس نمبتیم نبتسیم نتبنم',
        current: true
    },
    {
        id: '2',
        province: 'سیستان بلوچستان',
        city: 'ایتالیا',
        postal_code: 6542542578620,
        straight_address: 'کوچه فرانسه، خونه اکبر پشت خونه حاجر تبنمی ستبسنمبیتب سنمتبیس نمبیم نتبنم',
        current: true
    }])
    
    const [newAddressData, setNewAddressData] = useState({
        id: '',
        province: '',
        city: '',
        postal_code: 0,
        straight_address: '',
        current: false
    });
    const [selectedAddress, setSelectedAddress] = useState(`${addresses[0].province}, ${addresses[0].city}, ${addresses[0].straight_address}, کد پستی: ${addresses[0].postal_code}`)

    const addNewAddress = async () => {
        // Define the API endpoint for adding a new address
        const addApiUrl = 'https://example.com/api/addNewAddress';

        try {
            const response = await fetch(addApiUrl, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAddressData),
            });

            if (response.ok) {
                // Optionally, you can fetch updated data after adding the new address
                fetchData();
                // Reset the newAddressData state after successfully adding the address
                setNewAddressData({
                    province: '',
                    city: '',
                    straight_address: '',
                    postal_code: 0,
                    current: false
                });
            } else {
                console.error('Error adding new address:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending data to the API:', error);
        }
    };

  return (
    <div>

        <section className="savedAddresses py-4 rounded-lg px-[4%] flex flex-col w-full">

            <div className="savedAddressesHeader flex border-b border-[#EDEDED] justify-between py-2 mb-4">
                <Typography
                variant='h6'
                fontSize={18}
                fontWeight={700}>
                    آدرس ها
                </Typography>

                
            </div>

            <Stack spacing={4} className='px-[3%]'>

                <Stack spacing={2} className='defaultAddresses'>

                    <Typography variant='h6' fontSize={18} fontWeight={900} className='font-bold text-[#213346]'>
                        آدرس انتخاب شده برای ارسال:
                    </Typography>

                    <Stack spacing={1} className="defaultAddresses-bullets px-5 max-sm:text-sm">
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label" style={{ overflow: 'hidden' }}></FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                {selectedAddress}
                            </RadioGroup>
                        </FormControl>
                    </Stack>


                </Stack>

                <Stack spacing={2} className='otherAddresses'>

                    <Typography variant='h6'  fontWeight={900} fontSize={18} className='font-bold text-[#21334'>
                        آدرس های انتخاب شده:
                    </Typography>

                    <Stack spacing={1} className="notDefaultAddresses-bullets px-5">

                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                    <RadioGroup
                                     aria-labelledby="demo-radio-buttons-group-label"
                                     name="radio-buttons-group"
                                     >
                                        
                                        {addresses.map((address) => {
                                            if (address.current) {
                                                return <FormControlLabel onClick={() => {setSelectedAddress(`${address.province}, ${address.city}, ${address.straight_address}, کد پستی: ${address.postal_code}`)}} label={`${address.province}, ${address.city}, ${address.straight_address}, کد پستی: ${address.postal_code}`} control={<Radio />} value={address.id} />
                                            }else null
                                        })}

                                    </RadioGroup>
                            </FormControl>
                    </Stack>

                </Stack>

            </Stack>

            <Stack className='mt-8 px-[4%]'>

                <Typography variant='h6' fontSize={18} fontWeight={900} className='font-bold pb-2 text-[#213346]'>
                    افزودن آدرس جدید
                </Typography>

                <Stack>
                    <Grid container spacing={2} className='my-8 w-full'>

                        <Grid item xs={12} md={6}>

                            <label htmlFor="province" className='w-full block text-xs mr-2'>استان:</label>
                            <input type="text" id='province'  onChange={(e) => setNewAddressData({ ...newAddressData, province: e.target.value })} className='bg-[#EEEE] w-[90%] rounded-lg h-8 mt-2 outline-none px-2' />

                        </Grid>

                        <Grid item xs={12} md={6}>

                            <label htmlFor="city" className='w-full block text-xs mr-2'>شهر / شهرستان:</label>
                            <input type="text" onChange={(e) => setNewAddressData({ ...newAddressData, city: e.target.value })} id='city' className='bg-[#EEEE] w-[90%] rounded-lg h-8 mt-2 outline-none px-2' />

                        </Grid>

                        <Grid item xs={12} md={6}>

                            <label htmlFor="ExactAddress" className='w-full block text-xs mr-2'>آدرس دقیق:</label>
                            <textarea id='ExactAddress' onChange={(e) => setNewAddressData({ ...newAddressData, detailedAddress: e.target.value })} className='resize-none bg-[#EEEE] w-[90%] h-20 rounded-lg mt-2 outline-none px-2' />

                        </Grid>

                        <Grid item xs={12} md={6}>

                            <label htmlFor="postalCode" className='w-full block text-xs mr-2'>کد پستی:</label>
                            <input type="number" onChange={(e) => setNewAddressData({ ...newAddressData, postalCode: parseInt(e.target.value, 10) || 0 })} onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} style={{appearance: 'textfield'}} id='postalCode' min={0} className='resize-none px-2 bg-[#EEEE] w-[90%] h-8 rounded-lg mt-2 outline-none' />
                            
                            <div className='mt-4 flex justify-end lg:justify-center'>
                                <Button className=''
                                variant="contained"
                                onClick={addNewAddress}
                                sx={{
                                    bgcolor: Colors.orange,
                                    color: "black",
                                    borderRadius: "50px",
                                    boxShadow: "none",
                                    mt: 1.5,
                                    mr: 7,
                                    px: 4,
                                    "&:hover": {
                                        bgcolor: Colors.orange,
                                    },
                                }}>
                                    <Typography variant='div'>افزودن آدرس ها</Typography>
                                </Button>
                            </div>

                        </Grid>


                    </Grid>
                </Stack>

            </Stack>

            <div className="w-full px-2 py-4 bg-[#EEEEEE]">
                <div>
                    اطلاعات گیرنده
                </div>

            </div>

            <Stack className='mt-8 px-[4%]'>

                <Typography variant='h6' fontSize={18} fontWeight={900} className='font-bold pb-6 text-[#213346]'>
                    اطلاعات گیرنده:
                </Typography>

                <Stack className='mb-8'>
                    <Grid container spacing={2} className='my-8 w-full'>

                        <Grid item xs={12} md={6}>

                            <label htmlFor="province" className='w-full block text-xs mr-2'>نام و نام خانوادگی:</label>
                            <input type="text" id='province'  onChange={(e) => setNewAddressData({ ...newAddressData, province: e.target.value })} className='bg-[#EEEE] w-[90%] rounded-lg h-8 mt-2 outline-none px-2' />

                        </Grid>

                        <Grid item xs={12} md={6}>

                            <label htmlFor="city" className='w-full block text-xs mr-2'>شماره تماس:</label>
                            <input type="text" onChange={(e) => setNewAddressData({ ...newAddressData, city: e.target.value })} id='city' className='bg-[#EEEE] w-[90%] rounded-lg h-8 mt-2 outline-none px-2' />

                        </Grid>


                    </Grid>
                </Stack>

            </Stack>

            <div className="w-full px-2 py-4 bg-[#EEEEEE]">
                <div>
                    شیوه ارسال
                </div>

            </div>

            <div className='my-8 mt-10'>
                <FormControl className='w-full'>
                              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                    <RadioGroup
                                     aria-labelledby="demo-radio-buttons-group-label"
                                     name="radio-buttons-group"
                                     className='w-full'
                                     >
                                    <div className='flex justify-start gap-16 px-8 w-full md:flex-col'>

                                     <FormControlLabel label={'ارسال با پست پیشتاز: هزینه 35هزار تومان'} control={<Radio />} value={1} />
                                     <FormControlLabel label={'ارسال با پست پیشتاز: هزینه 35هزار تومان'} control={<Radio />} value={2} />
                                    </div>
                                    
                                            

                                    </RadioGroup>
                            </FormControl>
            </div>

            <div className='w-full rounded-lg bg-[#EEEEEE] my-8'>

            </div>

            <DeliverySummary/>

        </section>

    </div>
  )
}
