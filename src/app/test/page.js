"use client";

const image =
	"https://gn02.liara.run/images/media/pictures/payment_success_vector_uCxkE4T.png";

import {
	Box,
	Button,
	CardContent,
	CardMedia,
	Container,
	Grow,
	Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const payment = () => {
	const [go, setGo] = useState(0);
	const handle = () => {
		setGo(go === 0 ? 30 : 0);
	};
	const [checked, setChecked] = useState(false);
	setInterval(() => setChecked(!checked), 10000);
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Grow in={checked}>
				<CardMedia
					image={image}
					sx={{
						width: 360,
						height: 360,
						mx: "auto",
						mt: 20,
					}}
				/>
			</Grow>
			<Typography
				mt={2}
				align="center"
				variant="h3">
				{"پرداخت با موفقیت انجام شد."}
			</Typography>
			<Link href="/">
				<Button
					onMouseEnter={handle}
					variant="contained"
					sx={{
						borderRadius: 10,
						py: 1,
						px: 5,
						mt: go + 10,
					}}>
					<Typography variant="h5">{"بازگشت به سایت"}</Typography>
				</Button>
			</Link>
		</Box>
	);
};

export default payment;
