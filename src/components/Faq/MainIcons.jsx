'use client'
import React from "react";
import { Grid, Box } from "@mui/material";
import PaperIcon from "./PaperIcon";
export default function MainIcons({ Icons, handleFaqChange }) {

    let boxList;
    if (Icons && Icons.length > 0) {
        boxList = Icons
            .sort((a, b) => a.id - b.id)
            .map(icon => (
                <PaperIcon key={icon.id} logo={icon.icon} text={icon.title} />
            ));
    } else {
        boxList = <p>No icons available</p>;
    }

    return(
        <>
        <Grid
            mb={30}
            px={3}
            sx={{
                gap: { xs: 3, sm: 4, md: 5 },
                display: { xs: 'none', lg: 'flex' },
                flexWrap: 'wrap',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid
                sx={{
                    gap: { xs: 3, sm: 4, md: 5 },
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box onClick={() => handleFaqChange(1)}>{boxList[0]}</Box>
                <Box onClick={() => handleFaqChange(2)}>{boxList[1]}</Box>
                <Box onClick={() => handleFaqChange(3)}>{boxList[2]}</Box>
                <Box onClick={() => handleFaqChange(4)}>{boxList[3]}</Box>
            </Grid>
            <Grid
                sx={{
                    gap: { xs: 3, sm: 4, md: 5 },
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box onClick={() => handleFaqChange(5)}>{boxList[4]}</Box>
                <Box onClick={() => handleFaqChange(6)}>{boxList[5]}</Box>
            </Grid>
        </Grid>
        <Grid
            mb={30}
            px={3}
            sx={{
                gap: { xs: 3, sm: 4, md: 5 },
                display: { xs: 'flex', lg: 'none' },
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box onClick={() => handleFaqChange(1)}>{boxList[0]}</Box>
            <Box onClick={() => handleFaqChange(2)}>{boxList[1]}</Box>
            <Box onClick={() => handleFaqChange(3)}>{boxList[2]}</Box>
            <Box onClick={() => handleFaqChange(4)}>{boxList[3]}</Box>
            <Box onClick={() => handleFaqChange(5)}>{boxList[4]}</Box>
            <Box onClick={() => handleFaqChange(6)}>{boxList[5]}</Box>
        </Grid>
    </>
    );
}