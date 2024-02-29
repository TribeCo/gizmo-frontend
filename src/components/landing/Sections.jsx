import {
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Grid,
	Typography,
	Button,
	IconButton,
} from "@mui/material";

function Sections() {
	return (
		<Grid
			container
			px={5}>
			<Grid
				item
				xs={6}
				md={3}>
				<IconButton
					disableRipple
					sx={{
						mx: "auto",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<CardMedia
						sx={{
							width: { xs: 156, md: 260 },
							height: { xs: 168, md: 280 },
							position: "absolute",
							mb: 5,
							px: "auto",
						}}
						image="https://s3-alpha-sig.figma.com/img/09d6/9629/d520aeaae123c3f11159efe1d1ab7ab8?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GjF-6eqehqLOT~lT6JezZrSDZ3mdF5NSCQ2TZAUXy42FaVPEo2GoajosB5F-1YNU8g2ngvgKG08~qciZ6teNCONbhWrdvvmD9yVAvZS3QPlhX-W-fvhohCysWzm0WPFIfymNJ5jv2-YdO2jfc~BTSLJog29dFjLuOYIW3ry-qH2b3k3I~hGqT26oGmkePZiQbZhkiPLDBERXJFo-ZRCqpwgzLEbJI5STaPMZLfaOjjaObT5S1PaxHFEDvxSER1Mwx3gG93SHc3t8IrCwCTSPRoQxX0qkNFJ-fh-WNCENTtMu6Iwjq8HggupBYMA9Ileg8u3r3Sso4q9qoAVQbUDYxQ__"></CardMedia>
					<Box>
						<Box
							sx={{
								px: "auto",
								height: { xs: 84, md: 140 },
							}}
						/>
						<Box
							sx={{
								border: "3px Dashed #22668D",
								px: "auto",
								width: { xs: 156, md: 260 },
								height: { xs: 84, md: 140 },
								bgcolor: "#FFCECE",
								borderRadius: "100px",
							}}
						/>
					</Box>
					<Typography
						pt={2}
						variant="h6"
						fontWeight="800"
						display="block"
						noWrap={true}
						color="black">
						{"لوازم آشپزخانه"}
					</Typography>
				</IconButton>
			</Grid>
			<Grid
				item
				xs={6}
				md={3}>
				<IconButton
					disableRipple
					sx={{
						mx: "auto",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<CardMedia
						sx={{
							width: { xs: 156, md: 260 },
							height: { xs: 168, md: 280 },
							position: "absolute",
							mb: 5,
							px: "auto",
						}}
						image="https://s3-alpha-sig.figma.com/img/b467/6364/70436f1c342e8f96298e223a10d2ffb0?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h11XvVskOcJMdhiHmellvrI2EzC1xA9BOYJaVLpJNwO3am6KbdG0eJ9WrgPkdJtr94BhClQTrwnpvuHyYQMR~6qVH7ZQwu6UmSI4u~fY3RRhRNAcTVCjk6FUJlk8kqCSz2OSS9BdRp8J2V4n~1huwITTe9eI0urf~4hLh9GGm~MaXJd27J1Y7qnaz12ROfHEXQ3boJqc5rF5dTM8OW06YRPsnLWkWZpsxXa9XbzqaZlc1k0pC7Cds4cjCjzvlJpbIvohkEEEzFq0j-EZwZzBOiPmcKJGTcaRIsMB8kbf1RQLrqNcqV19SrDx0KGRRFnZ1CAzF4t89i13it8R3Xtf7g__"></CardMedia>
					<Box>
						<Box
							sx={{
								px: "auto",
								height: { xs: 84, md: 140 },
							}}
						/>
						<Box
							sx={{
								border: "3px Dashed #22668D",
								px: "auto",
								width: { xs: 156, md: 260 },
								height: { xs: 84, md: 140 },
								bgcolor: "#94F6CF",
								borderRadius: "100px",
							}}
						/>
					</Box>
					<Typography
						pt={2}
						variant="h6"
						fontWeight="800"
						display="block"
						noWrap={true}
						color="black">
						{"لوازم جانبی"}
					</Typography>
				</IconButton>
			</Grid>
			<Grid
				item
				xs={6}
				md={3}>
				<IconButton
					disableRipple
					sx={{
						mx: "auto",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<CardMedia
						sx={{
							width: { xs: 156, md: 260 },
							height: { xs: 168, md: 280 },
							position: "absolute",
							mb: 5,
							px: "auto",
						}}
						image="https://s3-alpha-sig.figma.com/img/0858/ad58/58d87995506b9194889dd934adfc0056?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aHu~2BydIyIGXOIt7ipsBagSHq1D4hPogYSzh0ijrEaAEyoaUqyqXEma8hO~vcgTL3UKeU7rjlNxENkDiVFPacfXMeGiesHPpUHBQ7~Po8bmKgs3hjMiMYI72oqfo46xqLoHG4Y0UTXQW-P6YJA9SoQNsbsI2-IKsPGhrOXvEWN3nSir-fc4GZxeQNSeWsr0bbeek8lc93UuMte5V6Ns3Wlnsj1MiY3N9-MHbuVSyMBW7JHPGbzV72gnTJ6gDkVgzt-Unv-yeet2AhR59cgCAGFgHRrI~hVnK9qxpdYyPS2OOv8z6aaJfIdOVunFPDBVRkj7TTtdpZAfJNe0aqy-2A__"></CardMedia>
					<Box>
						<Box
							sx={{
								px: "auto",
								height: { xs: 84, md: 140 },
							}}
						/>
						<Box
							sx={{
								border: "3px Dashed #22668D",
								px: "auto",
								width: { xs: 156, md: 260 },
								height: { xs: 84, md: 140 },
								bgcolor: "#FFAB86",
								borderRadius: "100px",
							}}
						/>
					</Box>
					<Typography
						pt={2}
						variant="h6"
						fontWeight="800"
						display="block"
						noWrap={true}
						color="black">
						{"لوازم برقی"}
					</Typography>
				</IconButton>
			</Grid>
			<Grid
				item
				xs={6}
				md={3}>
				<IconButton
					disableRipple
					sx={{
						mx: "auto",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<CardMedia
						sx={{
							width: { xs: 156, md: 260 },
							height: { xs: 168, md: 280 },
							mb: 5,
							position: "absolute",
							px: "auto",
						}}
						image="https://s3-alpha-sig.figma.com/img/d069/3c10/d54ec76882ddd599998a243e5a41fea4?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qNPwbkmsm9KuInR-r-TRUpcYiTmtATNPOm6slVCaA3hYfyBWViBKELhh9DTIpqaj7mLBqF6kuXpooUCugnrrJ0bytKTOx6uWc1nKu9mGmhaTpNn67p2LQHE6iAmhQwgyxj6MFJOJWHzqLbBcqA117qxHE7NpssvG6whm2GLqm8B2W3zaIA8eVbLgmSCvGQ7YXSzikDopLEl8I0AwGvUnnkWQFeIgSff4GrHFBx8zgTcvy4azl1MXO5sTc6l6Va3iUdy1LDuekq7RDtciUKveQz6Ef6wA71LtfApEc~dXU~q1My0O6UZ7kn~KpDMWsVHZna6GLjhKOR9Iy2IsKnL1eQ__"></CardMedia>
					<Box>
						<Box
							sx={{
								px: "auto",
								height: { xs: 84, md: 140 },
							}}
						/>
						<Box
							sx={{
								border: "3px Dashed #22668D",
								px: "auto",
								width: { xs: 156, md: 260 },
								height: { xs: 84, md: 140 },
								bgcolor: "#DEC4FE",
								borderRadius: "100px",
							}}
						/>
					</Box>
					<Typography
						pt={2}
						variant="h6"
						fontWeight="800"
						display="block"
						noWrap={true}
						color="black">
						{"لوازم ورزشی"}
					</Typography>
				</IconButton>
			</Grid>
		</Grid>
	);
}

export default Sections;
