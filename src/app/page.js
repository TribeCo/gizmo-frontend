import CardProductSlider from "@/components/CardProductSlider";
import CompanySlider from "@/components/CompanySlider";
import LineSplitter from "@/components/LineSpliter";
import { products } from "@/utils/fakeProduct";
import { Box, Button, Typography } from "@mui/material";
import BlogCard from "@/components/BlogCard";
import { Colors } from "@/utils";
import { Banner, Sections } from "@/components/landing";

// this is a simple test to show how the components work:
// example data
import anker from "@/components/comanyIcons/anker.png";
import blulory from "@/components/comanyIcons/blulory.png";
import mc from "@/components/comanyIcons/mc.png";
import noon from "@/components/comanyIcons/noon.png";
import wacaco from "@/components/comanyIcons/wacaco.png";
import greenLions from "@/components/comanyIcons/greenLions.png";
import amazon from "@/components/comanyIcons/amazon.png";
import DashBoard from "@/components/DashBoardAddress/DashBoardAddress";

const logos = [
	[anker, "https://www.anker.com/"],
	[blulory, "https://www.blulory.com/"],
	[mc, "https://mycandytech.com/"],
	[noon, "https://www.noon.com/"],
	[wacaco, "https://www.wacaco.com/"],
	[greenLions, "https://www.greenlion.net/"],
	[amazon, "https://www.amazon.com/"],
];

export default function Home() {

		let product = {

		productName: 'اسپرسوساز نون مدل CM540 3D-GS',
		pics: [],
		discount: 50,
		percentage: 72,
		commentsCount: 800,
		starCount: 3,
		categories: ['فانتزی', 'اسباب', 'بازی'],
		brand: [],
		bullets: ["بدرد نخور بودن محصول","آشغال بودن محصول","محصول اصلا وجود خارجی ندارد و صرفا برای تیغ زدن شما طراحی شده است."],
		colors: [[1, 'brown', 'قهوه ای', true], [2, 'white', 'سفید', true], [2, 'red', 'قرمز', true]],
		price: 100000,
		fav: true

	}

	let productsHeaderSlider = {
		products: [
        {id: 1, imageAdd: '', title: 'اسپرسو ساز Wacaco Nanopresso',  description: 'اسپرسو ساز واکاکو مدل Minipresso محصولی بسیار کاربردی و گزینه ای ایده آل برای علاقمندان به نوشیدن قهوه ای حرفه ای در شرایط و مکان های مختلف می باشد. با به همراه داشتن اسپرسو ساز قابل حمل Minipresso می توانید یک فنجان اسپرسو خوش طعم را در هنگام کوهنوردی، کمپینگ، سفر و حتی محیط کار نوش جان کنید.این مینی پرسو دارای یک پیمانه، یک عدد فنجان و محفظه ای مجزا برای پودر قهوه با حجم 8 گرم و مخزنی به ظرفیت 80 میلی لیتر برای آب جوش می باشد که با ساختاری کوچک و سبک، تمامی امکانات و کارایی یک دستگاه بزرگ و حرفه ای اسپرسو را دارا می باشد.', link: ''},
        {id: 2, imageAdd: '', title: 'Xbox Series X',  description: 'اسپرسو ساز واکاکو مدل Minipresso محصولی بسیار کاربردی و گزینه ای ایده آل برای علاقمندان به نوشیدن قهوه ای حرفه ای در شرایط و مکان های مختلف می باشد. با به همراه داشتن اسپرسو ساز قابل حمل Minipresso می توانید یک فنجان اسپرسو خوش طعم را در هنگام کوهنوردی، کمپینگ، سفر و حتی محیط کار نوش جان کنید.این مینی پرسو دارای یک پیمانه، یک عدد فنجان و محفظه ای مجزا برای پودر قهوه با حجم 8 گرم و مخزنی به ظرفیت 80 میلی لیتر برای آب جوش می باشد که با ساختاری کوچک و سبک، تمامی امکانات و کارایی یک دستگاه بزرگ و حرفه ای اسپرسو را دارا می باشد.', link: ''},
        {id: 3, imageAdd: '', title: 'Nintendo',  description: 'اسپرسو ساز واکاکو مدل Minipresso محصولی بسیار کاربردی و گزینه ای ایده آل برای علاقمندان به نوشیدن قهوه ای حرفه ای در شرایط و مکان های مختلف می باشد. با به همراه داشتن اسپرسو ساز قابل حمل Minipresso می توانید یک فنجان اسپرسو خوش طعم را در هنگام کوهنوردی، کمپینگ، سفر و حتی محیط کار نوش جان کنید.این مینی پرسو دارای یک پیمانه، یک عدد فنجان و محفظه ای مجزا برای پودر قهوه با حجم 8 گرم و مخزنی به ظرفیت 80 میلی لیتر برای آب جوش می باشد که با ساختاری کوچک و سبک، تمامی امکانات و کارایی یک دستگاه بزرگ و حرفه ای اسپرسو را دارا می باشد.', link: ''},
        {id: 4, imageAdd: '', title: 'Atari',  description: 'اسپرسو ساز واکاکو مدل Minipresso محصولی بسیار کاربردی و گزینه ای ایده آل برای علاقمندان به نوشیدن قهوه ای حرفه ای در شرایط و مکان های مختلف می باشد. با به همراه داشتن اسپرسو ساز قابل حمل Minipresso می توانید یک فنجان اسپرسو خوش طعم را در هنگام کوهنوردی، کمپینگ، سفر و حتی محیط کار نوش جان کنید.این مینی پرسو دارای یک پیمانه، یک عدد فنجان و محفظه ای مجزا برای پودر قهوه با حجم 8 گرم و مخزنی به ظرفیت 80 میلی لیتر برای آب جوش می باشد که با ساختاری کوچک و سبک، تمامی امکانات و کارایی یک دستگاه بزرگ و حرفه ای اسپرسو را دارا می باشد.', link: ''},
        {id: 5, imageAdd: '', title: 'SEGA',  description: 'اسپرسو ساز واکاکو مدل Minipresso محصولی بسیار کاربردی و گزینه ای ایده آل برای علاقمندان به نوشیدن قهوه ای حرفه ای در شرایط و مکان های مختلف می باشد. با به همراه داشتن اسپرسو ساز قابل حمل Minipresso می توانید یک فنجان اسپرسو خوش طعم را در هنگام کوهنوردی، کمپینگ، سفر و حتی محیط کار نوش جان کنید.این مینی پرسو دارای یک پیمانه، یک عدد فنجان و محفظه ای مجزا برای پودر قهوه با حجم 8 گرم و مخزنی به ظرفیت 80 میلی لیتر برای آب جوش می باشد که با ساختاری کوچک و سبک، تمامی امکانات و کارایی یک دستگاه بزرگ و حرفه ای اسپرسو را دارا می باشد.', link: ''},
        {id: 6, imageAdd: '', title: 'Play Station',  description: 'اسپرسو ساز واکاکو مدل Minipresso محصولی بسیار کاربردی و گزینه ای ایده آل برای علاقمندان به نوشیدن قهوه ای حرفه ای در شرایط و مکان های مختلف می باشد. با به همراه داشتن اسپرسو ساز قابل حمل Minipresso می توانید یک فنجان اسپرسو خوش طعم را در هنگام کوهنوردی، کمپینگ، سفر و حتی محیط کار نوش جان کنید.این مینی پرسو دارای یک پیمانه، یک عدد فنجان و محفظه ای مجزا برای پودر قهوه با حجم 8 گرم و مخزنی به ظرفیت 80 میلی لیتر برای آب جوش می باشد که با ساختاری کوچک و سبک، تمامی امکانات و کارایی یک دستگاه بزرگ و حرفه ای اسپرسو را دارا می باشد.', link: ''},
      	]
	}

	return (
		<main>
			{/* <LineSplitter text={"تخفیف های امروز"} />
			<CardProductSlider
				btn={true}
				products={products}
				itemsPerPage={4}
				swapTime_millisecond={3000}
			/>
			<Banner />
			<LineSplitter text={"محصولات جدید گیزمو"} />
			<CardProductSlider
				btn={true}
				products={products}
				itemsPerPage={4}
				swapTime_millisecond={3000}
			/>
			<LineSplitter text={"دسته بندی ها"} />
			<Sections />
			<LineSplitter text={"محصولات مشاهده شده"} />
			<CardProductSlider
				btn={true}
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
					my: 5,
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
			</Button> */}

			<DashBoard defaultAddresses={[{value: 'first', label: 'الهیه، ورودی گل محمدی، کوچه 6، منزل برزگر'}, {value: 'second', label: 'الهیه، ورودی گل محمدی، کوچه 6، منزل برزگر'}]}></DashBoard>
		</main>
	);
}
