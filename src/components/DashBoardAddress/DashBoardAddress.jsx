'use client'
import React from 'react'
import { Colors } from "@/utils";
import { useRadioGroup } from '@mui/material/RadioGroup';


import {
	Box,
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
  return (
    <Card className='m-4 flex justify-end'>

        <section className="savedAddresses py-4 rounded-lg w-[70%] px-[4%] flex flex-col border lg:w-full">

            <div className="savedAddressesHeader flex border-b border-[#EDEDED] justify-between py-2 mb-4">
                <Typography
                variant='h6'
                fontSize={18}
                fontWeight={700}>
                    آدرس ها
                </Typography>

                <Button
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
                                        
                                        {props.defaultAddresses.map((product) => (
                                            <FormControlLabel value={product.value} control={<Radio />} label={product.label} />
                                        ))}

                                    </RadioGroup>
                            </FormControl>


                    </Stack>

                </Stack>

                <Stack spacing={2} className='otherAddresses'>

                    <Typography variant='h6'  fontWeight={900} fontSize={18} className='font-bold text-[#21334'>
                        آدرس های دیگر
                    </Typography>

                    <Stack spacing={1} className="defaultAddresses-bullets px-5">

                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                    <RadioGroup
                                     aria-labelledby="demo-radio-buttons-group-label"
                                     name="radio-buttons-group"
                                     >
                                        
                                        {props.defaultAddresses.map((product, index) => {
                                            return <FormControlLabel value={product.value} control={<Radio />} label={product.label} />
                                        })}

                                    </RadioGroup>
                            </FormControl>
                    </Stack>

                </Stack>

                <div className='w-full flex justify-end'>

                    <Button className=''
					variant="contained"
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

            <Stack className='mt-8'>

                <Typography variant='h6' fontSize={18} fontWeight={900} className='font-bold pb-2 text-[#213346]'>
                    افزودن آدرس جدید
                </Typography>

                <Stack>
                    <Grid container spacing={2} className='my-8 w-full'>

                        <Grid item xs={12} md={6}>

                            <label htmlFor="province" className='w-full block text-xs mr-2'>استان:</label>
                            <input type="text" id='province' className='bg-[#EEEE] w-[90%] rounded-lg h-8 mt-2 outline-none' />

                        </Grid>

                        <Grid item xs={12} md={6}>

                            <label htmlFor="province" className='w-full block text-xs mr-2'>شهر / شهرستان:</label>
                            <input type="text" id='province' className='bg-[#EEEE] w-[90%] rounded-lg h-8 mt-2 outline-none' />

                        </Grid>

                        <Grid item xs={12} md={6}>

                            <label htmlFor="province" className='w-full block text-xs mr-2'>آدرس دقیق:</label>
                            <textarea id='province' className='resize-none bg-[#EEEE] w-[90%] h-20 rounded-lg mt-2 outline-none' />

                        </Grid>

                        <Grid item xs={12} md={6}>

                            <label htmlFor="province" className='w-full block text-xs mr-2'>کد پستی:</label>
                            <input type="number" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} style={{appearance: 'textfield'}} id='province' min={0} className='resize-none bg-[#EEEE] w-[90%] h-8 rounded-lg mt-2 outline-none' />
                            <div className='flex justify-end'>
                                <Button className=''
                                variant="contained"
                                sx={{
                                    bgcolor: Colors.orange,
                                    color: "black",
                                    borderRadius: "50px",
                                    boxShadow: "none",
                                    mt: 1.5,
                                    mr: 4,
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
