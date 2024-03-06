"use client"

import React from "react";
import ProductCard from "@/components/CartPage/ProductCard";
import Summary from "@/components/CartPage/Summary";
import CartHeader from "@/components/CartPage/CartHeader";
import ProgressBar from "@/components/CartPage/ProgressBar";

import { Box } from "@mui/material";

const TempPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: "center",
        }}>
            {/* <Box
                sx={{
                    marginTop: 6,
                    marginBottom: 2,
                }}
            >
                <ProgressBar activeStep={0} />
            </Box>

            <Box
                sx={{
                    margin: 4,
                }}
            >
                <CartHeader />
            </Box>
            
            <Box>            
                <ProductCard />

                <hr style={{ border: "1px solid #EEEEEE", width: "83%", marginRight: "auto", marginBottom: "3%", marginTop: "-2%" }} />

                <ProductCard />
                
                <hr style={{ border: "1px solid #EEEEEE", width: "83%", marginRight: "auto", marginBottom: "3%", marginTop: "-2%" }} />

            </Box>             */}
            <Box
                sx={{
                    margin: 10,
                }}
            >
                <Summary />
            </Box>
        </Box>
    );
};

export default TempPage;