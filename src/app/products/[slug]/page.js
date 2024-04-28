import CardProductSlider from "@/components/CardProductSlider";
import DescriptionComponent from "@/components/DescriptionComponent";
import LineSplitter from "@/components/LineSpliter";
import { Box } from "@mui/material";
import ProductInfo from "@/components/ProductInfo";

import { getComments, getSimilar, productData } from "@/services/ProductPage";
import RecentlySeen from "@/components/RecentlySeen";

const Products = async ({ params }) => {
	const productInfo = await productData({ slug: params.slug });
	console.log(productInfo);
	const comments = await getComments({ pid: productInfo.id });
	const similar = await getSimilar({ pid: 32 });
	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				overflow: "auto",
				mt: { xs: 0, md: 3 },
			}}
			mb={9}>
			<Box>
				<ProductInfo data={productInfo} />
				<DescriptionComponent
					pid={productInfo.id}
					introductionContent={productInfo.content}
					comments={comments}
					attributes={productInfo.attributes}
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
