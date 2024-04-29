"use client";

import { Colors } from "@/utils";
import { Add } from "@mui/icons-material";
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Input,
	Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const validationSchema = yup.object({
	text: yup.string().required("متن نظر الزامی میباشد."),
});

const BlogSendComment = ({ handleSendComment }) => {
	const handleSelect = (event, value) => {
		setSelected(value);
	};

	const formik = useFormik({
		initialValues: {
			text: "",
			anonymous: false,
		},
		onSubmit: (values) => {
			handleSendComment({
				anonymous: values.anonymous,
				text: values.text,
			});

			formik.resetForm();
			setSelected(0);
			setRate(1);
		},
		validationSchema,
	});

	return (
		<Grid
			display='flex'
			flexDirection='column'
			rowGap={4}
		>
			<Grid
				item
				xs={12}
				sm={12}
				md={8}
				lg={8}
				display="flex"
				flexDirection="column"
				alignItems="center">
				<Typography
					align="left"
					variant="h6"
					fontWeight={800}>
					{"ثبت نظر"}
				</Typography>
				<Grid
					display="flex"
					direction="column"
					alignItems="center"
					justifyContent="center"
					sx={{
						mt: 3,
						width: { xs: 320, sm: 590 },
						pt: 2,
						pb: 4,
						borderRadius: 5,
						bgcolor: "#F9F9F9",
					}}>
					<Box
						display="flex"
						justifyContent="space-between"
						sx={{ width: { xs: 310, sm: 570 } }}>
						<Box
							display="flex"
							pt={1.3}
							flexDirection="row">
							<Add fontSize="medium" />
							<Typography ml={1}>{"نظر شما"}</Typography>
						</Box>
						<FormControlLabel
							control={
								<Checkbox
									name="anonymous"
									id="anonymous"
									onChange={formik.handleChange}
								/>
							}
							label="ارسال نظر به صورت ناشناس."
						/>
						<Box />
					</Box>
					<Input
						id="text"
						name="text"
						placeholder="دیدگاه"
						value={formik.values.text}
						onChange={formik.handleChange}
						multiline
						rows={3}
						fullWidth
						disableUnderline
						required
						sx={{
							mt: 1,
							bgcolor: "#EEEEEE",
							height: { xs: 80, sm: 90 },
							width: { xs: 300, sm: 550 },
							borderRadius: 3,
							padding: 3,
						}}
						error={formik.errors.text && formik.touched.text}
					/>
					{formik.errors.text && formik.touched.text && (
						<Typography
							color="#ff0000"
							sx={{ border: "0.05em solid", mt: 2, borderRadius: 3, p: 1 }}>
							{"لطفا متن دیدگاه خود را وارد کنید."}
						</Typography>
					)}
				</Grid>
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={4}
				lg={4}
				display="flex"
				flexDirection="column"
				alignItems="center">
				<Button
					variant="contained"
					onClick={formik.handleSubmit}
					fullWidth
					sx={{
						bgcolor: Colors.orange,
						color: "#000",
						width: 240,
						height: 43,
						borderRadius: 18,
						opacity: "70%",
						"&:hover": {
							bgcolor: Colors.orange,
							opacity: "100%",
						},
					}}>
					<Typography fontWeight={400}>{"ثبت نظر"}</Typography>
				</Button>
			</Grid>
		</Grid>
	);
};

export default BlogSendComment;
