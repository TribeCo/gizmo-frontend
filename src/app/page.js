import CardProductSlider from "@/components/CardProductSlider";
import CompanySlider from "@/components/CompanySlider";
import LineSplitter from "@/components/LineSpliter";
import { products } from "@/utils/fakeProduct";
import DescriptionComponent from "@/components/DescriptionComponent";

// this is a simple test to show how the components work:
// example data
import anker from "@/components/comanyIcons/anker.png";
import blulory from "@/components/comanyIcons/blulory.png";
import mc from "@/components/comanyIcons/mc.png";
import noon from "@/components/comanyIcons/noon.png";
import wacaco from "@/components/comanyIcons/wacaco.png";
import greenLions from "@/components/comanyIcons/greenLions.png";
import amazon from "@/components/comanyIcons/amazon.png";
import { Box, Button, Grid, Typography } from "@mui/material";
import BlogCard from "@/components/BlogCard";
import { Colors } from "@/utils";
import { Comment } from "@/components";

const logos = [
	[anker, "https://www.anker.com/"],
	[blulory, "https://www.blulory.com/"],
	[mc, "https://mycandytech.com/"],
	[noon, "https://www.noon.com/"],
	[wacaco, "https://www.wacaco.com/"],
	[greenLions, "https://www.greenlion.net/"],
	[amazon, "https://www.amazon.com/"],
];

// test content for introduction section
const content =
	"اسپرسو ساز واکاکو مدل Minipresso مح می باشد. با به همراه داشتن اسپرسو ساز قابل حمل Minipresso می توانید یک فنجان اسپرسو خوش طعم را در هنگام کوهنوردی، کمپینگ، سفر و حتی محیط کار نوش جان کنید.این مینی پرسو دارای یک پیمانه، یک عدد فنجان و محفظه ای مجزا برای پودر قهوه با حجم 8 گرم و مخزنی به ظرفیت 80 میلی لیتر برای آب جوش می باشد که با ساختاری کوچک و سبک، تمامی امکانات و کارایی یک دستگاه بزرگ و حرفه ای اسپرسو را دارا می باشد.";

const comments = [
	{
		id: 1,
		user: {
			name: "رضا بوذرجمهری",
			image:
				"https://www.mountsinai.on.ca/wellbeing/our-team/team-images/person-placeholder/image",
		},
		satisfaction: 1,
		text: "متن تستی",
		date: "3 روز قبل",
	},
];

export default function Home() {
	return (
		<main>
			<LineSplitter text={"تخفیف های امروز"} />
			<CardProductSlider
				products={products}
				itemsPerPage={4}
				swapTime_millisecond={3000}
			/>
			<LineSplitter text={"محصولات جدید گیزمو"} />
			<CardProductSlider
				products={products}
				itemsPerPage={4}
				swapTime_millisecond={3000}
			/>
			<LineSplitter text={"دسته بندی ها"} />
			// TODO دسته بندی ها
			<LineSplitter text={"محصولات مشاهده شده"} />
			<CardProductSlider
				products={products}
				itemsPerPage={4}
				swapTime_millisecond={3000}
			/>
			<LineSplitter text={"برترین برند های گیزمو"} />
			<CompanySlider
				logos={logos}
				itemsPerPage={5}
				swapTime_millisecond={3000}
			/>
			<LineSplitter text={"گیزمو لاگ"} />
			<Box
				display="flex"
				justifyContent="space-around"
				px={10}>
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</Box>
			<Button
				variant="contained"
				sx={{
					display: "block",
					my: 10,
					mx: "auto",
					border: `3px solid ${Colors.orange}`,
					color: "#000000",
					bgcolor: "#FFFFFF",
					borderRadius: "30px",
					width: "300px",
					height: "60px",
					"&:hover": {
						bgcolor: Colors.orange,
					},
				}}>
				<Typography
					variant="h5"
					sx={{
						fontWeight: "700",
						fontSize: "20px",
					}}>
					{"مشاهده محصولات بیشتر"}
				</Typography>
			</Button>
			<LineSplitter text={"تست"} />
			<DescriptionComponent
				introductionContent={content}
				CommentsSection={<Comment Comments={comments} />}
			/>
		</main>
	);
}
