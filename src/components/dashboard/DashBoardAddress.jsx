"use client";
import React, { useState, useEffect } from "react";
import { Colors } from "@/utils";
import { useAuth } from "@/context/AuthContext";
import {
	Button,
	Typography,
	Grid,
	Stack,
	FormControl,
	FormLabel,
	RadioGroup,
	Radio,
	FormControlLabel,
	Paper,
} from "@mui/material";
import {
	AddNewAddress,
	DeleteAddress,
	MakeDefaultAddress,
	fetchAddresses,
} from "@/services/DashBoard";
import { enqueueSnackbar } from "notistack";

export default function DashBoardAddress() {
	const [addNewAddressStat, setAddNewAddressStat] = useState(false);
	const [address, setAddress] = useState([]);
	const [selectedAddressId, setSelectedAddressId] = useState();
	const { tokens } = useAuth();

	useEffect(() => {
		if (tokens) {
			handleGetAddress();
		}
	}, [tokens]);

	const handleGetAddress = async () => {
		try {
			const response = await fetchAddresses(tokens);
			if (response) {
				setAddress(response.data);
			}
		} catch (error) {
			console.error("Error fetching addresses:", error);
			enqueueSnackbar({
				message: error.message || "خطا در دریافت آدرس‌ها.",
				variant: "error",
			});
		}
	};

	const handleRadioChange = (event) => {
		setSelectedAddressId(event.target.value);
	};

	const [Address, SetAddress] = useState({
		province: "",
		city: "",
		straight_address: "",
		postal_code: "",
	});

	const handleChange = (prop) => (event) => {
		SetAddress({
			...Address,
			[prop]: event.target.value,
		});
	};

	const MakeCurrent = async () => {
		try {
			if (!selectedAddressId) {
				enqueueSnackbar({
					message: "لطفا ابتدا یک آدرس انتخاب کنید",
					variant: "warning",
				});
				return;
			}
			const response = (await MakeDefaultAddress(selectedAddressId, tokens))
				.messages;
			setAddress((await fetchAddresses(tokens)).data);
			enqueueSnackbar({ message: `${response}`, variant: "success" });
		} catch (error) {
			console.error("خطا در تنظیم آدرس پیش‌فرض:", error);
			alert();
			enqueueSnackbar({
				message: `${error.message}` || "خطا در تنظیم به عنوان آدرس پیش‌فرض.",
				variant: "error",
			});
		}
	};

	const RemoveAddress = async () => {
		try {
			if (!selectedAddressId) {
				enqueueSnackbar({
					message: "لطفا ابتدا یک آدرس انتخاب کنید",
					variant: "warning",
				});
				return;
			}
			const isConfirmed = window.confirm("آیا از حذف این آدرس اطمینان دارید؟");
			if (!isConfirmed) {
				return;
			}
			const response = await DeleteAddress(selectedAddressId, tokens);
			if (response.status === 204) {
				setAddress((await fetchAddresses(tokens)).data);
				enqueueSnackbar({
					message: response.message || "آدرس با موفقیت حذف شد.",
					variant: "success",
				});
			} else {
				enqueueSnackbar({
					message: response.message || "آدرس با موفقیت حذف نشد.",
					variant: "error",
				});
			}
		} catch (error) {
			console.error("خطا در حذف آدرس:", error);
			enqueueSnackbar({
				message: error.message || "خطا در حذف آدرس:",
				variant: "error",
			});
		}
	};

	const AddAddress = async () => {
		try {
			const response = await AddNewAddress(Address, tokens);
			if (response) {
				enqueueSnackbar({
					message: response.messages || "آدرس با موفقیت اضافه شد.",
					variant: "success",
				});
				setAddress((await fetchAddresses(tokens)).data);
				SetAddress({
					province: "",
					city: "",
					straight_address: "",
					postal_code: "",
				});
			}
		} catch (error) {
			console.error("خطا در ارسال داده به API:", error);
			enqueueSnackbar({
				message: error.message || "افزودن آدرس جدید ناموفق بود.",
				variant: "error",
			});
		}
	};

	return (
		<Paper
			variant="outlined"
			sx={{
				height: "fit-content",
				borderRadius: "15px",
				boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
			}}>
			<section className="savedAddresses py-4 rounded-lg px-[4%] flex flex-col w-[60rem]  lg:w-[21rem]">
				<div className="savedAddressesHeader flex border-b border-[#EDEDED] justify-between py-2 mb-4">
					<Typography
						variant="h6"
						fontSize={18}
						fontWeight={700}>
						آدرس ها
					</Typography>
					<Button
						onClick={() => setAddNewAddressStat(true)}
						variant="contained"
						className="flex gap-2"
						sx={{
							bgcolor: Colors.orange,
							color: "black",
							borderRadius: "50px",
							boxShadow: "none",
							"&:hover": {
								bgcolor: Colors.orange,
							},
						}}>
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
								fill="#213346"
							/>
						</svg>
						<Typography variant="div"> افزودن آدرس جدید</Typography>
					</Button>
				</div>
				<Stack
					spacing={4}
					className="px-[3%]">
					<Stack
						spacing={2}
						className="defaultAddresses">
						<Typography
							variant="h6"
							fontSize={18}
							fontWeight={900}
							className="font-bold text-[#213346]">
							آدرس پیش فرض
						</Typography>
						<Stack
							spacing={1}
							className="defaultAddresses-bullets px-5 max-sm:text-sm">
							{address.map((addr) => {
								if (addr.current) {
									return (
										<Typography
											key={addr.id}
											style={{ overflow: "hidden" }}>
											{`${addr.province}, ${addr.city}, ${addr.straight_address}, کد پستی: ${addr.postal_code}`}
										</Typography>
									);
								}
								return null;
							})}
						</Stack>
					</Stack>
					<Stack
						spacing={2}
						className="otherAddresses">
						<Typography
							variant="h6"
							fontWeight={900}
							fontSize={18}
							className="font-bold text-[#21334">
							آدرس های دیگر
						</Typography>
						<Stack
							spacing={1}
							className="notDefaultAddresses-bullets px-5">
							<FormControl>
								<FormLabel id="demo-radio-buttons-group-label"></FormLabel>
								<RadioGroup
									onChange={handleRadioChange}
									aria-labelledby="demo-radio-buttons-group-label"
									name="radio-buttons-group">
									{address.map((address, index) => {
										if (!address.current) {
											return (
												<FormControlLabel
													key={index + 1}
													label={`${address.province}, ${address.city}, ${address.straight_address}, کد پستی: ${address.postal_code}`}
													control={<Radio />}
													value={address.id}
												/>
											);
										} else null;
									})}
								</RadioGroup>
							</FormControl>
						</Stack>
					</Stack>
					<div className="addNewAddressWrapper w-full flex justify-start">
						<Grid
							display="flex"
							flexWrap="wrap"
							sx={{
								justifyContent: { xs: "center", md: "none" },
								alignItems: "center",
								columnGap: 2,
							}}>
							<Button
								className="setDefaultBtn"
								variant="contained"
								onClick={MakeCurrent}
								sx={{
									width: 200,
									bgcolor: Colors.orange,
									color: "black",
									borderRadius: "50px",
									boxShadow: "none",
									mb: { xs: 2, md: 4 },
									"&:hover": {
										bgcolor: Colors.orange,
									},
								}}>
								<Typography variant="div">افزودن آدرس به پیش فرض</Typography>
							</Button>
							<Button
								className="setDefaultBtn"
								variant="contained"
								onClick={RemoveAddress}
								sx={{
									width: 200,
									bgcolor: "#f59595",
									color: "black",
									borderRadius: "50px",
									boxShadow: "none",
									mb: 4,
									"&:hover": {
										bgcolor: "#f59595",
									},
								}}>
								<Typography variant="div">حذف آدرس انتخاب شده</Typography>
							</Button>
						</Grid>
					</div>
				</Stack>
				<Stack
					className="mt-8 px-[4%]"
					style={{ display: addNewAddressStat ? "block" : "none" }}>
					<Typography
						variant="h6"
						fontSize={18}
						fontWeight={900}
						className="font-bold pb-2 text-[#213346]">
						افزودن آدرس جدید
					</Typography>
					<Stack>
						<Grid
							container
							spacing={2}
							className="my-8 w-full">
							<Grid
								item
								xs={12}
								md={6}>
								<label
									htmlFor="province"
									className="w-full block text-xs mr-2">
									استان:
								</label>
								<input
									type="text"
									id="province"
									onChange={handleChange("province")}
									className="bg-[#EEEE] w-[90%] rounded-lg h-8 mt-2 outline-none px-2"
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}>
								<label
									htmlFor="city"
									className="w-full block text-xs mr-2">
									شهر / شهرستان:
								</label>
								<input
									type="text"
									onChange={handleChange("city")}
									id="city"
									className="bg-[#EEEE] w-[90%] rounded-lg h-8 mt-2 outline-none px-2"
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}>
								<label
									htmlFor="ExactAddress"
									className="w-full block text-xs mr-2">
									آدرس دقیق:
								</label>
								<textarea
									id="ExactAddress"
									onChange={handleChange("straight_address")}
									className="resize-none bg-[#EEEE] w-[90%] h-20 rounded-lg mt-2 outline-none px-2"
								/>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}>
								<label
									htmlFor="postalCode"
									className="w-full block text-xs mr-2">
									کد پستی:
								</label>
								<input
									type="number"
									onChange={handleChange("postal_code")}
									onInput={(e) =>
										(e.target.value = e.target.value.replace(/[^0-9]/g, ""))
									}
									style={{ appearance: "textfield" }}
									id="postalCode"
									min={0}
									className="resize-none px-2 bg-[#EEEE] w-[90%] h-8 rounded-lg mt-2 outline-none"
								/>
								<div className="mt-4 flex justify-end lg:justify-center px-10">
									<Button
										variant="contained"
										onClick={AddAddress}
										sx={{
											bgcolor: Colors.orange,
											color: "black",
											borderRadius: "50px",
											boxShadow: "none",
											mt: 1.5,
											px: 4,
											"&:hover": {
												bgcolor: Colors.orange,
											},
										}}>
										<Typography variant="div">افزودن آدرس ها</Typography>
									</Button>
								</div>
							</Grid>
						</Grid>
					</Stack>
				</Stack>
			</section>
		</Paper>
	);
}
