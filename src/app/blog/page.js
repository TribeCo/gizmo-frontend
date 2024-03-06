import React from "react";

import {
    Box,
    Card,
    CardActionArea,
    CardMedia,
    Container,
    Grid,
    Paper,
    Typography,
} from "@mui/material";

import BlogCard from "@/components/BlogCard";
import LineSplitter from "@/components/LineSpliter";
import BlogSlider from "@/components/blog/BlogSlider";
import CardBlogSlider from "@/components/blog/CardBlogSlider";


const cartSliderSample = [
    <BlogCard background_color="#F8F8F8" font_color='black' />,
    <BlogCard background_color="#F8F8F8" font_color='black' />,
    <BlogCard background_color="#F8F8F8" font_color='black' />,
]

import x from '@/components/blog/test.jpg';
import { Colors } from "@/utils";
const testBanners = [
    "https://s3-alpha-sig.figma.com/img/7192/650c/37d3daf1be0b6aa00f40e5b3c0f87fa6?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NWM3Gu90pot53i3Wej8NhE6MtFmOA88IIADAWTZQfbR1acaOt7P57tmpJ0Y7dsfxGDnfiz0CxRdvclxB9IIm2hCMbzBiHvNbuodJeZqkD0W~hRw7lqnsPw6N9OXzREed9w0vOwBsjEYN2powzdiaH5sK8ILmhBH-xUPAE0rsMYgz9zo6auVEuaQgMk9knrDhiEWX6ybJlUsrZXaJDAxE424yRp-y6Xk9BHsIyzB1yQ~UsX6Iha-kEoW~BOPfJGECMQRZ5njidUY13TTLi7a4yYtqAFnRoOfEfvkSMHIRIP1jeJV917RAxcesx2xj7Sj6P2aZ6UP1RqwmM3wA4BZPOQ__",
];


const Blog = () => {
    return (
        <Grid>
            <Grid 
                rowGap={5}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <BlogSlider banners={testBanners} />
                <CardBlogSlider
                    blogs={cartSliderSample}
                    swapTime_millisecond={3000}
                />
            </Grid>
            <Grid
                sx={{
                    display:'flex',
                }}
                my={5}
                flexDirection='row'
                justifyContent='space-around'
            >
                <Grid
                    sx={{
                        width: '900px',
                        bgcolor: 'white',
                        boxShadow: 'none',
                    }}
                >
                    <LineSplitter text='متن تست'/>
                </Grid>
                <Grid
                    sx={{
                        width: '900px',
                        bgcolor: 'white',
                        boxShadow: 'none',
                    }}
                >
                    <LineSplitter text='متن تست'/>
                </Grid>
            </Grid>
        </Grid>
    );
}

const Splitter2 = () => {
    return (
        <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <Box
                ml={4}
                width="290px"
                height={5}
                borderBottom={5}
                borderColor={Colors.blue}
                flexWrap="nowrap"
            />
            <Typography
                dir="center"
                fontWeight="900"
                variant="h4"
                sx={{
                    fontSize: { xs: 18, sm: 26, md: 32 },
                    px: 3,
                    whiteSpace: "nowrap",
                }}>
                پربازدید ترین اخبار
            </Typography>
            <Box
                mr={4}
                width="290px"
                height={5}
                borderBottom={5}
                borderColor={Colors.blue}
            />
        </Grid>
    )
}

export default Blog;