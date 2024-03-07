"use client"

import React, { useState } from "react";
import { Box, Grid, Typography, Button, Divider } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { convert } from "@/utils";


const testImg = "https://s3-alpha-sig.figma.com/img/4050/86fb/624274b23cab9a4bbe014728fb02db1a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jsXE0Xy9Sz1y43uvI03e-VnS8W5Vh7zGJxi1UjEa5KrVPe4x8JBJ6Vsr3x6HvgR3HzVXp-WqqqWdljRHN1gP4G3w81R1qMfKP8uigsRmQ2ExFGSS9nhfbi1kOQUr9jlATIUHz3ctCrMvZ10mOHLSWsdNBW2LT~6Qz188~zr3P7byaI1k-4AQcG1JXit5mNWhj79YiVjdQ5hcjgfHlF-n3w0~xNdk9OESTpTGnIthzMxFVCebpwjlKTp6Zg9g5drNn-tyo442E3q8mCw~FP~rT8ywgC~qkL3Wzn8Eu6oECYwz8Re3Oo7rm2kMQcDkLMhrJLd5Xh499jRM5tHT7meEXA__";


const ProductCard = (pid) => {
    const [count, setCount] = useState(1);

    const onIncrement = () => {
        setCount(count + 1);
    };

    const onDecrement = () => {
        setCount(count - 1);
    };

    return (
        <Box
            sx={{
                scale: {xs: '1', sm: '1', md: '0.77', lg: '1'}
            }}
        >
            <Grid 
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                sx={{
                    columnGap:10
                }}
            >
                <Grid
                    display='flex'
                    flexDirection='row'
                    justifyContent='center'
                    alignItems='center'
                    columnGap={1}
                >
                    <Box 
                        sx={{
                            width: "193px",
                            height: "193px",
                            borderRadius: "10px",
                            overflow: 'hidden',
                        }}
                    >
                        <img style={{zIndex: 0, borderRadius: "10px" }} src={testImg} />
                    </Box>
                    <Grid
                        display='flex'
                        flexDirection='column'
                        alignItems='start'
                        sx={{
                            rowGap: 5
                        }}
                    >
                        <Grid 
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            columnGap={1}
                        >
                            <Typography 
                                variant="h5"
                                sx={{
                                    fontSize: 28
                                }}
                            >
                                تراول ماگ
                            </Typography>

                            <Box
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                                bgcolor='rgba(255, 0, 0, 1)'
                                borderRadius='30px'
                            >
                                <Typography 
                                    variant="h5"
                                    sx={{
                                        color: 'white',
                                        fontSize: 18,
                                        py: '3px',
                                        px: '10px',
                                    }}
                                >
                                    %{convert(20)}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid 
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            columnGap={1}
                        >
                            <Typography variant="h6">
                                رنگ:
                            </Typography>
                            <Typography variant="body1">
                                مشکی
                            </Typography>
                        </Grid>
                        <Grid
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            columnGap={1}
                        >
                            <Typography variant="body1">
                                کد محصول:
                            </Typography>
                            <Typography>
                                ۱۴۵۴۶۷۷
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='center'
                    sx={{
                        columnGap:14
                    }}
                >
                    <Grid>
                        <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        >
                            <Typography variant="h6 " sx={{ color: "#B4B4B4"}} fontWeight="bold">
                                <span style={{ textDecoration: "line-through" }}>۳۹۸۰۰۰ تومان</span>
                            </Typography>
                            <Typography fontSize={25} variant="h6" fontWeight="bold">۳۹۸۰۰۰ تومان</Typography>
                        </Box>
                    </Grid>
                    <Grid>
                        <Box display={"inline-flex"} sx={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        >
                            <Button 
                                sx={{ 
                                    borderRadius: "3px", 
                                    height: "41px", 
                                    minWidth: "0px !important", 
                                    width: "35px", 
                                    color: "#747678", 
                                    borderColor: "#747678" 
                                }} 
                                onClick={onIncrement} 
                                variant="outlined" 
                                startIcon={<Add sx={{ marginLeft: "30%" }} />}
                            />

                            <Typography 
                                variant="h6" 
                                fontSize={"bold"} 
                                sx={{margin: "25px"}}
                            >
                                {convert(count)}
                            </Typography>
                            
                            <Button 
                                sx={{ 
                                    borderRadius: "3px", 
                                    height: "41px", 
                                    minWidth: "0px !important", 
                                    width: "35px", 
                                    color: "#747678", 
                                    borderColor: "#747678" 
                                }} 
                                onClick={onDecrement} 
                                variant="outlined" 
                                endIcon={<Remove sx={{ marginLeft: "-30% "}} />} 
                            />
                            
                        </Box>
                    </Grid>
                    <Grid>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        >
                            <Typography variant="h6" fontWeight="bold" fontSize={25}>۳۹۸۰۰۰ تومان</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 2 }}/>
        </Box>
    );
};

export default ProductCard;