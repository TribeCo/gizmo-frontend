"use client"

import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";


const ProductCard = (pid) => {

    const [count, setCount] = useState(1);

    const onIncrement = () => {
        setCount(count + 1);
    };

    const onDecrement = () => {
        setCount(count - 1);
    };

    return (
        <Box sx={{width: "1262px", height: "230px" }}>
            <Grid container spacing={1}>
                <Grid item md={6} sm={12}>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item md={4} sm={6} sx={{ position: "relative" }}>
                                <Box sx={{
                                    width: "193px",
                                    height: "193px",
                                    borderRadius: "10px",
                                    marginRight: "10px",
                                }}>
                                    <img style={{zIndex: 0, borderRadius: "10px" }} src="https://s3-alpha-sig.figma.com/img/4050/86fb/624274b23cab9a4bbe014728fb02db1a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=USsQe5PBUYVoJbd3oYbLvvxoEI4AC6PpRdnDlgmv9Kb2oxwL89BF78VQT9yGvoH2Ees0kTqpbJT~9W6PUgaVzOvuMVpiQhe41BjI1Onu627Y0ysoY1ppdAmghFUkqhUC~JgKlH6bwy2~mY3q81md6~FWZBjZbl7NGLEUx78F6mA6kpWcAHszp7tnjEic9h2kmbNLhqenCMKVDxbbkCeuNmZGIoLzDVoutefbak4T3~rfHzCw8XUKPGZHTYj9dCv-k6NLF8bFfxuqs~vmMnCt3X5d2VEHHr73e5wOy0guA7~iNEzQCGZ030pHVo8aMVZmQ6yTAuRE7R-RcJuGssr26Q__" />
                                </Box>
                            </Grid>
                            <Grid item md={8} sm={6}>
                                <Box sx={{ alignItems: "left"}}>
                                    <Grid container rowSpacing={4}>
                                        <Grid item sm={12} md={12}>
                                            <Box display={"inline-flex"}>
                                                <Typography variant="h4">
                                                    تراول ماگ {/* Product name */}
                                                </Typography>

                                                <Typography sx={{
                                                    bgcolor: "red",
                                                    height: "33px",
                                                    width: "74px",
                                                    borderRadius: "20px",
                                                    color: "white",
                                                    marginLeft: 1,
                                                }} variant="h6" fontWeight={"bold"} align="center">
                                                    ۲۰٪‌
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={12} md={12}>
                                            <Box display={"inline-flex"}>
                                                <Typography variant="h6" marginRight={1}>
                                                    رنگ:
                                                </Typography>
                                                <Typography sx={{ marginTop: "3%" }} variant="body1">
                                                    مشکی
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={12} md={12}>
                                            <Box display={"inline-flex"}>
                                                <Typography variant="body1" marginRight={1}>
                                                    کد محصول:
                                                </Typography>
                                                <Typography>
                                                    ۱۴۵۴۶۷۷
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        weight: "100%",
                    }}
                    >
                        <Typography variant="h6 " sx={{ color: "#B4B4B4"}} fontWeight="bold">
                            <span style={{ textDecoration: "line-through" }}>۳۹۸۰۰۰ تومان</span>
                        </Typography>
                        <Typography fontSize={25} variant="h6" fontWeight="bold">۳۹۸۰۰۰ تومان</Typography>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <Box display={"inline-flex"} sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        width: "100%",
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

                        <Typography variant="h6" fontSize={"bold"} sx={{margin: "25px"}}>{count}</Typography>
                        
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
                <Grid item md={2}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        width: "100%",
                    }}
                    >
                        <Typography variant="h6" fontWeight="bold" fontSize={25}>۳۹۸۰۰۰ تومان</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductCard;