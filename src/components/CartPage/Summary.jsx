import React from "react";
import {
    Box,
    Grid,
    Typography,
    Button,
    TextField,
    SvgIcon,
    Divider
} from "@mui/material";
import { Colors } from "@/utils";
import { useSenderInfo } from "./DeliveryInfoContext";



const Summary = () => {

    const { handleSubmit } = useSenderInfo();

    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{
                px: 5,
                py: 3,
                borderRadius: "15px",
                background: "#F7F7F7",
            }}
        >
            <Grid
                display='flex'
                justifyContent='space-around'
                flexWrap='wrap'
                columnGap={10}  
                sx={{
                    flexDirection: { xs: 'column', lg: 'row' }
                }}
            >
                <Grid display='flex' alignItems='center'>
                    <Box
                        sx={{
                            borderRight: { xs: 'none', lg: "2px solid #B4B4B4" },
                            pr: { xs: 0, lg: 1 },
                            height: '100%',
                            width: {xs: '100%', lg: 'unset'}
                        }}
                    >
                        <Grid
                            display='flex'
                            columnGap={1}
                            sx={{
                                scale: {xs: '0.9', sm: '1'}
                            }}
                        >
                            <SvgIcon width="22" height="10" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H3C2.46957 20 1.96086 19.7893 1.58579 19.4142C1.21071 19.0391 1 18.5304 1 18V10C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9V6C0 5.46957 0.210714 4.96086 0.585786 4.58579C0.960859 4.21071 1.46957 4 2 4H5.17C5.06 3.69 5 3.35 5 3C5 2.20435 5.31607 1.44129 5.87868 0.87868C6.44129 0.316071 7.20435 0 8 0C9 0 9.88 0.5 10.43 1.24V1.23L11 2L11.57 1.23V1.24C12.12 0.5 13 0 14 0C14.7956 0 15.5587 0.316071 16.1213 0.87868C16.6839 1.44129 17 2.20435 17 3C17 3.35 16.94 3.69 16.83 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V9C22 9.26522 21.8946 9.51957 21.7071 9.70711C21.5196 9.89464 21.2652 10 21 10ZM3 18H10V10H3V18ZM19 18V10H12V18H19ZM8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3C7 3.26522 7.10536 3.51957 7.29289 3.70711C7.48043 3.89464 7.73478 4 8 4C8.26522 4 8.51957 3.89464 8.70711 3.70711C8.89464 3.51957 9 3.26522 9 3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2ZM14 2C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3C13 3.26522 13.1054 3.51957 13.2929 3.70711C13.4804 3.89464 13.7348 4 14 4C14.2652 4 14.5196 3.89464 14.7071 3.70711C14.8946 3.51957 15 3.26522 15 3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2ZM2 6V8H10V6H2ZM12 6V8H20V6H12Z" fill="#44434C" />
                            </SvgIcon>
                            <Typography 
                                fontWeight="bold" 
                                color="#44434C" 
                                variant="h6" 
                                align="left" 
                                mb={1}
                                sx={{
                                    fontSize: 19
                                }}
                            >
                                کد تخفیف
                            </Typography>
                        </Grid>

                        <Divider 
                            sx={{ 
                                    mb: 2,
                                    width: { xs: '100%', lg: '330px', border: '1px solid #B4B4B4'} 
                                }} 
                            />
                        <Grid
                            display='flex'
                            justifyContent='center'
                            sx={{
                                columnGap: {xs: 1, lg: 0},
                                alignItems: { xs: 'center', lg: 'start' },
                                flexDirection: { xs: 'column', sm: 'row', lg: 'column' },
                            }}
                        >
                            <Grid>
                                <TextField
                                    variant="standard"
                                    placeholder="کد تخفیف خود را وارد کنید:"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    sx={{
                                        marginTop: { xs: 2, lg: 4 },
                                        width: {xs: '250px', sm: '300px'},
                                        height: "45px",
                                        borderRadius: "10px",
                                        background: "#E9E9E9",
                                        '& .MuiInputBase-root': {
                                            marginTop: "7px",
                                            marginLeft: "10px",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid>
                                <Button
                                    variant="contained"
                                    color="warning"
                                    sx={{
                						bgcolor: Colors.orange,
                                        boxShadow: 'none',
                                        marginTop: { xs: 2, lg: 2 },
                                        width: {xs: '150px', sm: '110px', lg: "185px" },
                                        height: {xs: '35px', sm: "44px"},
                                        padding: "11px, 0px, 11px, 0px",
                                        borderRadius: "20px",
                                        opacity: "0.8px",
                                        "&:hover": {
                                            bgcolor: Colors.orange,
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        color="#213346"
                                        fontWeight={"bold"}
                                        align="center"
                                        id="login-button"
                                        sx={{
                                            fontSize: {xs: 18, sm: 20},
                                        }}
                                    >
                                        اعمال
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>

                    </Box>
                </Grid>
                <Grid>
                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        sx={{
                            alignItems: {xs: 'center', lg: 'flex-start'},
                            pt: {xs: 6, lg: 0},
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={{
                                pb: {xs: 2, sm: 4},
                                fontSize: {xs: 22, sm: 26}

                            }}
                        >
                            فاکتور خرید شما
                        </Typography>


                        <Divider 
                            sx={{ 
                                    mb: 2,
                                    display: {xs: 'flex', lg: 'none'},
                                    width: { xs: '100%', lg: '330px', border: '1px solid #B4B4B4'} 
                                }} 
                            />

                        <Box
                            display='flex'
                            flexDirection='row'
                            sx={{
                                columnGap: {xs: 4, sm: 10}
                            }}
                        >
                            <Grid
                                display='flex'
                                flexDirection='column'
                                justifyContent='space-between'
                                rowGap={2}
                            >
                                <Typography 
                                    variant="h6" 
                                    fontWeight="bold" 
                                    noWrap
                                    sx={{
                                        fontSize: {xs: 15, sm: 20},
                                    }}
                                >
                                    قیمت کل سفارش:
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    fontWeight="bold" 
                                    noWrap
                                    sx={{
                                        fontSize: {xs: 15, sm: 20},
                                    }}
                                >
                                    میزان تخفیف:‌
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    fontWeight="bold" 
                                    noWrap
                                    sx={{
                                        fontSize: {xs: 15, sm: 20},
                                    }}
                                >
                                    مبلغ قابل پرداخت:‌‌
                                </Typography>
                            </Grid>
                            <Grid
                                display='flex'
                                flexDirection='column'
                                justifyContent='space-between'
                                rowGap={2}
                            >
                                <Typography 
                                    variant="h6" 
                                    noWrap 
                                    sx={{
                                        fontSize: {xs: 15, sm: 20},
                                    }}
                                >
                                    ۳۹۸۰۰۰ تومان
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    noWrap 
                                    sx={{
                                        fontSize: {xs: 15, sm: 20},
                                    }}
                                >
                                    ۳۹۸۰۰۰ تومان
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    fontWeight='bold' 
                                    noWrap
                                    sx={{
                                        fontSize: {xs: 15, sm: 20},
                                    }}
                                >
                                    ۳۹۸۰۰۰ تومان
                                </Typography>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    display='flex'
                    pb={2}
                    pt={4}
                    sx={{
                        justifyContent: {xs: 'center', lg: 'flex-end'},
                        alignItems: {xs: 'center', lg: 'flex-end'},
                    }}
                >
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={handleSubmit}
                        sx={{
                            bgcolor: Colors.orange, 
                            boxShadow: 'none',
                            width: {xs: '200px', sm: '260px'},
                            borderRadius: "20px",
                            "&:hover": {
                                bgcolor: Colors.orange,
                            },
                        }}
                    >
                        <Typography
                            variant="h6"
                            color="#213346"
                            fontWeight={"bold"}
                            align="center"
                            id="login-button"
                            sx={{
                                fontSize: {xs: 16, sm: 20},
                            }}
                        >
                            ادامه فرایند خرید
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Summary;

