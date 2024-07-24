"use client";

const success = `${baseUrl}/images/media/pictures/payment_success_vector_uCxkE4T.png`;
const failed = `${baseUrl}/images/media/pictures/payment-failed.png`;

import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { baseUrl } from "@/services";
import { Box, Button, CardMedia, Grow, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

const Payment = ({ searchParams }) => {
	console.log(searchParams);

	const { tokens } = useAuth();
	const { deleteList } = useCart();

	useEffect(() => {
		const val = async () => {
			try {
				const response = await fetch(`${baseUrl}/api/verify/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${tokens.access}`,
					},
					next: {
						revalidate: 1,
					},
					body: JSON.stringify({
						authority: searchParams.Authority,
						status: searchParams.Status,
					}),
				});
				const data = await response.json();
				console.log(data);
				deleteList();
			} catch (error) {
				console.log(error);
			}
		};
		if (tokens) {
			val();
		}
	}, [tokens]);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			{searchParams.Status.toLowerCase() === "ok" ? (
				<>
					<CardMedia
						image={success}
						sx={{
							width: { xs: 200, md: 360 },
							height: { xs: 200, md: 360 },
							mx: "auto",
							mt: { xs: 10, md: 20 },
						}}
					/>
					<Typography
						mt={2}
						sx={{
							fontSize: { xs: 24, md: 60 },
						}}
						align="center"
						variant="h3">
						{"پرداخت با موفقیت انجام شد."}
					</Typography>
				</>
			) : (
				<>
					<CardMedia
						image={failed}
						sx={{
							width: { xs: 270, md: 500 },
							height: { xs: 270, md: 500 },
							mx: "auto",
							mt: { xs: 10, md: 20 },
						}}
					/>
					<Typography
						mt={2}
						sx={{
							fontSize: { xs: 24, md: 60 },
						}}
						align="center"
						variant="h3">
						{"پرداخت با موفقیت انجام نشد."}
					</Typography>
				</>
			)}

			<Link href="/">
				<Button
					variant="contained"
					sx={{
						borderRadius: 10,
						py: 1,
						px: 5,
						mt: 20,
					}}>
					<Typography variant="h5">{"بازگشت به سایت"}</Typography>
				</Button>
			</Link>
		</Box>
	);
};

export default Payment;
