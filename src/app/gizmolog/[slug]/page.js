"use client";

import React from "react";
import { Grid, Typography, CardMedia, Avatar, Box } from "@mui/material";
import LineSplitter from "@/components/LineSpliter";
import SimilarNews from "@/components/blog/SimilarNews";
import { GetArticle, GetSimilarArticles } from "@/services/Blog";
import { convert } from "@/utils";
import Link from "next/link";
import { ProductCard } from "@/components";
import BlogComment from "@/components/blog/BlogComment";

export default async function BlogDetail({ params }) {
	const article = await GetArticle({ slug: params.slug });
	console.log(article);
	const similar_article = await GetSimilarArticles({ id: article.id });

	return (
		<Grid
			display="flex"
			sx={{
				mb: 12,
				justifyContent: "center",
				flexDirection: { xs: "column", lg: "row" },
			}}>
			<Grid
				display="flex"
				flexDirection="column"
				sx={{
					px: { xs: 4, lg: 2 },
				}}>
				<Typography
					mt={9}
					pb={4}
					sx={{
						fontSize: { xs: 20, sm: 26, md: 28 },
					}}
					fontWeight={800}>
					{article.title}
				</Typography>

				<Grid
					mb={1}
					width="100%"
					display="flex"
					justifyContent="space-between"
					sx={{
						flexDirection: { xs: "column", md: "row" },
						rowGap: 1,
					}}>
					<Grid
						display="flex"
						sx={{
							columnGap: { xs: 4, sm: 6 },
						}}>
						<Box
							display="flex"
							alignItems="center"
							sx={{
								columnGap: { xs: 0.8, sm: 1 },
							}}>
							<Avatar
								src=""
								sx={{
									width: { xs: 30, md: 45, lg: 50 },
									height: { xs: 30, md: 45, lg: 50 },
								}}
							/>

							<Typography
								sx={{
									fontSize: { xs: 12, sm: 18 },
								}}
								color={"rgba(116, 118, 120, 1)"}>
								{article.Author.full_name}
							</Typography>
						</Box>

						<Box
							display="flex"
							flexDirection="row"
							alignItems="center"
							sx={{
								columnGap: { xs: 0.8, sm: 1.5 },
							}}>
							<Typography
								color={"rgba(116, 118, 120, 1)"}
								sx={{
									fontSize: { xs: 11, sm: 14 },
								}}>
								{article.date}
							</Typography>
							<Typography
								sx={{
									fontSize: { xs: 11, sm: 14 },
								}}
								color={"rgba(116, 118, 120, 1)"}>
								|
							</Typography>
							<Box
								display="flex"
								alignItems="center"
								sx={{
									columnGap: { xs: 0.5, sm: 0.8 },
								}}>
								<Typography
									sx={{
										fontSize: { xs: 11, sm: 14 },
									}}
									color={"rgba(116, 118, 120, 1)"}>
									{convert(article.views)}
								</Typography>
								<svg
									width="12"
									height="9"
									viewBox="0 0 12 9"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M11.7999 4.00395C10.6822 1.82316 8.46944 0.347656 5.9358 0.347656C3.40216 0.347656 1.1888 1.82419 0.0717131 4.00416C0.024565 4.09742 0 4.20046 0 4.30497C0 4.40947 0.024565 4.51251 0.0717131 4.60578C1.18942 6.78657 3.40216 8.26207 5.9358 8.26207C8.46944 8.26207 10.6828 6.78554 11.7999 4.60557C11.847 4.51231 11.8716 4.40926 11.8716 4.30476C11.8716 4.20026 11.847 4.09721 11.7999 4.00395ZM5.9358 7.27277C5.3488 7.27277 4.77499 7.0987 4.28692 6.77259C3.79885 6.44647 3.41845 5.98294 3.19381 5.44063C2.96918 4.89832 2.9104 4.30157 3.02492 3.72585C3.13944 3.15014 3.4221 2.62131 3.83717 2.20624C4.25224 1.79117 4.78107 1.5085 5.35679 1.39399C5.93251 1.27947 6.52925 1.33824 7.07157 1.56288C7.61388 1.78751 8.0774 2.16791 8.40352 2.65598C8.72964 3.14405 8.9037 3.71787 8.9037 4.30486C8.90389 4.69467 8.82726 5.08069 8.67817 5.44086C8.52909 5.80102 8.31048 6.12828 8.03485 6.40391C7.75921 6.67954 7.43196 6.89815 7.07179 7.04724C6.71162 7.19632 6.3256 7.27296 5.9358 7.27277ZM5.9358 2.32626C5.75919 2.32873 5.58373 2.355 5.41415 2.40437C5.55393 2.59433 5.62101 2.8281 5.60322 3.06328C5.58543 3.29846 5.48395 3.51947 5.31718 3.68624C5.15041 3.85301 4.92939 3.95449 4.69421 3.97228C4.45904 3.99008 4.22527 3.923 4.03531 3.78321C3.92714 4.18173 3.94666 4.60414 4.09114 4.99098C4.23561 5.37783 4.49776 5.70962 4.84069 5.93968C5.18361 6.16973 5.59004 6.28645 6.00278 6.27341C6.41551 6.26037 6.81377 6.11823 7.14149 5.86699C7.4692 5.61576 7.70989 5.26807 7.82966 4.87288C7.94943 4.47769 7.94225 4.0549 7.80914 3.664C7.67604 3.2731 7.4237 2.93378 7.08764 2.69381C6.75159 2.45383 6.34874 2.32529 5.9358 2.32626Z"
										fill="#747678"
									/>
								</svg>
							</Box>
						</Box>
					</Grid>

					<Grid
						display="flex"
						justifyContent="flex-start"
						alignItems="center"
						columnGap={0.8}
						pl={1}>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.25 7.99805C1.25 4.8158 1.25 3.22505 2.2385 2.23655C3.227 1.24805 4.8185 1.24805 8 1.24805C11.1823 1.24805 12.773 1.24805 13.7615 2.23655C14.75 3.22505 14.75 4.81655 14.75 7.99805C14.75 11.1803 14.75 12.771 13.7615 13.7595C12.773 14.748 11.1815 14.748 8 14.748C4.81775 14.748 3.227 14.748 2.2385 13.7595C1.25 12.771 1.25 11.1795 1.25 7.99805Z"
								stroke="#747678"
								stroke-width="1.24899"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M8 3.49805V7.99805L11 9.49805"
								stroke="#747678"
								stroke-width="1.24899"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>

						<Typography
							sx={{
								fontSize: { xs: 12, sm: 14 },
							}}
							color={"rgba(116, 118, 120, 1)"}>
							زمان مورد نیاز برای مطالعه : {convert(article.read_time)} دقیقه
						</Typography>
					</Grid>
				</Grid>

				<Grid
					container
					direction="row"
					alignItems="stretch"
					sx={{
						width: { xs: "100%", lg: "740px" },
					}}>
					<CardMedia
						sx={{
							pb: { xs: 1, lg: 2 },
							borderRadius: { xs: "12px", md: "18px", lg: "22px" },
						}}
						component={"img"}
						image={article.cover}
					/>
					<Grid
						item
						dangerouslySetInnerHTML={{
							__html: article.content,
						}}
					/>
				</Grid>

				<Box
					mt={1}
					display="flex"
					alignItems="center"
					columnGap={1}>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<circle
							cx="7.5"
							cy="7.5"
							r="7.5"
							fill="#22668D"
						/>
					</svg>

					<Link href={article.reference_link}>
						<Typography
							sx={{
								fontSize: { xs: 14, lg: 16 },
							}}>
							منبع: {article.reference_name}
						</Typography>
					</Link>
				</Box>
				<Grid
					display="flex"
					justifyContent="center"
					alignItems="center">
					<BlogComment
						comments={article.comments}
						aid={article.id}
					/>
				</Grid>
			</Grid>
			<Grid
				display="flex"
				sx={{
					display: { xs: "unset", md: "flex", lg: "unset" },
					width: { xs: "100%", lg: "35rem" },
				}}>
				<Grid
					sx={{
						width: { xs: "unset", md: "100%", lg: "unset" },
					}}>
					<LineSplitter
						text={"اخبار های مرتبط"}
						font_lg={24}
						font_md={22}
						font_sm={24}
						font_xs={16}
					/>
					{similar_article.data && <SimilarNews data={similar_article.data} />}
				</Grid>

				<Grid
					sx={{
						width: { xs: "unset", md: "100%", lg: "unset" },
					}}>
					<LineSplitter
						text={"محصولات مرتبط"}
						font_lg={24}
						font_md={22}
						font_sm={24}
						font_xs={16}
					/>
					<Grid
						display="flex"
						flexDirection="column"
						alignItems="center"
						sx={{
							rowGap: { xs: 0.8, sm: 1, md: 1.5, lg: 2 },
						}}>
						{article.products.map((item, index) => (
							<ProductCard
								key={index}
								product={item}
							/>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
