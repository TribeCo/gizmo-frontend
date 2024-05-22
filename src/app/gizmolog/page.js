import React from "react";

import { Grid, Typography } from "@mui/material";

import LineSplitter from "@/components/LineSpliter";
import BlogSlider from "@/components/blog/BlogSlider";
import CardBlogSlider from "@/components/blog/CardBlogSlider";
import { BannerImages, GetNews, Popular } from "@/services/Blog";
import News from "@/components/blog/News";


export default async function Blog() {
	const bannerImages = await BannerImages();
	const popular = await Popular();
	const news = await GetNews();
	
	return (
		<Grid>
			<Grid
				sx={{
					rowGap: { xs: 1, sm: 2, md: 5 },
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<BlogSlider banners={bannerImages} />
				<CardBlogSlider
					blogs={news.data}
					swapTime_millisecond={3000}
				/>
			</Grid>

			<Grid
				display="flex"
				sx={{
					mb: 5,
					mt: { xs: 2, sm: 4, md: 8 },
					flexDirection: { xs: "column", md: "row" },
				}}>
				<Grid
					sx={{
						width: "100%",
						bgcolor: "white",
						boxShadow: "none",
					}}>
					<LineSplitter
						font_md={24}
						text="پربازدید ترین اخبار"
						margin={4}
					/>
					<Grid
						display="flex"
						alignItems="center"
						justifyContent="center"	
					>	
						<News data={popular.data}/>
					</Grid>
				</Grid>
				<Grid
					sx={{
						width: "100%",
						bgcolor: "white",
						boxShadow: "none",
					}}>
					<LineSplitter
						font_md={24}
						text="درباره بخش اخبار"
						margin={4}
					/>
					<Grid
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<Typography
							align="justify"
							sx={{
								width: { xs: "80%", md: "22rem", lg: "32rem" },
							}}>
							قسمت اخبار در سایت فروشگاهی گیزموشاپ یک بخش است که به منظور
							اطلاع‌رسانی و ارتباط با مشتریان و علاقه‌مندان به محصولات و خدمات
							آن سایت ایجاد شده است. در این قسمت، مطالب و اخبار مرتبط با دنیای
							فناوری، محصولات جدید، تکنولوژی‌ها، نکات و ترفندهای مربوط به
							استفاده از محصولات، مقالات تخصصی و مهم و دیگر موارد مرتبط قرار
							می‌گیرند.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
