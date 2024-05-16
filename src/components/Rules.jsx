import React from "react";
import {Box, Grid, SvgIcon, Typography, Button} from "@mui/material"
import FaqQuestion from "./Faq/FaqQuestion";
import { Colors } from "@/utils";
import { baseUrl } from "@/services";

export default function Rules({ data, onClose }) {
	return (
		<Box>
			<Grid mb={30}>
				<Grid
					display="flex"
					flexDirection="row"
					alignItems="center"
					justifyContent="space-around"
					px={1}>
					<Grid
						sx={{
							display: "flex",
							alignItems: "center",
						}}>
						<Grid
							sx={{
								width: { xs: "50px", sm: "60px", md: "80px" },
								height: { xs: "50px", sm: "60px", md: "80px" },
							}}>
							<img
								src={`${baseUrl}/images/media/pictures/b3da1909580bd3fb86e1ea805a9d4885.png`}
							/>
						</Grid>
						<Grid>
							<Typography
								pl={2}
								variant="h6"
								sx={{
									fontWeight: "bold",
									fontSize: { xs: 14, sm: 18, md: 20, lg: 24 },
								}}>
								قوانین سایت
							</Typography>
						</Grid>
					</Grid>

					<Grid>
						<Button
							onClick={onClose}
							variant="contained"
							sx={{
								bgcolor: Colors.orange,
								color: "black",
								borderRadius: "20px",
								boxShadow: "none",
								"&:hover": {
									bgcolor: Colors.orange,
								},
							}}>
							<Typography
								variant="h6"
								color="#213346"
								sx={{
									display: { xs: "none", sm: "flex" },
									pr: { xs: 0, sm: 1, md: 2 },
									fontSize: { xs: 13, sm: 14, md: 18, lg: 20 },
								}}>
								بازگشت به صفحه موضوعات
							</Typography>
							<Grid
								sx={{
									scale: { xs: "0.8", md: "0.9", lg: "1" },
								}}>
								<SvgIcon
									width="24"
									height="19"
									viewBox="0 0 24 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M1.99992 7.50094L1.11617 8.38469L0.232422 7.50094L1.11617 6.61719L1.99992 7.50094ZM23.2499 17.5009C23.2499 17.8325 23.1182 18.1504 22.8838 18.3848C22.6494 18.6192 22.3314 18.7509 21.9999 18.7509C21.6684 18.7509 21.3505 18.6192 21.116 18.3848C20.8816 18.1504 20.7499 17.8325 20.7499 17.5009H23.2499ZM7.36617 14.6347L1.11617 8.38469L2.88367 6.61719L9.13367 12.8672L7.36617 14.6347ZM1.11617 6.61719L7.36617 0.367188L9.13367 2.13469L2.88367 8.38469L1.11617 6.61719ZM1.99992 6.25094H14.4999V8.75094H1.99992V6.25094ZM23.2499 15.0009V17.5009H20.7499V15.0009H23.2499ZM14.4999 6.25094C16.8206 6.25094 19.0462 7.17281 20.6871 8.81375C22.328 10.4547 23.2499 12.6803 23.2499 15.0009H20.7499C20.7499 13.3433 20.0914 11.7536 18.9193 10.5815C17.7472 9.40942 16.1575 8.75094 14.4999 8.75094V6.25094Z"
										fill="#213346"
									/>
								</SvgIcon>
							</Grid>
						</Button>
					</Grid>
				</Grid>
				<Grid
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center">
					{data.map((faq, index) => (
						<FaqQuestion
							key={index}
							question={faq.title}
							answer={faq.text}
						/>
					))}
				</Grid>
			</Grid>
		</Box>
	);
}
