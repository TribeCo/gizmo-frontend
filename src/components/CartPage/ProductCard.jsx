"use client"

import React, { useState } from "react";
import { Box, Grid, Typography, Button, Divider, Paper, CardMedia } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { convert } from "@/utils";


const testImg = "https://s3-alpha-sig.figma.com/img/4050/86fb/624274b23cab9a4bbe014728fb02db1a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jsXE0Xy9Sz1y43uvI03e-VnS8W5Vh7zGJxi1UjEa5KrVPe4x8JBJ6Vsr3x6HvgR3HzVXp-WqqqWdljRHN1gP4G3w81R1qMfKP8uigsRmQ2ExFGSS9nhfbi1kOQUr9jlATIUHz3ctCrMvZ10mOHLSWsdNBW2LT~6Qz188~zr3P7byaI1k-4AQcG1JXit5mNWhj79YiVjdQ5hcjgfHlF-n3w0~xNdk9OESTpTGnIthzMxFVCebpwjlKTp6Zg9g5drNn-tyo442E3q8mCw~FP~rT8ywgC~qkL3Wzn8Eu6oECYwz8Re3Oo7rm2kMQcDkLMhrJLd5Xh499jRM5tHT7meEXA__";


const ProductCard = (pid) => {
    const [count, setCount] = useState(1);

    const onIncrement = () => {
        setCount(count + 1);
    };

    const onDecrement = () => {
        if (count != 0) {
            setCount(count - 1);
        }
    };

    return (
        <Grid>
            <Grid 
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                sx={{
                    columnGap: {xs: '5px', sm: 4, md: 8, lg: 10},
                }}
            >
                <Grid
                    display='flex'
                    flexDirection='row'
                    justifyContent='center'
                    alignItems='center'
                    columnGap={1}
                >
                    <CardMedia 
                        image={testImg}
                        sx={{
                            width: {xs: '55px', sm: '90px', md: '150px', lg: "193px"},
                            height: {xs: '55px', sm: '90px', md: '150px', lg: "193px"},
                            overflow: 'hidden',
                            borderRadius: "10px",
                        }}
                    />
                    <Grid
                        display='flex'
                        flexDirection='column'
                        alignItems='start'
                        sx={{
                            rowGap: {xs: '5px', sm: 1, md: 3, lg: 5},
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
                                    fontSize: {xs: 10, sm: 16, md: 24, lg: 28},
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
                                        fontSize: {xs: 7, sm: 10, md: 16, lg: 18},
                                        py: {xs: '1px', sm: '2px', md: '3px', lg: '4px'},
                                        px: {xs: '5px', sm: '8px', md: '12px', lg: '15px'},
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
                            <Typography 
                                variant="h6" 
                                sx={{
                                    fontSize: {xs: 9, sm: 15, md: 20, lg: 22},
                                }}    
                            >
                                رنگ:
                            </Typography>
                            <Typography 
                                variant="body1"
                                sx={{
                                    fontSize: {xs: 8, sm: 14, md: 16, lg: 18},
                                }} 
                            >
                                مشکی
                            </Typography>
                        </Grid>
                        <Grid
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            columnGap={1}
                        >
                            <Typography 
                                variant="body1"
                                sx={{
                                    fontSize: {xs: 9, sm: 14, md: 16, lg: 18},
                                }}    
                            >
                                کد محصول:
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: {xs: 8, sm: 13, md: 15, lg: 17},
                                }} 
                            >
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
                        columnGap: {xs: 0, sm: 3, md: 7, lg: 14},
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
                            <Typography 
                                variant="h6 " 
                                fontWeight="bold"
                                sx={{ 
                                    fontSize: {xs: 7, sm: 12, md: 18, lg: 20},
                                    color: "#B4B4B4"
                                }} 
                            >
                                <span style={{ textDecoration: "line-through" }}>۳۹۸۰۰۰ تومان</span>
                            </Typography>
                            <Typography 
                                variant="h6" 
                                fontWeight="bold"
                                sx={{ 
                                    fontSize: {xs: 8, sm: 14, md: 20, lg: 24},
                                }}
                            >
                                ۳۹۸۰۰۰ تومان
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid>
                        <Box display={"inline-flex"} sx={{
                            alignItems: "center",
                            justifyContent: "center",
                            scale: {xs: '0.4', sm: '0.8', lg: '1'},
                        }}
                        >
                            <Button 
                                sx={{ 
                                    borderRadius: "3px", 
                                    height: "41px", 
                                    width: "35px",
                                    minWidth: "0px !important", 
                                    color: "#747678", 
                                    borderColor: "#747678" 
                                }} 
                                onClick={onIncrement}
                                variant="outlined" 
                                startIcon={<Add sx={{ marginLeft: "30%",}} />}
                            />                        

                            <Typography 
                                variant="h6" 
                                fontSize={"bold"} 
                                sx={{
                                    margin: {xs: '5px', sm: '8px', md: '18px', lg: "25px"},
                                }}
                            >
                                {convert(count)}
                            </Typography>
                            
                            <Button 
                                sx={{ 
                                    borderRadius: "3px", 
                                    height: "41px", 
                                    width: "35px",
                                    minWidth: "0px !important", 
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
                            <Typography 
                                variant="h6" 
                                fontWeight="bold"
                                sx={{ 
                                    fontSize: {xs: 8, sm: 14, md: 20, lg: 24},
                                }}
                            >۳۹۸۰۰۰ تومان</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 2 }}/>
        </Grid>
    );
};

export default ProductCard;