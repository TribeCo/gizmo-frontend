
import React from "react";
import { Box } from "@mui/material";
import LineSplitter from "@/components/LineSpliter";
import Rules from "@/components/Rules";
import { fetchRules } from "@/services/Landing";

export default async function rules() {

    const Laws = await fetchRules();

    return(
        <Box>
            <LineSplitter text="قوانین"/>
            <Rules data={Laws} onClose={null}/>
        </Box>
    );
}