"use client";

import LineSplitter from "@/components/LineSpliter";
import {
	Alert,
	AlertTitle,
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Container,
	Dialog,
	FormControl,
	TextField,
	Typography,
} from "@mui/material";

const description =
	"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.";

import anker from "@/components/comanyIcons/anker.png";
import blulory from "@/components/comanyIcons/blulory.png";
import mc from "@/components/comanyIcons/mc.png";
import noon from "@/components/comanyIcons/noon.png";
import wacaco from "@/components/comanyIcons/wacaco.png";
import greenLions from "@/components/comanyIcons/greenLions.png";
import amazon from "@/components/comanyIcons/amazon.png";
import CompanySlider from "@/components/CompanySlider";
import { useState } from "react";
import {
	discountProducts,
	newProducts,
	recentlySeenProduct,
} from "@/services/Landing";
import { createOrder, createProduct } from "@/services/Dubai";
import { TokenSharp } from "@mui/icons-material";
import { useAuth } from "@/context/AuthContext";

const image =
	"https://delightgifts.co.ke/wp-content/uploads/2023/04/2023-04-20-23-21-09-906.jpg";
const DubaiPage = () => {
	const [showDialog, setShowDialog] = useState(false);
	const [product, setProduct] = useState({
		id: 0,
		name: "",
		discounted: false,
		discount: 0,
		image_link: "",
		product_url: "",
		site: "",
		price: "",
	});
	const handleClose = () => {
		setShowDialog(false);
	};

	const [url, setUrl] = useState("");

	const [showProduct, setShowProduct] = useState(false);

	const sendUrlBtn = async () => {
		const response = await createProduct(url);
		console.log(response.data);
		setProduct(response.data);
		setShowProduct(true);
	};

	const test = async () => {
		try {
			console.log(await discountProducts());
		} catch (error) {}
	};
	const { tokens } = useAuth();
	return (
		<>
			<Box>
				<LineSplitter text={"خرید از دبی"} />
				<Container maxWidth="xl">
					<Box
						sx={{
							mt: 5,
							px: 2,
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-around",
							alignItems: "center",
						}}>
						<TextField
							dir="ltr"
							onChange={(e) => setUrl(e.target.value)}
							name="url"
							id="url"
							type="url"
							value={url}
							label={" ... لینک محصول مورد نظر را بنداز اینجا"}
							fullWidth
						/>
						<Button
							onClick={sendUrlBtn}
							variant="contained"
							sx={{
								mt: 3,
								gap: 1.5,
								px: 8,
								borderRadius: 3,
							}}>
							<svg
								width="21"
								height="21"
								viewBox="0 0 21 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M20.7129 18.1576L16.6236 14.0684C16.4391 13.8838 16.1889 13.7813 15.9264 13.7813H15.2578C16.3898 12.3334 17.0625 10.5123 17.0625 8.53125C17.0625 3.81855 13.2439 0 8.53125 0C3.81855 0 0 3.81855 0 8.53125C0 13.2439 3.81855 17.0625 8.53125 17.0625C10.5123 17.0625 12.3334 16.3898 13.7812 15.2578V15.9264C13.7812 16.1889 13.8838 16.4391 14.0684 16.6236L18.1576 20.7129C18.5432 21.0984 19.1666 21.0984 19.548 20.7129L20.7088 19.5522C21.0943 19.1666 21.0943 18.5432 20.7129 18.1576ZM8.53125 13.7813C5.63144 13.7813 3.28125 11.4352 3.28125 8.53125C3.28125 5.63145 5.62734 3.28125 8.53125 3.28125C11.4311 3.28125 13.7812 5.62734 13.7812 8.53125C13.7812 11.4311 11.4352 13.7813 8.53125 13.7813Z"
									fill="white"
								/>
							</svg>
							<Typography
								variant="h6"
								fontWeight={900}>
								{"جستجو کن"}
							</Typography>
						</Button>
					</Box>
					{showProduct ? (
						<Box
							sx={{
								mt: 10,
								direction: "rtl",
								display: "flex",
								flexDirection: { xs: "column", md: "row" },
								justifyContent: { xs: "center", md: "start" },
							}}>
							<CardMedia
								src={
									"https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/S200769426_1?1713516045?g=0"
								}
								sx={{
									height: 400,
									width: 400,
									borderRadius: 10,
									ml: { xs: 0, md: 7 },
									mb: 3,
								}}
							/>
							<CardContent>
								<Typography
									variant="h4"
									fontWeight={900}>
									{product.name}
								</Typography>
								<Box
									mt={4}
									display="flex"
									gap={2}>
									<Typography
										variant="h6"
										color="#22668D"
										fontWeight={900}>
										{"Link: "}
									</Typography>
									<Typography
										sx={{
											whiteSpace: "nowrap",
											overflow: "hidden",
											textOverflow: "ellipsis",
										}}
										variant="h6"
										color="#70CEE5">
										{product.product_url}
									</Typography>
								</Box>
								<Box
									mt={2}
									display="flex"
									gap={2}>
									<Typography
										variant="h6"
										color="#22668D"
										fontWeight={900}>
										{"Call site: "}
									</Typography>
									<Typography variant="h6">{product.site}</Typography>
								</Box>
								<Box
									mt={2}
									display="flex"
									gap={2}>
									<Typography
										variant="h6"
										color="#22668D"
										fontWeight={900}>
										{"Discount: "}
									</Typography>
									<Typography variant="h6">{product.discount}</Typography>
								</Box>
								<Box
									mt={2}
									display="flex"
									gap={10}>
									<Typography
										variant="h6"
										color="#22668D"
										fontWeight={900}>
										{"Price: "}
									</Typography>
									<Typography
										variant="h6"
										fontWeight={900}>
										{`${product.price} AED`}
									</Typography>
								</Box>
								<Box
									display="flex"
									sx={{
										justifyContent: { xs: "center", md: "start" },
									}}>
									<Button
										onClick={async () => {
											console.log(product.id);
											const response = await createOrder({
												pid: product.id,
												tokens: tokens,
											});
											console.log(response);
											setShowDialog(true);
										}}
										variant="contained"
										color="secondary"
										sx={{
											mt: 4,
											px: 3,
											borderRadius: 4,
										}}>
										<Typography
											color="#252B48"
											variant="h6"
											fontWeight={900}>
											{"تایید محصول و استعلام قیمت"}
										</Typography>
									</Button>
								</Box>
							</CardContent>
						</Box>
					) : (
						""
					)}
				</Container>
				<LineSplitter text={"توضیحات"} />
				<Container maxWidth="xl">
					<Typography
						mt={3}
						align="justify"
						px={2}>
						{description}
					</Typography>
				</Container>
				<LineSplitter text={"سایت های قابل سفارش"} />
				{/* <CompanySlider
					logos={logos}
					itemsPerPage={5}
					swapTime_millisecond={3000}
				/> */}
			</Box>
			<Dialog
				open={showDialog}
				onClose={handleClose}
				sx={{
					"& .MuiDialog-paper": { borderRadius: 10, bgcolor: "#EDF7ED" },
				}}>
				<Alert
					sx={{
						m: 3,
					}}>
					<Typography
						variant="h6"
						fontWeight={900}>
						{"درخواست استعلام قیمت شما با موفقیت ثبت شد."}
					</Typography>
					<Typography mt={3}>
						{
							"تا ساعاتی دیگر قیمت ریالی برای شما پیامک و همچنین در پنل کاربری ثبت خواهد شد."
						}
					</Typography>
					<Typography mt={3}>
						{"برای ثبت سفارش به پنل کاربری مراجعه کنید."}
					</Typography>
					<Box
						display="flex"
						justifyContent="end">
						<Button
							onClick={handleClose}
							sx={{
								mt: 2,
								px: 3,
								borderRadius: 4,
							}}
							variant="contained"
							color="success">
							<Typography>{"متوجه شدم"}</Typography>
						</Button>
					</Box>
				</Alert>
			</Dialog>
		</>
	);
};

export default DubaiPage;
