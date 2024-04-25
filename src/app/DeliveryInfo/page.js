import { Box } from "@mui/material";
import React from "react";
import Summary from "@/components/CartPage/Summary";
import ProgressBar from "@/components/CartPage/ProgressBar";
import DeliveryInfoMain from "../../components/CartPage/DeliveryInfoMain";
import { fetchAddresses } from "@/services/DashBoard";

export default async function DeliveryInfo() {

    const Addresses = await fetchAddresses();

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
            <DeliveryInfoMain addresses={Addresses}/>
            <Summary />
        </Box>
    );
};