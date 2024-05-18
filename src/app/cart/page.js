"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/CartPage/ProductCard";
import Summary from "@/components/CartPage/Summary";
import CartHeader from "@/components/CartPage/CartHeader";
import ProgressBar from "@/components/CartPage/ProgressBar";

import { Box } from "@mui/material";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { enqueueSnackbar } from "notistack";
import { ApplyCoupon } from "@/services/DashBoard";
import First from "@/components/CartPage/Pages/first";
import Second from "@/components/CartPage/Pages/second";
import Third from "@/components/CartPage/Pages/Third";
import { baseUrl } from "@/services";

const CartPage = () => {
	const [state, setState] = useState(0);
	const [user, setUser] = useState(null);

	const { tokens } = useAuth();
	const { getCart } = useCart();
	const [data, setData] = useState([]);
	const [totals, setTotals] = useState({
		total_price_method: 0,
		total_discounted_price_method: 0,
		delta_discounted_method: 0,
		coupon: 0,
	});
	const handleSubmit = async () => {
		if (state === 0) {
			if (user) {
				setState(1);
			} else {
				const response = await fetch(`${baseUrl}/api/users/info/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${tokens.access}`,
					},
				});
				console.log(response);
				if (response.ok) {
					setUser(await response.json());
					setState(1);
				} else {
					enqueueSnackbar({
						message: "لطفا برای ادامه دادن وارد شوید",
						variant: "error",
					});
				}
			}
		} else if (state === 1) {
			setState(2);
		} else if (state === 2) {
			//Todo send data
		} else {
			enqueueSnackbar({
				message: "خطای ناشناخته",
				variant: "error",
			});
		}
	};

	const handleApplyCoupon = async (code) => {
		if (!code) {
			enqueueSnackbar({
				message: "لطفا یک کد تخفیف وارد کنید",
				variant: "error",
			});
			return;
		}
		try {
			const res = await ApplyCoupon(code, tokens);
			// const response = await getCart();
			// console.log(res.data);
			// setData(res.data.temp_items);
			// setTotals({
			// 	total_price_method: res.data.total_price_method,
			// 	total_discounted_price_method: res.data.total_discounted_price_method,
			// 	delta_discounted_method: res.data.delta_discounted_method,
			// 	coupon: 0,
			// });
			enqueueSnackbar({
				message: res.message,
				variant: "success",
			});
		} catch (error) {
			enqueueSnackbar({
				message: "خطا در اعمال کد تخفیف. لطفا دوباره تلاش کنید.",
				variant: "error",
			});
		}
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const userResponse = await fetch(`${baseUrl}/api/users/info/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${tokens.access}`,
					},
					next: {
						revalidate: 1000,
					},
				});
				console.log(userResponse);
				if (userResponse.ok) {
					setUser(await userResponse.json());
				}
				const res = await getCart();
				console.log(res.data.temp_items);
				setData(res.data.temp_items);
				setTotals({
					total_price_method: res.data.total_price_method,
					total_discounted_price_method: res.data.total_discounted_price_method,
					delta_discounted_method: res.data.delta_discounted_method,
				});
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, [tokens]);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					rowGap: { xs: 2, sm: 5, md: 8 },
					pb: { xs: 4, sm: 12 },
				}}>
				<Box
					sx={{
						marginTop: { xs: 1, md: 4 },
						marginBottom: { xs: 0, md: 2 },
					}}>
					<ProgressBar activeStep={state} />
				</Box>
				{state === 2 ? (
					<Third />
				) : state === 1 ? (
					<>
						<Second />
						<Summary
							user={user}
							data={totals}
							handleApplyCoupon={handleApplyCoupon}
							handleSubmit={handleSubmit}
						/>
					</>
				) : (
					<>
						<First data={data} />
						<Summary
							user={user}
							data={totals}
							handleApplyCoupon={handleApplyCoupon}
							handleSubmit={handleSubmit}
						/>
					</>
				)}
			</Box>
		</>
	);
};

export default CartPage;
