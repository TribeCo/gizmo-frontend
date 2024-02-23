import ProductsGrid from "@/components/ProductsGrid";
import LineSplitter from "@/components/LineSpliter";

function Products() {
	return <div>
		<LineSplitter text={" محصولات لوازم برقی "} />
		<ProductsGrid />
		</div>;
}

export default Products;
