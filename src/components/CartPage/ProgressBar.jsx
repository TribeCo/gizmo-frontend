import React from 'react';
import { Box } from '@mui/material';

const ProgressBar = ({ activeStep }) => {

    const defaultStrokeColor = "#22668D";
    const inactiveStrokeColor = "#747678";
    const defaultTextColor = "#213346";
    const inactiveTextColor = "#747678";
    const defaultFillColor = "#DDF0F5";
    const inactiveFillColor = "#FFFFFF";

    // Determine the stroke color for each step based on the active step
    const getStrokeColor = (step) => (activeStep >= step ? defaultStrokeColor : inactiveStrokeColor);
    const getTextColor = (step) => (activeStep >= step ? defaultTextColor : inactiveTextColor);
    const getFillColor = (step) => (activeStep == step ? defaultFillColor : inactiveFillColor);

    return (
        <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <Box
                component="svg"
                sx={{
                    width: { xs: '107px', sm: '172px', md: '228px', lg: '249px' },
                    height: { xs: '50px', sm: '60px', md: '70px', lg: '79px' },
                }}
                viewBox="0 0 249 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <svg width="249" height="79" viewBox="0 0 249 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.67 1.5C34.8792 1.5 33.1677 2.23885 31.9395 3.54216L2.74405 34.5233C1.17519 36.1881 1.10499 38.765 2.5809 40.5128L31.8673 75.1937C33.1023 76.6562 34.9193 77.5 36.8335 77.5H241C244.59 77.5 247.5 74.5899 247.5 71V8C247.5 4.41015 244.59 1.5 241 1.5H36.67Z" fill={getFillColor(0)} stroke={getStrokeColor(0)} strokeWidth="3" />
                    <image href="https://gizmoshop.liara.run/images/media/pictures/Cart.png" x="170" y="10" height="50px" width="50px" />
                    <text x="150" y="45" fontFamily="IRANSansMobile(FaNum)" fontSize="24" fontWeight={700} fill={getTextColor(0)}>سبد خرید</text>
                </svg>
            </Box>

            {/* SVG for step 2 */}
            <Box
                component="svg"
                sx={{
                    width: { xs: '115px', sm: '228px', md: '285px' },
                    height: { xs: '50px', sm: '60px', md: '79px' },
                }}
                viewBox="0 0 285 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <svg width="285" height="79" viewBox="0 0 285 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.4762 1.5C39.8135 1.5 38.2139 2.13722 37.0067 3.28058L3.20631 35.2916C1.36732 37.0332 1.32739 39.9489 3.11799 41.7402L36.9589 75.5952C38.1779 76.8148 39.8317 77.5 41.556 77.5H276.441C281.927 77.5 284.946 71.1247 281.47 66.8813L258.271 38.5581C257.799 37.9815 257.822 37.1457 258.324 36.5956L280.454 12.3854C284.266 8.21405 281.307 1.5 275.656 1.5H41.4762Z" fill={getFillColor(1)} stroke={getStrokeColor(1)} strokeWidth="3" />
                    <image href="https://gizmoshop.liara.run/images/media/pictures/Shipping.png" x="190" y="10" height="50px" width="50px" />
                    <text x="175" y="45" fontFamily="IRANSansMobile(FaNum)" fontSize="24" fontWeight={700} fill={getTextColor(1)}>اطلاعات ارسال</text>
                </svg>
            </Box>

            {/* SVG for step 3 */}

            <Box
                component="svg"
                sx={{
                    width: { xs: '115px', sm: '228px', md: '284px' },
                    height: { xs: '50px', sm: '60px', md: '79px' },
                }}
                viewBox="0 0 284 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <svg width="284" height="79" viewBox="0 0 284 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M273.923 1.5C280.042 1.5 282.771 9.18393 278.023 13.0437L249.218 36.4608C248.505 37.0403 248.476 38.1185 249.156 38.7357L279.414 66.1858C283.817 70.18 280.991 77.5 275.047 77.5H8C4.41016 77.5 1.5 74.5899 1.5 71V8C1.5 4.41015 4.41016 1.5 8 1.5H273.923Z" fill={getFillColor(2)} stroke={getStrokeColor(2)} strokeWidth="3" />
                    <image href="https://gizmoshop.liara.run/images/media/pictures/Receip.png" x="190" y="10" height="50px" width="50px" />
                    <text x="175" y="45" fontFamily="IRANSansMobile(FaNum)" fontSize="24" fontWeight={700} fill={getTextColor(2)}>اطلاعات پرداخت</text>
                </svg>
            </Box>

        </Box>
    );
};

export default ProgressBar;
