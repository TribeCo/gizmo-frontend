
import React from "react";
import { Box, Grid, Typography } from "@mui/material";


const CartHeader = () => {
    return (
        <Box
            sx={{
                background: "#EEEEEE80",
                borderRadius: "15px",
            }}
        >
            <Grid
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{
                    py: {xs: 1, sm: 2, md: 3},
                    px: {xs: 1, sm: 2, md: 4, lg: 6},
                    columnGap:{xs: 9, sm: 20, md: 36, lg: 47}
                }}
            >
                <Grid
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='center'
                    columnGap={1}
                >
                    <Box
                        sx={{
                            scale: {xs: '0.8', sm: '1'},
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 13.875H10.125V15.75H4.5V13.875ZM4.5 17.625H13.875V19.5H4.5V17.625Z" fill="#213346" />
                            <path d="M21.375 0.75H2.625C2.12795 0.750744 1.65147 0.948527 1.3 1.3C0.948527 1.65147 0.750744 2.12795 0.75 2.625V21.375C0.750744 21.8721 0.948527 22.3485 1.3 22.7C1.65147 23.0515 2.12795 23.2493 2.625 23.25H21.375C21.8721 23.2493 22.3485 23.0515 22.7 22.7C23.0515 22.3485 23.2493 21.8721 23.25 21.375V2.625C23.2493 2.12795 23.0515 1.65147 22.7 1.3C22.3485 0.948527 21.8721 0.750744 21.375 0.75ZM13.875 2.625V6.375H10.125V2.625H13.875ZM2.625 21.375V2.625H8.25V8.25H15.75V2.625H21.375L21.3759 21.375H2.625Z" fill="#213346" />
                        </svg>

                    </Box>
                    <Box>
                        <Typography
                            noWrap
                            sx={{
                                fontSize: {xs: 11, sm: 18, md: 20, lg: 24}
                            }}
                            variant="h5"
                            fontWeight={"bold"}
                        >
                            محصول
                        </Typography>
                    </Box>
                </Grid>

                <Grid
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='center'
                    sx={{
                        columnGap:{xs: 4, sm: 6, md: 12, lg: 20}
                    }}
                >
                    <Grid >
                        <Box

                        >
                            <Typography
                                noWrap
                                sx={{
                                    fontSize: {xs: 11, sm: 18, md: 20, lg: 24}
                                }}
                                variant="h5"
                                fontWeight={"bold"}
                            >
                                قیمت واحد
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid >
                        <Box

                        >
                            <Typography
                                noWrap
                                sx={{
                                    fontSize: {xs: 11, sm: 18, md: 20, lg: 24}
                                }}
                                variant="h5"
                                fontWeight={"bold"}
                            >
                                تعداد
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid >
                        <Box

                        >
                            <Typography
                                noWrap
                                sx={{
                                    fontSize: {xs: 11, sm: 18, md: 20, lg: 24}
                                }}
                                variant="h5"
                                fontWeight={"bold"}
                            >
                                قیمت نهایی
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CartHeader;