'use client'
import React, { useState, useEffect } from 'react'
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


export default function DashBoardAddress(props) {


    const [addNewAddressStat, setAddNewAddressStat] = useState(false)
    const [addresses, setAddresses] = useState(props.defaultAddresses)
    const [newAddressData, setNewAddressData] = useState({
        province: '',
        city: '',
        detailedAddress: '',
        postalCode: 0,
        default: false
    });
    const [newDefaultAddress, setNewDefaultAddress] = useState({
        province: '',
        city: '',
        detailedAddress: '',
        postalCode: 0,
        default: true
    })

    const handleRadioChange = (event) => {
        setNewDefaultAddress(event.target.value);
    };

    useEffect(() => {
        
        fetchData();
    }, []);

    const fetchData = async () => {
        const fetchApiUrl = 'https://example.com/api/defaultAddresses';

        try {
            const response = await fetch(fetchApiUrl);
            const data = await response.json();
            setAddresses(data);
        } catch (error) {
            console.error('Error fetching data from the API:', error);
        }
    };

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
                    detailedAddress: '',
                    postalCode: 0,
                    default: false
                });
            } else {
                console.error('Error adding new address:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending data to the API:', error);
        }
    };

    const addToDefault = async () => {
        const addApiUrl = 'https://example.com/api/addNewAddress'

        try{
            newDefaultAddress.default = true
            console.log(newDefaultAddress)
            const response = await fetch(addApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDefaultAddress),
            });

            if(response.ok) {
                fetchData();

                const updatedAddresses = addresses.map(address => address.postalCode === newDefaultAddress.postalCode ? {...address, default: true} : address)

                setAddresses(updatedAddresses)

                setNewDefaultAddress({
                    province: '',
                    city: '',
                    detailedAddress: '',
                    postalCode: 0,
                    default: false
                });
            }
            else{
                console.log('Error adding new address', response.statusText);
            }
        } catch (error) {
            console.log('Error sending date to the API:', error);
        }
    }

  return (
    <Card className='m-4 flex justify-end h-[47rem] lg:h-max'>

        <section className="savedAddresses py-4 rounded-lg w-[70%] px-[4%] flex flex-col border lg:w-full">

            <div className="savedAddressesHeader flex border-b border-[#EDEDED] justify-between py-2 mb-4">
                <Typography
                variant='h6'
                fontSize={18}
                fontWeight={700}>
                    آدرس ها
                </Typography>

                <Button
                    onClick={() => setAddNewAddressStat(true)}
					variant="contained"
					sx={{
						bgcolor: Colors.orange,
						color: "black",
						borderRadius: "50px",
						boxShadow: "none",
						"&:hover": {
							bgcolor: Colors.orange,
						},
					}}>
					<Typography variant='div'> افزودن آدرس جدید</Typography>
				</Button>
            </div>

            <Stack spacing={4} className='px-[3%]'>

                <Stack spacing={2} className='defaultAddresses'>

                    <Typography variant='h6' fontSize={18} fontWeight={900} className='font-bold text-[#213346]'>
                        آدرس پیش فرض
                    </Typography>

                    <Stack spacing={1} className="defaultAddresses-bullets px-5 max-sm:text-sm">

                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                    <RadioGroup
                                     aria-labelledby="demo-radio-buttons-group-label"
                                     name="radio-buttons-group"
                                     >
                                        
                                        {
                                            addresses.map((product) => {
                                                if (product.default) {
                                                   return <FormControlLabel value={product.value} control={<Radio />} label={product.label} />
                                                }
                                        })}

                                    </RadioGroup>
                            </FormControl>


                    </Stack>

                </Stack>

                <Stack spacing={2} className='otherAddresses'>

                    <Typography variant='h6'  fontWeight={900} fontSize={18} className='font-bold text-[#21334'>
                        آدرس های دیگر
                    </Typography>

                    <Stack spacing={1} className="notDefaultAddresses-bullets px-5">

                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                    <RadioGroup
                                     onChange={handleRadioChange}
                                     aria-labelledby="demo-radio-buttons-group-label"
                                     name="radio-buttons-group"
                                     >
                                        
                                        {addresses.map((product, index) => {
                                            return <FormControlLabel value={product.value} control={<Radio />} label={product.label} />
                                        })}

                                    </RadioGroup>
                            </FormControl>
                    </Stack>

                </Stack>

                <div className='addNewAddressWrapper w-full flex justify-start'>

                    <Button
                    className='setDefaultBtn'
					variant="contained"
                    onClick={addToDefault}///
					sx={{
						bgcolor: Colors.orange,
						color: "black",
						borderRadius: "50px",
						boxShadow: "none",
						mr: 4,
						"&:hover": {
							bgcolor: Colors.orange,
						},
					}}>
					    <Typography variant='div'>افزودن آدرس به پیش فرض</Typography>
				    </Button>

                </div>

            </Stack>

            <Stack className='mt-8 px-[4%]' style={{display : addNewAddressStat ? 'block' : 'none'}}>

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

        </section>


    </Card>
  )
}
