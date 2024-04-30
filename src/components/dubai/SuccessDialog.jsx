import { Alert, Box, Button, Dialog, Typography } from "@mui/material";
import React from "react";

const SuccessDialog = ({ showDialog, handleClose }) => {
	return (
		<Dialog
			open={showDialog}
			onClose={handleClose}
			sx={{
				"& .MuiDialog-paper": { borderRadius: 10, bgcolor: "#EDF7ED" },
			}}>
			<Alert
				sx={{
					m: 3,
				}}>
				<Typography
					variant="h6"
					fontWeight={900}>
					{"درخواست استعلام قیمت شما با موفقیت ثبت شد."}
				</Typography>
				<Typography mt={3}>
					{
						"تا ساعاتی دیگر قیمت ریالی برای شما پیامک و همچنین در پنل کاربری ثبت خواهد شد."
					}
				</Typography>
				<Typography mt={3}>
					{"برای ثبت سفارش به پنل کاربری مراجعه کنید."}
				</Typography>
				<Box
					display="flex"
					justifyContent="end">
					<Button
						onClick={handleClose}
						sx={{
							mt: 2,
							px: 3,
							borderRadius: 4,
						}}
						variant="contained"
						color="success">
						<Typography>{"متوجه شدم"}</Typography>
					</Button>
				</Box>
			</Alert>
		</Dialog>
	);
};

export default SuccessDialog;
