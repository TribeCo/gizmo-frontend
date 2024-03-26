import { Comment } from "@/components";
import CardProductSlider from "@/components/CardProductSlider";
import DescriptionComponent from "@/components/DescriptionComponent";
import LineSplitter from "@/components/LineSpliter";
import { products } from "@/utils/fakeProduct";
import { Box } from "@mui/material";
import ProductInfo from "@/components/ProductInfo";
import {
	addToFavorites,
	availableNotification,
	deleteFavorites,
	getComments,
	getSimilar,
	productData,
} from "@/services/ProductPage";
import RecentlySeen from "@/components/RecentlySeen";

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

const fakeProductInfo = [
	{ attribute: "برند", value: "برند نمونه" },
	{ attribute: "مدل", value: "ABC123" },
	{ attribute: "رنگ", value: "سیاه" },
	{ attribute: "وزن", value: "1.5 کیلوگرم" },
	{ attribute: "ابعاد", value: "10 × 5 × 3 اینچ" },
	{ attribute: "مواد", value: "پلاستیک" },
	{ attribute: "کشور سازنده", value: "چین" },
];

const Products = async () => {
	const productInfo = await productData({ pid: 1 });
	// const comments = await getComments({ pid: 1 });
	const similar = await getSimilar({ pid: 1 });
	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				overflow: "auto",
			}}
			mb={9}>
			<Box>
				<ProductInfo data={productInfo} />
				<DescriptionComponent
					introductionContent={content}
					CommentsSection={<Comment Comments={comments} />}
					productInfo={fakeProductInfo}
				/>
				<LineSplitter text={"محصولات مرتبط"} />
				<CardProductSlider
					btn={false}
					products={similar.data}
					swapTime_millisecond={3000}
				/>
				<RecentlySeen />
			</Box>
		</Box>
	);
};

export default Products;
