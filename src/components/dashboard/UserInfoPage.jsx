import React from "react";
import { useEffect, useState } from "react";
import {
    Paper,
    Button,
    Grid,
    Typography,
    Divider,
    Box,
} from '@mui/material';
import { Colors } from "@/utils";

const convertToPersian = (number) => {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    // return number.toString().replace(/\d/g, (x) => persianNumbers[x]);
};

function createFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const UserInfoPage = () => {
    const [activities, setActivites] = useState([]);
    const [information, setInformation] = useState([]);
    useEffect(() => {
        const fetchActivties = async () => {
            try {
                const response = await fetch('https://gn01.liara.run/api/orders/count/', {
                    headers: {
                        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExNTc3MDMzLCJpYXQiOjE3MTE0OTA2MzMsImp0aSI6ImE4NjYxZTY2MDc3NTRlODlhODFlNTMyNDBkMzIzYjUxIiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.TnAmTpVafP_kWA6YmBGDCRpPa_6v9VRpAwYypmwSBA8`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setActivites(data);
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        };
        const fetchInformation = async () => {
            try {
                const response = await fetch('https://gn01.liara.run/api/users/info/', {
                    headers: {
                        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExNTc3MDMzLCJpYXQiOjE3MTE0OTA2MzMsImp0aSI6ImE4NjYxZTY2MDc3NTRlODlhODFlNTMyNDBkMzIzYjUxIiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.TnAmTpVafP_kWA6YmBGDCRpPa_6v9VRpAwYypmwSBA8`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setInformation(data);
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        };
        fetchActivties();
        fetchInformation();
    }, []); // Empty dependency array ensures this runs only on component mount, similar to page reload


    return (
        <Grid
            item
            display='flex'
            flexDirection='column'
            sx={{
                ml: { xs: 0, xl: 2 }
            }}
        >
            <Paper
                variant="outlined"
                sx={{
                    px: { xs: '2rem', sm: '4rem' },
                    py: '2rem',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Box
                    display='flex'
                    flexWrap='wrap'
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{
                        mb: 3,
                        flexDirection: 'row',
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight={900}
                        sx={{
                            fontSize: { xs: 16, sm: 22, lg: 26 }
                        }}
                    >
                        اطلاعات حساب کاربری
                    </Typography>

                    <Grid>
                        <Button
                            variant="contained"
                            sx={{
                                boxShadow: "none",
                                display: "block",
                                mx: "auto",
                                border: `3px solid ${Colors.orange}`,
                                color: "#000000",
                                bgcolor: "#FFFFFF",
                                borderRadius: "30px",
                                width: { xs: '106px', sm: "190px", lg: "220px" },
                                height: { xs: '33px', sm: "44px", lg: "46px" },
                                "&:hover": {
                                    boxShadow: "none",
                                    bgcolor: Colors.orange,
                                },
                            }}>
                            <Typography
                                variant="h6"
                                fontWeight={900}
                                fontSize={20}
                                sx={{
                                    fontSize: { xs: 10, sm: 18, lg: 20 }
                                }}
                            >
                                ویرایش اطلاعات
                            </Typography>

                        </Button>
                    </Grid>
                </Box>

                <Divider />

                <Box
                    px={2}
                    container
                    flexDirection='column'
                >
                    <Grid
                        display='flex'
                        flexWrap='wrap'
                    >
                        <Grid>
                            <Grid
                                item
                                mb={1}
                                mt={6}
                                mr={16}
                            >
                                <Typography
                                    variant="h6"
                                    fontWeight='bold'
                                    sx={{
                                        fontSize: { xs: 12, sm: 16, lg: 20 },
                                        color: '#44434C'
                                    }}
                                >
                                    نام و نام خانوادگی
                                </Typography>
                                <Typography
                                    variant="h6"
                                    fontWeight='bold'
                                    sx={{
                                        fontSize: { xs: 12, sm: 16, lg: 20 },
                                        color: '#44434C'
                                    }}
                                >
                                    {createFullName(information.first_name, information.last_name)}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                mb={1}
                                mt={6}
                                mr={16}
                            >
                                <Typography
                                    variant="h6"
                                    fontWeight='bold'
                                    sx={{
                                        fontSize: { xs: 12, sm: 16, lg: 20 },
                                        color: '#44434C'
                                    }}
                                >
                                    جنسیت
                                </Typography>
                                <Typography
                                    variant="h6"
                                    fontWeight='bold'
                                    sx={{
                                        fontSize: { xs: 12, sm: 16, lg: 20 },
                                        color: '#44434C'
                                    }}
                                >
                                    {information.gender}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid
                                item
                                mb={1}
                                mt={6}
                                mr={16}
                            >
                                <Typography
                                    variant="h6"
                                    fontWeight='bold'
                                    sx={{
                                        fontSize: { xs: 12, sm: 16, lg: 20 },
                                        color: '#44434C'
                                    }}
                                >
                                    آدرس ایمیل
                                </Typography>
                                <Typography
                                    variant="h6"
                                    fontWeight='bold'
                                    sx={{
                                        fontSize: { xs: 12, sm: 16, lg: 20 },
                                        color: '#44434C'
                                    }}
                                >
                                    {information.email}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                mb={1}
                                mt={6}
                                mr={16}
                            >
                                <Typography
                                    variant="h6"
                                    fontWeight='bold'
                                    sx={{
                                        fontSize: { xs: 12, sm: 16, lg: 20 },
                                        color: '#44434C'
                                    }}
                                >
                                    تاریخ تولد
                                </Typography>
                                <Typography
                                    variant="h6"
                                    fontWeight='bold'
                                    sx={{
                                        fontSize: { xs: 12, sm: 16, lg: 20 },
                                        color: '#44434C'
                                    }}
                                >
                                    {information.birth_day}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid
                                item
                                mb={1}
                                mt={6}
                                mr={16}
                            >
                                <Typography
                                    variant="h6"
                                    fontWeight='bold'
                                    sx={{
                                        fontSize: { xs: 12, sm: 16, lg: 20 },
                                        color: '#44434C'
                                    }}
                                >
                                    شماره تلفن
                                </Typography>
                                <Typography
                                    variant="h6"
                                    fontWeight='bold'
                                    sx={{
                                        fontSize: { xs: 12, sm: 16, lg: 20 },
                                        color: '#44434C'
                                    }}
                                >
                                    {convertToPersian(information.phoneNumber)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            <Paper
                variant="outlined"
                sx={{
                    px: { xs: '2rem', sm: '4rem' },
                    py: '2rem',
                    mt: 2,
                    borderRadius: '15px',
                    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='start'
                    mb={3}
                    sx={{
                        flexDirection: { xs: 'column', sm: 'row' },
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight={900}
                        sx={{
                            fontSize: { xs: 18, sm: 24, lg: 26 }
                        }}
                    >
                        فعالیت ها
                    </Typography>

                </Box>

                <Divider />

                <Box
                    px={4}
                    justifyContent='space-around'
                    alignItems='center'
                    display='flex'
                    flexDirection="row"
                    flexWrap='wrap'
                    container
                >
                    <Box
                        mt={6}
                        mx={1}
                        sx={{
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>

                        <Typography
                            variant="h5"
                            fontWeight='bold'
                            sx={{
                                color: '#213346',
                                fontSize: { xs: 15, sm: 18, md: 22 }
                            }}

                        >
                            تعداد سفارش ها
                        </Typography>
                        <Box
                            mt={3}
                            sx={{
                                width: { xs: '3rem', sm: '5rem', md: '7rem' },
                                height: { xs: '3rem', sm: '5rem', md: '7rem' },
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                borderRadius: '100%',
                                backgroundColor: Colors.orange,
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight='bold'
                                sx={{
                                    fontSize: { xs: 20, sm: 26, md: 40 },
                                    mt: { xs: 0, sm: 1 }
                                }}
                            >
                                {convertToPersian(activities.orders_count)}
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        mt={6}
                        mx={1}
                        sx={{
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>

                        <Typography
                            variant="h5"
                            fontWeight='bold'
                            sx={{
                                color: '#213346',
                                fontSize: { xs: 15, sm: 18, md: 22 }
                            }}

                        >
                            تعداد سفارش ها از دبی
                        </Typography>
                        <Box
                            mt={3}
                            sx={{
                                width: { xs: '3rem', sm: '5rem', md: '7rem' },
                                height: { xs: '3rem', sm: '5rem', md: '7rem' },
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                borderRadius: '100%',
                                backgroundColor: Colors.orange,
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight='bold'
                                sx={{
                                    fontSize: { xs: 20, sm: 26, md: 40 },
                                    mt: { xs: 0, sm: 1 }
                                }}
                            >
                                {convertToPersian(activities.foreign_returns_count)}
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        mt={6}
                        mx={1}
                        sx={{
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>

                        <Typography
                            variant="h5"
                            fontWeight='bold'
                            sx={{
                                color: '#213346',
                                fontSize: { xs: 15, sm: 18, md: 22 }
                            }}

                        >
                            تعداد مرجوعی ها
                        </Typography>
                        <Box
                            mt={3}
                            sx={{
                                width: { xs: '3rem', sm: '5rem', md: '7rem' },
                                height: { xs: '3rem', sm: '5rem', md: '7rem' },
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                borderRadius: '100%',
                                backgroundColor: Colors.orange,
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight='bold'
                                sx={{
                                    fontSize: { xs: 20, sm: 26, md: 40 },
                                    mt: { xs: 0, sm: 1 }
                                }}
                            >
                                {convertToPersian(activities.returns_count)}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
}


export default UserInfoPage;