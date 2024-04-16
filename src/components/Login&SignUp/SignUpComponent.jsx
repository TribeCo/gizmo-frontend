"use client"
import React, { useEffect, useState } from 'react';
import { Card, Box, Typography, Divider, TextField, Button } from '@mui/material';
import AuthContext from "@/context/AuthContext";
import * as Yup from "yup";
const SignUpComponent = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [displayValue, setDisplayValue] = useState('');
    const toPersianDigits = (num) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return num.replace(/\d/g, x => persianDigits[x]);
    };

    useEffect(() => {
        setDisplayValue(toPersianDigits(phoneNumber));
    }, [phoneNumber]);

    // Handle phone number change, allow only digits
    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const currentDisplayValue = toPersianDigits(phoneNumber);
        if (input !== currentDisplayValue) {
            const newValue = input.replace(/[^\d۰۱۲۳۴۵۶۷۸۹]/g, '').replace(/[۰۱۲۳۴۵۶۷۸۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
            setPhoneNumber(newValue);
        }
    };
    // form variables
    const [fullName, setFullname] = useState("");
    const [confirmationCode, setConfirmationCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmaiton] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [policyAgreed, setPolicyAgreed] = useState(false);
    const [phoneEnter, setPhoneEnter] = useState(false);
    const [phoneValidate, setPhoneValidate] = useState(false);
    const [informationComplition, setInformationComplition] = useState(false);

    // validation error variables
    const [errors, setErrors] = useState({});

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required("نام و نام خانوادگی الزامی است"),
        phoneNumber: Yup.string()
            .min(11, "تلفن همراه ۱۱ رقم است")
            .max(11, "تلفن همراه ۱۱ رقم است")
            .required("تلفن همراه الزامی است"),
        email: Yup.string()
            .email("ایمیل وارد شده معتبر نیست")
            .required("ایمیل الزامی است"),
        password: Yup.string()
            .required("رمز عبور الزامی است")
            .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد")
            .test(
                "password-complexity",
                "رمز عبور باید شامل حروف بزرگ و کوچک، اعداد و کاراکترهای ویژه باشد",
                (value) =>
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value),
            ),
        confirmation: Yup.string()
            .oneOf(
                [Yup.ref("password"), null],
                "تکرار رمز عبور باید با رمز عبور مطابقت داشته باشد",
            )
            .required("تکرار رمز عبور الزامی است"),
        policyAgreed: Yup.boolean().oneOf(
            [true],
            "شما باید با قوانین سایت موافقت کنید",
        ),
    });

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmationVisibility = () => {
        setShowConfirmation(!showConfirmation);
    };

    const handleAgreeChange = (event) => {
        setPolicyAgreed(event.target.checked);
    };

    const handleSignup = async (event) => {
        event.preventDefault();

        console.log("validating phone number");

        const isValidated = await confirmPhoneSignUpCode(
            phoneNumber,
            parseInt(confirmationCode, 10),
        );

        if (isValidated === 1) {
            console.log("validated");
            setPhoneValidate(true);
        }
    };

    const handleCompleteInfo = async (event) => {
        event.preventDefault();

        console.log("complete info");

        const isCompleted = await completeSignupInformation(
            phoneNumber,
            firstName,
            lastName,
            email,
            password,
        );

        if (isCompleted === 1) {
            setInformationComplition(true);
            onClose();
        }
    };

    const handleSendCode = async (event) => {
        event.preventDefault();
        // try {
        //     await validationSchema.validate({
        //         fullName,
        //         phoneNumber,
        //         email,
        //         password,
        //         confirmation,
        //         policyAgreed,
        //     }, { abortEarly: false });
        // Handle form submission if validation succeeds

        console.log("signup running");

        const isSignedUp = await signUp(phoneNumber);

        if (isSignedUp === 1) {
            console.log("here here");
            setPhoneEnter(true);
        }

        // } catch (validationErrors) {
        //   // Update the errors state with the validation errors
        //   const newErrors = {};
        //   validationErrors.inner.forEach(error => {
        //     newErrors[error.path] = error.message;
        //   });
        //   setErrors(newErrors);
        // }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                width: { xs: 340, sm: 410, md: 430, lg: 460 },
            }}
        >
            {/* Floating Typography above the Card */}
            <Box
                sx={{
                    position: 'relative',
                    top: 17,
                    textAlign: 'center',
                    color: '#213346',
                    borderRadius: '20px 20px 0 0',
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: {
                            lg: '2.25rem', // Larger text size for large screens
                            md: '2.25rem', // Slightly smaller text size for medium screens
                            sm: '2rem', // Even smaller text size for small screens
                            xs: '1.75rem', // Smallest text size for extra-small screens
                        },
                        letterSpacing: '-0.10rem', // Adjust letter spacing to make text more compressed
                    }}
                >
                    به گیزمو شاپ خوش اومدین !
                </Typography>
            </Box>
            <Card
                sx={{
                    width: { xs: '95%', sm: '100%', md: '100%' }, // Adjust card width based on screen size
                    height: 'auto', // Adjust card height based on screen size
                    backgroundColor: 'rgba(189, 221, 231, 0.90)', // Adjust the alpha value as needed
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    borderRadius: '20px',
                    border: '2px solid #FFFFFF',
                }}
            >
                {/* Typography for the title */}
                <Typography sx={{
                    color: '#213346', fontWeight: 'bold', padding: '10px', marginTop: '10px', fontSize: {
                        lg: '1.5rem', // Larger text size for large screens
                        md: '1.5rem', // Slightly smaller text size for medium screens
                        sm: '1.25rem', // Even smaller text size for small screens
                        xs: '1rem', // Smallest text size for extra-small screens
                    },
                }}>
                    ورود / ثبت نام
                </Typography>
                {/* Line divider */}
                <Divider sx={{ width: '90%', marginBottom: { xs: 1, md: 3 }, borderColor: 'rgba(0, 0, 0, 0.42)' }} />
                {phoneEnter && phoneValidate ? (
                    <>
                        <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}>نام و نام خانوادگی:</Typography>
                        <TextField
                            variant="outlined"
                            value={fullName}
                            onChange={(e) => setFullname(e.target.value)}
                            sx={{ backgroundColor: '#FFFFFF', borderRadius: '20px', marginBottom: '5px', '& .MuiOutlinedInput-root': { borderRadius: '20px' } }}
                            error={errors.fullName}{/*change firstname*/}
                            helperText={errors.fullName}
                        />
                    </>
                ) : (
                    <></>
                )}
                {!phoneEnter ? (
                    <>
                        <Typography sx={{ padding: 1, paddingLeft: { xs: 3, md: 4 }, alignSelf: 'flex-start', fontSize: '13.8px', fontWeight: '500' }}>شماره تلفن:</Typography>
                        <TextField
                            variant="outlined"
                            value={displayValue} // Use displayValue for rendering
                            onChange={handlePhoneNumberChange}
                            InputLabelProps={{ style: { color: '#000' } }}
                            sx={{
                                width: '90%',
                                marginBottom: { xs: '15px', md: '30px' },
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                    '& fieldset': { borderColor: '#FFFFFF' },
                                },
                                backgroundColor: '#FFFFFF',
                            }}
                            error={errors.phoneNumber}
                            helperText={errors.phoneNumber}
                        />
                    </>
                ) : (
                    <></>
                )}
                {phoneEnter && !phoneValidate ? (
                    <>
                        <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> لطفا کد ارسال شده را وارد نمایید: </Typography>
                        <TextField
                            variant="outlined"
                            value={confirmationCode}
                            onChange={(e) => setConfirmationCode(e.target.value)}
                            sx={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                },
                            }}
                            error={errors.phoneNumber}
                            helperText={errors.phoneNumber}
                        />
                    </>
                ) : (
                    <></>
                )}
                {phoneEnter && phoneValidate ? (
                    <>
                        <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}>آدرس ایمیل:</Typography>
                        <TextField
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ backgroundColor: '#FFFFFF', borderRadius: '20px', marginBottom: '5px', '& .MuiOutlinedInput-root': { borderRadius: '20px' } }}
                            error={errors.email}
                            helperText={errors.email}
                        />
                        {/* Similar setup as your LoginComponent */}
                        <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}>رمز عبور:</Typography>
                        <TextField
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            sx={{ color: '#22668D' }}
                                            aria-label="toggle password visibility"
                                            onClick={handleTogglePasswordVisibility}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityIcon sx={{ color: '#22668D' }} /> : <VisibilityOffIcon sx={{ color: '#22668D' }} />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                },
                                marginBottom: '5px',
                            }}
                            error={errors.password}
                            helperText={errors.password}
                        />
                        <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}>تکرار رمز عبور:</Typography>
                        <TextField
                            variant="outlined"
                            type={showConfirmation ? "text" : "password"}
                            value={confirmation}
                            onChange={(e) => setConfirmaiton(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            sx={{ color: '#22668D' }}
                                            aria-label="toggle password visibility"
                                            onClick={handleToggleConfirmationVisibility}
                                            edge="end"
                                        >
                                            {showConfirmation ? <VisibilityIcon sx={{ color: '#22668D' }} /> : <VisibilityOffIcon sx={{ color: '#22668D' }} />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                },
                                marginBottom: '10px',
                            }}
                            error={errors.confirmation}
                            helperText={errors.confirmation}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={policyAgreed}
                                    onChange={handleAgreeChange}
                                    name="agreement"
                                    color="primary"
                                />
                            }
                            label={
                                <Typography variant="body1">
                                    با قوانین و مقررات سایت موافقم
                                </Typography>
                            }
                            sx={{
                                paddingLeft: '10px',
                                '& .MuiTypography-body1': { // Targeting the Typography component
                                    fontSize: '0.875rem', // Smaller font size
                                },
                                '& .MuiCheckbox-root': { // Targeting the Checkbox component
                                    borderRadius: '2px', // Small amount of borderRadius
                                },
                            }}
                            error={!!errors.policyAgreed}
                            helperText={errors.policyAgreed}
                        />
                    </>
                ) : (
                    <></>
                )}
                {!phoneEnter || !phoneValidate ? (
                    <>
                        <Button
                            variant="contained"
                            onClick={handleSendCode}
                            sx={{
                                backgroundColor: '#FFCC70', // Button background color
                                '&:hover': {
                                    bgcolor: '#FFCC70',
                                    opacity: 0.9,
                                },
                                borderRadius: '25px',
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '18px',
                                width: '90%',
                                padding: '10px 0',
                                mb: 5,
                            }}
                        >
                            ادامه
                        </Button>
                    </>
                ) : (
                    <></>
                )}
                {phoneEnter && phoneValidate ? (
                    <>
                        <Button
                            variant="contained"
                            color="warning"
                            onClick={handleCompleteInfo}
                            fullWidth
                            sx={{
                                color: "black",
                                bgcolor: "#FFCC70",
                                marginTop: "5%",
                                marginBottom: "5%",
                                borderRadius: "20px",
                            }}>
                            <Typography
                                variant="h5"
                                align="center"
                                id="login-button">
                                ثبت نام
                            </Typography>
                        </Button>
                        {/* <FormControlLabel
                            control={
                                <Checkbox
                                    checked={policyAgreed}
                                    onChange={handleAgreeChange}
                                />
                            }
                            label={
                                <Typography variant="body1">
                                    <span style={{ color: "red", marginLeft: "4px" }}>*</span>
                                    <span>با قوانین سایت موافقم</span>
                                </Typography>
                            }
                            error={!!errors.policyAgreed}
                            helperText={errors.policyAgreed}
                        /> */}
                    </>
                ) : (
                    <></>
                )}
            </Card>
        </Box>
    );
};

export default SignUpComponent;