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
    
    //این هووک برای اینه که اگه کاربر آدرس جدید وارد کرد و از مقادیر قبلی استفاده نکرد
    const [newAddressData, setNewAddressData] = useState({
        id: '',
        province: '',
        city: '',
        postal_code: 0,
        straight_address: '',
    });

    //آدرس انتخاب شده
    const [selectedAddress, setSelectedAddress] = useState(`${addresses[0].province}, ${addresses[0].city}, ${addresses[0].straight_address}, کد پستی: ${addresses[0].postal_code}`)

    //شیوه های ارسال پستی
    const [postMethod, setPostMethod] = useState([
        {id: '1', method: 'پست عادی', price: '25'},
        {id: '2', method: 'پست پیشتاز', price: '35'},
    ])
    
    //شیوه ارسال پستی انتخاب شده
    const [productPostMethod, setProductPostMethod] = useState(null)

    //قیمت های مربوطه کامپوننت سامری کارت ته صفحه
    const [cardPrices, setCardPrices] = useState({
        fullPrice: '398000',
        discountPrice: '398000',
        finalPrice: '398000'
    })

    const proceedPurchaseHandler = () => {
        console.log('clicked'); //این تابع برای هندل کردن اینکه اگه کاربر از داخل کامپوننت سامری کارت دکمه "دکمه فرایند خرید" زد رو تشخیص بده
    }

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

            <div className="w-full flex gap-2 flex-row-reverse justify-end rounded-lg items-center px-5 py-4 my-4 mb-7 bg-[#EEEEEE]">
                <div className='font-semibold'>
                    انتخاب آدرس گیرنده
                </div>

                <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1666 10.8337L38.3333 15.0003V36.667L26.6666 31.667M26.6666 31.667L13.3333 36.667M26.6666 31.667V20.0003M13.3333 36.667L1.66663 31.667V10.0003L9.99996 13.3337M13.3333 36.667V20.0003M20 27.122C20 27.122 9.99996 19.167 9.99996 11.667C9.99996 5.41699 15 1.66699 20 1.66699C25 1.66699 30 5.41699 30 11.667C30 19.167 20 27.122 20 27.122ZM21.6666 11.667C21.6666 11.225 21.491 10.801 21.1785 10.4885C20.8659 10.1759 20.442 10.0003 20 10.0003C19.5579 10.0003 19.134 10.1759 18.8214 10.4885C18.5089 10.801 18.3333 11.225 18.3333 11.667C18.3333 12.109 18.5089 12.5329 18.8214 12.8455C19.134 13.1581 19.5579 13.3337 20 13.3337C20.442 13.3337 20.8659 13.1581 21.1785 12.8455C21.491 12.5329 21.6666 12.109 21.6666 11.667Z" stroke="#213346" stroke-width="2"/>
                </svg>

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

            <div className="w-full mt-16 flex gap-2 flex-row-reverse justify-end items-center rounded-lg px-5 py-4 bg-[#EEEEEE]">
                <div className='font-semibold'>
                    اطلاعات گیرنده
                </div>

                <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.00004 24.1667H17C17.2367 24.1667 17.435 24.0872 17.595 23.9283C17.7539 23.7683 17.8334 23.57 17.8334 23.3333C17.8334 23.0967 17.7539 22.8983 17.595 22.7383C17.435 22.5794 17.2367 22.5 17 22.5H7.00004C6.76337 22.5 6.56504 22.5794 6.40504 22.7383C6.24615 22.8983 6.16671 23.0967 6.16671 23.3333C6.16671 23.57 6.24615 23.7683 6.40504 23.9283C6.56504 24.0872 6.76337 24.1667 7.00004 24.1667ZM7.00004 17.5H17C17.2367 17.5 17.435 17.4206 17.595 17.2617C17.7539 17.1017 17.8334 16.9033 17.8334 16.6667C17.8334 16.43 17.7539 16.2317 17.595 16.0717C17.435 15.9128 17.2367 15.8333 17 15.8333H7.00004C6.76337 15.8333 6.56504 15.9128 6.40504 16.0717C6.24615 16.2317 6.16671 16.43 6.16671 16.6667C6.16671 16.9033 6.24615 17.1017 6.40504 17.2617C6.56504 17.4206 6.76337 17.5 7.00004 17.5ZM3.02504 30C2.25837 30 1.61837 29.7433 1.10504 29.23C0.590596 28.7156 0.333374 28.075 0.333374 27.3083V2.69167C0.333374 1.925 0.590596 1.285 1.10504 0.771667C1.61837 0.257222 2.25837 0 3.02504 0H15.0484C15.4073 0 15.7562 0.0722224 16.095 0.216667C16.4339 0.363334 16.7239 0.557222 16.965 0.798333L22.8667 6.7C23.1078 6.94111 23.3012 7.23111 23.4467 7.57C23.5923 7.90889 23.665 8.25778 23.665 8.61667V27.3067C23.665 28.0733 23.4084 28.7133 22.895 29.2267C22.3806 29.7411 21.74 29.9983 20.9734 29.9983L3.02504 30ZM15.3334 6.98667V1.66667H3.02504C2.76948 1.66667 2.53448 1.77333 2.32004 1.98667C2.10671 2.20111 2.00004 2.43611 2.00004 2.69167V27.3083C2.00004 27.5639 2.10671 27.7989 2.32004 28.0133C2.53448 28.2267 2.76948 28.3333 3.02504 28.3333H20.975C21.2306 28.3333 21.4656 28.2267 21.68 28.0133C21.8934 27.7989 22 27.5639 22 27.3083V8.33333H16.68C16.2934 8.33333 15.9723 8.20555 15.7167 7.95C15.4612 7.69444 15.3334 7.37333 15.3334 6.98667Z" fill="#213346"/>
                </svg>
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

            <div className="w-full mt-12 px-5 py-4 flex flex-row-reverse justify-end gap-2 rounded-lg items-center bg-[#EEEEEE]">
                <div className='font-semibold'>
                    شیوه ارسال
                </div>

                <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.33337 21.3333C6.33337 22.2174 6.68456 23.0652 7.30968 23.6904C7.93481 24.3155 8.78265 24.6667 9.66671 24.6667C10.5508 24.6667 11.3986 24.3155 12.0237 23.6904C12.6489 23.0652 13 22.2174 13 21.3333C13 20.4493 12.6489 19.6014 12.0237 18.9763C11.3986 18.3512 10.5508 18 9.66671 18C8.78265 18 7.93481 18.3512 7.30968 18.9763C6.68456 19.6014 6.33337 20.4493 6.33337 21.3333ZM23 21.3333C23 22.2174 23.3512 23.0652 23.9764 23.6904C24.6015 24.3155 25.4493 24.6667 26.3334 24.6667C27.2174 24.6667 28.0653 24.3155 28.6904 23.6904C29.3155 23.0652 29.6667 22.2174 29.6667 21.3333C29.6667 20.4493 29.3155 19.6014 28.6904 18.9763C28.0653 18.3512 27.2174 18 26.3334 18C25.4493 18 24.6015 18.3512 23.9764 18.9763C23.3512 19.6014 23 20.4493 23 21.3333Z" stroke="#213346" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.33337 21.333H3.00004V14.6663M1.33337 1.33301H19.6667V21.333M13 21.333H23M29.6667 21.333H33V11.333M33 11.333H19.6667M33 11.333L28 2.99967H19.6667M3.00004 7.99967H9.66671" stroke="#213346" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

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

                                        {postMethod.map((method) => (
                                            (<FormControlLabel onClick={(e) => {setProductPostMethod(e.target.value)}} label={`ارسال با ${method.method}: هزینه ${method.price} هزار تومان`} control={<Radio />} value={method.id}/>)
                                        ))}

                                    </div>
                                    
                                            

                    </RadioGroup>
                </FormControl>
            </div>

            <div className='w-full rounded-lg bg-[#EEEEEE] my-8'>

            </div>

            <div className='mb-16'>
                <DeliverySummary proceedPurchaseHandler={proceedPurchaseHandler} cardPrices={cardPrices}/>
            </div>

        </section>

    </div>
  )
}
