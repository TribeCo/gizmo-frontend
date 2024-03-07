import React from "react";

import {
    Box,
    Grid,
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

const testBanners = [
    "https://s3-alpha-sig.figma.com/img/7192/650c/37d3daf1be0b6aa00f40e5b3c0f87fa6?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NWM3Gu90pot53i3Wej8NhE6MtFmOA88IIADAWTZQfbR1acaOt7P57tmpJ0Y7dsfxGDnfiz0CxRdvclxB9IIm2hCMbzBiHvNbuodJeZqkD0W~hRw7lqnsPw6N9OXzREed9w0vOwBsjEYN2powzdiaH5sK8ILmhBH-xUPAE0rsMYgz9zo6auVEuaQgMk9knrDhiEWX6ybJlUsrZXaJDAxE424yRp-y6Xk9BHsIyzB1yQ~UsX6Iha-kEoW~BOPfJGECMQRZ5njidUY13TTLi7a4yYtqAFnRoOfEfvkSMHIRIP1jeJV917RAxcesx2xj7Sj6P2aZ6UP1RqwmM3wA4BZPOQ__",
];


const Blog = () => {
    return (
        <Grid>
            <Grid
                sx={{
                    rowGap: {xs: 1, sm: 2, md: 5},
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
                display='flex'
                sx={{
                    mt: {xs: 2, sm: 4, md: 8},
                    flexDirection: {xs: 'column', md: 'row'},

                }}
            >
                <Grid
                    sx={{
                        width: '100%',
                        bgcolor: 'white',
                        boxShadow: 'none',
                    }}
                >
                    <LineSplitter text="پربازدید ترین اخبار" margin={4}/>
                    <Grid
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        //TODO: list of blog cards
                    </Grid>
                </Grid>
                <Grid
                    sx={{
                        width: '100%',
                        bgcolor: 'white',
                        boxShadow: 'none',
                    }}
                >
                    <LineSplitter text='درباره بخش اخبار' margin={4}/>
                    <Grid
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Typography 
                            align="justify"
                            sx={{
                                width: {xs: '80%', md: '22rem', lg: '32rem'},
                            }} 
                        >
                            قسمت اخبار در سایت فروشگاهی گیزموشاپ یک بخش است که به منظور اطلاع‌رسانی و ارتباط با مشتریان و علاقه‌مندان به محصولات و خدمات آن سایت ایجاد شده است. در این قسمت، مطالب و اخبار مرتبط با دنیای فناوری، محصولات جدید، تکنولوژی‌ها، نکات و ترفندهای مربوط به استفاده از محصولات، مقالات تخصصی و مهم و دیگر موارد مرتبط قرار می‌گیرند.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Blog;