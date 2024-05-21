"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { enqueueSnackbar } from "notistack";

//? Components
import Summary from "@/components/CartPage/Summary";
import ProgressBar from "@/components/CartPage/ProgressBar";

//? Contexts
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

//? Pages
import First from "@/components/CartPage/Pages/first";
import Second from "@/components/CartPage/Pages/second";
import Third from "@/components/CartPage/Pages/Third";

//? services
import { baseUrl } from "@/services";
import {
	ApplyCoupon,
	RevokeCoupon,
	SenderInformation,
} from "@/services/DashBoard";
import { useFormik } from "formik";

const CartPage = () => {
	//? Contexts
	const { tokens } = useAuth();
	const { getCart, readCart } = useCart();

	//? Page number
	const [state, setState] = useState(0);

	//? Data
	const [Address, setAddress] = useState("");
	const [user, setUser] = useState(null);
	const [data, setData] = useState([]);
	const [totals, setTotals] = useState({
		total_price_method: 0,
		total_discounted_price_method: 0,
		delta_discounted_method: 0,
		coupon: 0,
	});

	const formik = useFormik({
		initialValues: {
			name_delivery: "",
			description: "",
			phone_delivery: "",
			delivery_method: "",
		},
		onSubmit: async (values) => {
			try {
				await SenderInformation(values, tokens);
				setState(2);
			} catch (error) {
				enqueueSnackbar({
					message: "خطایی رخ داد.",
					variant: "error",
				});
			}
		},
	});

	const handleSubmit = async () => {
		if (state === 0) {
			if (user) {
				setState(1);
			} else {
				const userResponse = await fetch(`${baseUrl}/api/users/info/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${tokens.access}`,
					},
					next: {
						revalidate: 1,
					},
				});
				console.log(userResponse);
				if (userResponse.ok) {
					setUser(await userResponse.json());
					setState(1);
				} else {
					enqueueSnackbar({
						message: "لطفا برای ادامه دادن وارد شوید",
						variant: "warning",
					});
				}
			}
		} else if (state === 1) {
			// if (Address.length === 0) {
			// 	enqueueSnackbar({
			// 		message: "لطفاً یک آدرس انتخاب کنید.",
			// 		variant: "warning",
			// 	});
			// 	return;
			// } else {
			formik.handleSubmit();
			// }
		} else if (state === 2) {
			//Todo send data
		} else {
			enqueueSnackbar({
				message: "خطای ناشناخته",
				variant: "error",
			});
		}
	};

	const handleRevokeCoupon = async () => {
		try {
			await RevokeCoupon(tokens);
			const response = await readCart();
			setData(response.cart.items);
			setTotals({
				total_price_method: response.cart.total_price_method,
				total_discounted_price_method:
					response.cart.total_discounted_price_method,
				delta_discounted_method: response.cart.delta_discounted_method,
				coupon: response.cart.coupon_discount,
			});
			enqueueSnackbar({
				message: "کد تخفیف با موفقیت حذف گردید",
				variant: "success",
			});
		} catch (error) {
			enqueueSnackbar({
				message: "خطا در حذف کد تخفیف لطفا دوباره تلاش کنید.",
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
			const response = await readCart();
			console.log(response);
			setData(response.cart.items);
			setTotals({
				total_price_method: response.cart.total_price_method,
				total_discounted_price_method:
					response.cart.total_discounted_price_method,
				delta_discounted_method: response.cart.delta_discounted_method,
				coupon: response.cart.coupon_discount,
			});
			console.log(res);
			if (res.message === "کد تخفیف با موفقیت اعمال شد.") {
				enqueueSnackbar({
					message: res.message,
					variant: "success",
				});
			} else {
				enqueueSnackbar({
					message: "کد قبلا اعمال شده است.",
					variant: "error",
				});
			}
		} catch (error) {
			enqueueSnackbar({
				message: "خطا در اعمال کد تخفیف. لطفا دوباره تلاش کنید.",
				variant: "error",
			});
		}
	};

	//? Component Life Cycle
	useEffect(() => {
		const getData = async () => {
			try {
				if (tokens.access) {
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
					if (userResponse.ok) {
						setUser(await userResponse.json());
						const response = await readCart();
						console.log(response.cart);
						setData(response.cart.items);

						setTotals({
							total_price_method: response.cart.total_price_method,
							total_discounted_price_method:
								response.cart.total_discounted_price_method,
							delta_discounted_method: response.cart.delta_discounted_method,
							coupon: response.cart.coupon_discount,
						});
						return;
					}
				}
				const res = await getCart();
				console.log(res.data.temp_items);
				setData(res.data.temp_items);
				setTotals({
					total_price_method: res.data.total_price_method,
					total_discounted_price_method: res.data.total_discounted_price_method,
					delta_discounted_method: res.data.delta_discounted_method,
					coupon: 0,
				});
			} catch (error) {}
		};
		getData();
	}, [tokens]);

	//? Render
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
						<Second
							formik={formik}
							setCurrentAddress={setAddress}
						/>
						<Summary
							user={user}
							data={totals}
							handleApplyCoupon={handleApplyCoupon}
							handleRevokeCoupon={handleRevokeCoupon}
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
							handleRevokeCoupon={handleRevokeCoupon}
							handleSubmit={handleSubmit}
						/>
					</>
				)}
			</Box>
		</>
	);
};

export default CartPage;
