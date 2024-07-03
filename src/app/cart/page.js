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
import First from "@/components/CartPage/Pages/First";
import Second from "@/components/CartPage/Pages/Second";
import Third from "@/components/CartPage/Pages/Third";

//? services
import { baseUrl } from "@/services";
import {
	ApplyCoupon,
	RevokeCoupon,
	SenderInformation,
} from "@/services/DashBoard";

import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";

import Loading from "@/components/Loading";

const validationSchema = yup.object().shape({
	name_delivery: yup.string().required("لطفا نام و نام خانوادگی را وارد کنید"),
	description: yup.string(),
	phone_delivery: yup
		.string()
		.required("لطفا شماره تلفن دریافت کننده را وارد کنید.")
		.matches(
			/^(0{1}9|\+{1}9{1}8{1}9{1})[0-9]{9}$/,
			"شماره تلفن وارد شده صحیح نمیباشد",
		),
	delivery_method: yup.string().required("لطفا نحوه ارسال را مشخص نمایید"),
});

const CartPage = () => {
	//? Contexts
	const { tokens } = useAuth();
	const router = useRouter();
	const { getCart, readCart } = useCart();

	//? Page number
	const [state, setState] = useState(0);

	//? Data
	const [address, setAddress] = useState(null);
	const [user, setUser] = useState(null);
	const [data, setData] = useState([]);
	const [totals, setTotals] = useState({
		total_price_method: 0,
		total_discounted_price_method: 0,
		delta_discounted_method: 0,
		coupon: 0,
		coupon_code: null,
	});
	const [sendInfo, setSendInfo] = useState({ address: "", sending_method: "" });

	//? Loading
	const [loading, setLoading] = useState(false);

	const handleSendInfo = ({ address, sending_method_code }) => {
		console.log(address);
		console.log(sending_method_code);
		let sending_method;
		switch (sending_method_code) {
			case "c":
				sending_method = "درون شهری";
				break;
			case "b":
				sending_method = "ارسال با اتوبوس";
				break;
			case "p":
				sending_method = "پست معمولی";
				break;
			case "t":
				sending_method = "تیپاکس (پس کرایه)";
				break;
			default:
				break;
		}
		setSendInfo({ address, sending_method });
	};

	const formik = useFormik({
		initialValues: {
			name_delivery: "",
			description: "",
			phone_delivery: "",
			delivery_method: "",
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			setLoading(true);
			try {
				if (address) {
					await SenderInformation(values, tokens);
					handleSendInfo({
						address: address,
						sending_method_code: values.delivery_method,
					});
					setState(2);
				} else {
					enqueueSnackbar({
						message: "لطفا آدرس را وارد کنید",
						variant: "warning",
					});
				}
			} catch (error) {
				enqueueSnackbar({
					message: "خطایی رخ داد.",
					variant: "error",
				});
			}
			setLoading(false);
		},
	});

	const handleSubmit = async () => {
		if (state === 0) {
			if (user) {
				setState(1);
			} else {
				setLoading(true);
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
				if (userResponse.ok) {
					setUser(await userResponse.json());
					setState(1);
				} else {
					enqueueSnackbar({
						message: "لطفا برای ادامه دادن وارد شوید",
						variant: "warning",
					});
				}
				setLoading(false);
			}
		} else if (state === 1) {
			formik.handleSubmit();
		} else if (state === 2) {
			setLoading(true);
			const response = await fetch(`${baseUrl}/api/payment/`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${tokens.access}`,
				},
				next: {
					revalidate: 1,
				},
			});
			const data = await response.json();
			setLoading(false);
			router.replace(data.redirect_url);
		} else {
			enqueueSnackbar({
				message: "خطای ناشناخته",
				variant: "error",
			});
		}
	};

	const handleRevokeCoupon = async () => {
		setLoading(true);
		try {
			await RevokeCoupon(tokens);
			const response = await readCart();
			console.log(response);
			setData(response.cart.items);
			setTotals({
				total_price_method: response.cart.total_price_method,
				total_discounted_price_method:
					response.cart.total_discounted_price_method,
				delta_discounted_method: response.cart.delta_discounted_method,
				coupon: response.cart.coupon_discount,
				coupon_code: null,
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
		setLoading(false);
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
			setLoading(true);
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
				coupon_code: code,
			});
			setLoading(false);
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
			setLoading(false);
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
				// setLoading(true);
				if (tokens) {
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
							coupon_code: response.cart.coupon.code,
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
				// setLoading(false);
			} catch (error) {}
		};

		getData();
	}, [tokens, readCart, getCart]);

	//? Render
	return (
		<>
			<Loading open={loading} />
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
					<Third
						handleSubmit={handleSubmit}
						sendInfo={sendInfo}
						data={data}
						totals={totals}
					/>
				) : state === 1 ? (
					<>
						<Second
							loading={setLoading}
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
