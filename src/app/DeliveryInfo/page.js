'use client'
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Summary from "@/components/CartPage/Summary";
import ProgressBar from "@/components/CartPage/ProgressBar";
import DeliveryInfoMain from "../../components/CartPage/DeliveryInfoMain";

export default function DeliveryInfo() {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: "center",
            rowGap: { xs: 2, sm: 5, md: 8 },
            pb: { xs: 4, sm: 12 },
        }}>
            <Box
                sx={{
                    pt: { xs: 0, sm: 5 },
                    display: "flex",
                    flexWrap: 'nowrap',
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 6,
                    marginBottom: 2,
                }}
            >
                <ProgressBar activeStep={1} />
            </Box>
            <DeliveryInfoMain />
            <Summary />
        </Box>
    );
};