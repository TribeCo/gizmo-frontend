import { Box } from "@mui/material";
import { redirect } from "next/navigation";

function Products() {
	redirect("/404");
	return <Box></Box>;
}

export default Products;
