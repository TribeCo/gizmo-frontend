import BlogSlider from "@/components/blog/BlogSlider";
import React from "react";

const banners = [
    "./test.png",
]

import {
    Grid,
} from "@mui/material";

import { Colors } from "@/utils";
import BlogCard from "@/components/BlogCard";
import LineSplitter from "@/components/LineSpliter";

const Blog = () => {
    return (
        <>
            <BlogSlider />
    
            {/* <Grid
                container
                justifyContent="space-around"
                sx={{
                    py: { xs: 7, md: 0 },
                    px: { xs: 5, md: 10 },
                }}
                gap={3}
                columns={3}>
                <Grid item>
                    <BlogCard background_color={Colors.blue} />
                </Grid>
                <Grid item>
                    <BlogCard background_color={Colors.blue} />
                </Grid>
                <Grid item>
                    <BlogCard background_color={Colors.blue} />
                </Grid>
            </Grid>

                <Grid>
                    <LineSplitter text="پربازدید ترین اخبار"/>
                </Grid> */}
        </>
    );
}

export default Blog;