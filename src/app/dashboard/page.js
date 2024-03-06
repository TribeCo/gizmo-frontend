"use client";

import React from "react";
import { useState } from "react";
import {
    Paper,
    Grid,
    Typography,
    Box,
    SvgIcon,
    List,
    ListItemButton,
} from '@mui/material';
import { Colors } from "@/utils";
import Avatar from '@mui/material/Avatar';
import UserInfoPage from "@/components/dashboard/UserInfoPage";
import DashBoardEditProfile from "@/components/dashboard/DashBoardEditProfile";
import DashBoardAddress from "@/components/dashboard/DashBoardAddress";
import DashBoardNotifications from "@/components/dashboard/DashBoardNotifications";
import DashBoardOrders from "@/components/dashboard/DashBoardOrders";
import DashBoardDubaiOrders from "@/components/dashboard/DashBoardDubaiOrders";
import DashBoardFavoriteProduct from "@/components/dashboard/DashBoardFavoriteProduct";


const functionList = [
    <UserInfoPage />, // حساب کاربری
    <DashBoardEditProfile />, // ویرایش اطلاعات حساب
    <DashBoardAddress/>, // آدرس ها
    <DashBoardNotifications/>, // پیغام ها
    <DashBoardOrders/>, // سفارشات
    <DashBoardDubaiOrders/>, // استعلام قیمت
    , // پیگیری سفارش
    <DashBoardFavoriteProduct/>, // علاقه مندی ها
    , // خروج از حساب
]

export default function Profile() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };


    return (
        <Grid
            mt={6}
            mb={12}
            px={2}
            container
            display='flex'
            justifyContent='center'
            columnGap={2}
            rowGap={2}
        >
            <Grid
                item
                sx={{
                    display: { xs: 'none', xl: 'flex' }
                }}
            >
                <Paper
                    variant="outlined"
                    sx={{
                        px: '4rem',
                        py: '3rem',
                        mb: 2,
                        borderRadius: '15px',
                        boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Box
                        mb={5}
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                        flexWrap='wrap'
                    >
                        <Grid>
                            <Avatar
                                src='example-avatar-path'
                                sx={{
                                    width: 90,
                                    height: 90
                                }}
                            />
                        </Grid>

                        <Grid ml={2}>
                            <Typography
                                variant="h5"
                                fontWeight='bold'
                                fontSize={20}
                                sx={{ color: '#213346' }}
                            >
                                نام و نام خانوادگی
                            </Typography>
                            <Typography
                                pt={2}
                                variant="h5"
                                fontWeight='bold'
                                fontSize={20}
                                sx={{ color: '#213346' }}
                            >
                                ۰۹۱۷۰۵۳۲۷۴۸
                            </Typography>
                        </Grid>
                    </Box>
                    <List>
                        <ListItemButton
                            onClick={() => handleMenuItemClick(0)}
                            sx={{
                                borderRadius: '24px',
                                py: 3,
                                px: 3,
                                "&:hover": {
                                    backgroundColor: Colors.yellow,
                                    borderRadius: '24px',
                                },
                            }}
                        >
                            <SvgIcon width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4999 0.833008C14.047 0.833008 15.5307 1.44759 16.6247 2.54155C17.7187 3.63551 18.3333 5.11925 18.3333 6.66634C18.3333 8.21344 17.7187 9.69717 16.6247 10.7911C15.5307 11.8851 14.047 12.4997 12.4999 12.4997C10.9528 12.4997 9.46909 11.8851 8.37513 10.7911C7.28117 9.69717 6.66659 8.21344 6.66659 6.66634C6.66659 5.11925 7.28117 3.63551 8.37513 2.54155C9.46909 1.44759 10.9528 0.833008 12.4999 0.833008ZM12.4999 15.4163C18.9458 15.4163 24.1666 18.0268 24.1666 21.2497V24.1663H0.833252V21.2497C0.833252 18.0268 6.05409 15.4163 12.4999 15.4163Z" fill="#22668D" />
                            </SvgIcon>
                            <Typography
                                pl={2}
                                variant="h5"
                                fontWeight='bold'
                                fontSize={20}
                                sx={{ color: '#213346' }}
                            >
                                حساب کاربری
                            </Typography>
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleMenuItemClick(1)}
                            sx={{
                                borderRadius: '24px',
                                py: 3,
                                px: 3,
                                "&:hover": {
                                    backgroundColor: Colors.yellow,
                                    borderRadius: '24px',
                                },
                            }}
                        >
                            <SvgIcon width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.6458 14.1361L25.1874 15.5944L22.1978 12.6048L23.6562 11.1465C23.8061 10.9995 24.0077 10.9172 24.2176 10.9172C24.4276 10.9172 24.6292 10.9995 24.7791 11.1465L26.6458 13.0131C26.952 13.3194 26.952 13.8298 26.6458 14.1361ZM12.4999 22.2881L21.3374 13.4506L24.327 16.4402L15.5041 25.2923H12.4999V22.2881ZM12.4999 15.084C6.05408 15.084 0.833252 17.6944 0.833252 20.9173V23.834H9.58325V21.0777L15.4166 15.2444C14.4541 15.1277 13.477 15.084 12.4999 15.084ZM12.4999 0.500641C10.9528 0.500641 9.46909 1.11522 8.37513 2.20918C7.28117 3.30315 6.66658 4.78688 6.66658 6.33397C6.66658 7.88107 7.28117 9.3648 8.37513 10.4588C9.46909 11.5527 10.9528 12.1673 12.4999 12.1673C14.047 12.1673 15.5307 11.5527 16.6247 10.4588C17.7187 9.3648 18.3333 7.88107 18.3333 6.33397C18.3333 4.78688 17.7187 3.30315 16.6247 2.20918C15.5307 1.11522 14.047 0.500641 12.4999 0.500641Z" fill="#22668D" />
                            </SvgIcon>
                            <Typography
                                pl={2}
                                variant="h5"
                                fontWeight='bold'
                                fontSize={20}
                                sx={{ color: '#213346' }}
                            >
                                ویرایش اطلاعات حساب
                            </Typography>
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleMenuItemClick(2)}
                            sx={{
                                borderRadius: '24px',
                                py: 3,
                                px: 3,
                                "&:hover": {
                                    backgroundColor: Colors.yellow,
                                    borderRadius: '24px',
                                },
                            }}
                        >
                            <SvgIcon width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0003 0.333328C7.09495 0.333328 3.07495 4.34133 3.07495 9.23313C3.07495 11.1285 3.68035 12.8901 4.70485 14.3379L10.911 25.0668C11.7801 26.2023 12.3579 25.9866 13.0806 25.0068L19.9259 13.3578C20.0639 13.1076 20.1726 12.8412 20.267 12.5691C20.7014 11.5106 20.9248 10.3773 20.9247 9.23313C20.9249 4.34133 16.9062 0.333328 12.0003 0.333328ZM12.0003 4.50333C14.642 4.50333 16.7427 6.59913 16.7427 9.23313C16.7427 11.8671 14.642 13.962 12.0003 13.962C9.35875 13.962 7.25725 11.8674 7.25725 9.23313C7.25725 6.59913 9.35875 4.50363 12.0003 4.50363" fill="#22668D" />
                                <path d="M17.6739 15.0052L17.6595 15.043C17.664 15.0316 17.6676 15.0199 17.6721 15.0085L17.6739 15.0052ZM7.2018 21.0499C2.964 21.6487 0 23.0812 0 25.1899C0 28.0303 4.9524 30.3328 12 30.3328C19.0476 30.3328 24 28.0303 24 25.1899C24 23.0812 21.0363 21.6487 16.7988 21.0499L16.2117 22.0495C19.4055 22.4926 21.6 23.4238 21.6 24.5044C21.6 26.0194 17.3019 27.2473 12 27.2473C6.6981 27.2473 2.4 26.0194 2.4 24.5044C2.3997 23.4274 4.5798 22.4971 7.7835 22.0522C7.59 21.718 7.3956 21.3844 7.2018 21.0499Z" fill="#22668D" />
                            </SvgIcon>
                            <Typography
                                pl={2}
                                variant="h5"
                                fontWeight='bold'
                                fontSize={20}
                                sx={{ color: '#213346' }}
                            >
                                آدرس ها
                            </Typography>
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleMenuItemClick(3)}
                            sx={{
                                borderRadius: '24px',
                                py: 3,
                                px: 3,
                                "&:hover": {
                                    backgroundColor: Colors.yellow,
                                    borderRadius: '24px',
                                },
                            }}
                        >
                            <SvgIcon width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9999 1.87495C14.3205 1.87495 16.5461 2.79682 18.187 4.43776C19.828 6.0787 20.7499 8.3043 20.7499 10.6249V15.3299L23.0274 19.8849C23.1322 20.0946 23.1817 20.3276 23.1712 20.5617C23.1606 20.7959 23.0904 21.0235 22.9672 21.2229C22.8439 21.4223 22.6718 21.5868 22.467 21.701C22.2623 21.8151 22.0318 21.875 21.7974 21.8749H2.20237C1.96796 21.875 1.73744 21.8151 1.5327 21.701C1.32796 21.5868 1.15579 21.4223 1.03255 21.2229C0.909306 21.0235 0.839084 20.7959 0.828551 20.5617C0.818018 20.3276 0.867524 20.0946 0.972366 19.8849L3.24987 15.3299V10.6249C3.24987 8.3043 4.17174 6.0787 5.81268 4.43776C7.45362 2.79682 9.67922 1.87495 11.9999 1.87495ZM11.9999 4.37495C10.3423 4.37495 8.75255 5.03343 7.58045 6.20553C6.40835 7.37763 5.74987 8.96734 5.74987 10.6249V15.3299C5.74984 15.7179 5.65954 16.1005 5.48612 16.4474L4.02362 19.3749H19.9774L18.5149 16.4474C18.341 16.1006 18.2503 15.718 18.2499 15.3299V10.6249C18.2499 8.96734 17.5914 7.37763 16.4193 6.20553C15.2472 5.03343 13.6575 4.37495 11.9999 4.37495ZM18.0999 1.08745C18.3086 0.830132 18.611 0.666236 18.9406 0.63178C19.2701 0.597325 19.5999 0.695128 19.8574 0.903696C21.2111 1.99875 22.3221 3.36351 23.1199 4.9112C23.264 5.20509 23.2871 5.54381 23.1842 5.85455C23.0813 6.1653 22.8606 6.42328 22.5696 6.57307C22.2785 6.72286 21.9403 6.75249 21.6276 6.65561C21.3149 6.55873 21.0527 6.34306 20.8974 6.05495C20.2586 4.81567 19.3689 3.72291 18.2849 2.8462C18.0274 2.63761 17.8632 2.33531 17.8285 2.00574C17.7938 1.67618 17.8914 1.34633 18.0999 1.0887V1.08745ZM5.89987 1.08745C6.00326 1.21505 6.0805 1.36177 6.12716 1.51924C6.17382 1.67671 6.189 1.84182 6.17181 2.00516C6.15463 2.16849 6.10543 2.32684 6.02703 2.47115C5.94862 2.61546 5.84255 2.7429 5.71487 2.8462C4.63517 3.71934 3.74818 4.80679 3.10987 6.03995C3.03731 6.19045 2.93531 6.32488 2.80991 6.43529C2.68451 6.5457 2.53824 6.62985 2.37976 6.68277C2.22128 6.73568 2.0538 6.75629 1.88722 6.74337C1.72064 6.73044 1.55834 6.68426 1.40991 6.60754C1.26149 6.53082 1.12995 6.42512 1.02307 6.29669C0.916197 6.16827 0.836151 6.01972 0.787669 5.85983C0.739187 5.69993 0.723251 5.53194 0.740804 5.36579C0.758357 5.19963 0.809043 5.03868 0.889866 4.89245C1.68677 3.35241 2.79423 1.99426 4.14237 0.903696C4.4 0.69527 4.72985 0.597677 5.05941 0.632368C5.38898 0.667058 5.69128 0.831195 5.89987 1.0887V1.08745ZM8.24987 23.1249H15.7499C15.7499 23.788 15.4865 24.4239 15.0176 24.8927C14.5488 25.3616 13.9129 25.6249 13.2499 25.6249H10.7499C10.0868 25.6249 9.45094 25.3616 8.9821 24.8927C8.51326 24.4239 8.24987 23.788 8.24987 23.1249Z" fill="#22668D" />
                            </SvgIcon>
                            <Typography
                                pl={2}
                                variant="h5"
                                fontWeight='bold'
                                fontSize={20}
                                sx={{ color: '#213346' }}
                            >
                                پیغام ها
                            </Typography>
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleMenuItemClick(4)}
                            sx={{
                                borderRadius: '24px',
                                py: 3,
                                px: 3,
                                "&:hover": {
                                    backgroundColor: Colors.yellow,
                                    borderRadius: '24px',
                                },
                            }}
                        >
                            <SvgIcon width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.846 0.755443C13.2325 0.222144 14.7675 0.222144 16.154 0.755443L26.078 4.57144C26.6438 4.78929 27.1303 5.17345 27.4734 5.67329C27.8165 6.17312 28.0001 6.76518 28 7.37144V20.6234C28.0001 21.2297 27.8165 21.8218 27.4734 22.3216C27.1303 22.8214 26.6438 23.2056 26.078 23.4234L16.154 27.2414C14.7675 27.7747 13.2325 27.7747 11.846 27.2414L1.924 23.4234C1.35786 23.2059 0.870939 22.8219 0.527462 22.322C0.183985 21.8222 8.0285e-05 21.2299 0 20.6234V7.37144C8.0285e-05 6.76495 0.183985 6.17272 0.527462 5.67285C0.870939 5.17299 1.35786 4.78897 1.924 4.57144L11.846 0.755443ZM15.436 2.62144C14.5117 2.26591 13.4883 2.26591 12.564 2.62144L9.796 3.68744L20.976 7.91944L24.872 6.25144L15.436 2.62144ZM26 7.94144L15 12.6594V25.5154C15.148 25.4774 15.292 25.4314 15.436 25.3754L25.36 21.5594C25.5486 21.4867 25.7107 21.3585 25.8249 21.1917C25.9392 21.025 26.0002 20.8276 26 20.6254V7.94144ZM13 25.5134V12.6594L2 7.94344V20.6234C1.99979 20.8256 2.06083 21.023 2.17508 21.1897C2.28933 21.3565 2.45143 21.4847 2.64 21.5574L12.564 25.3734C12.708 25.4294 12.852 25.4754 13 25.5134ZM3.128 6.25144L14 10.9114L18.328 9.05544L6.994 4.76344L3.128 6.25144Z" fill="#22668D" />
                            </SvgIcon>
                            <Typography
                                pl={2}
                                variant="h5"
                                fontWeight='bold'
                                fontSize={20}
                                sx={{ color: '#213346' }}
                            >
                                سفارشات
                            </Typography>
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleMenuItemClick(5)}
                            sx={{
                                borderRadius: '24px',
                                py: 3,
                                px: 3,
                                "&:hover": {
                                    backgroundColor: Colors.yellow,
                                    borderRadius: '24px',
                                },
                            }}
                        >
                            <SvgIcon width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4664 3.6375L4.33513 12.7669C3.98555 13.1165 3.78823 13.5901 3.78612 14.0846C3.78401 14.579 3.97729 15.0542 4.32388 15.4069L12.5176 23.7506C12.8662 24.1051 13.3414 24.3067 13.8386 24.3109C14.3358 24.3151 14.8143 24.1217 15.1689 23.7731L24.4689 14.6456C24.7357 14.384 24.9478 14.0719 25.0927 13.7274C25.2376 13.383 25.3123 13.0131 25.3126 12.6394V4.6875C25.3126 4.19022 25.1151 3.71331 24.7635 3.36167C24.4118 3.01004 23.9349 2.8125 23.4376 2.8125H15.4558C15.0862 2.81258 14.7203 2.88548 14.379 3.02704C14.0376 3.1686 13.7275 3.37604 13.4664 3.6375ZM26.4414 16.6537C26.9747 16.13 27.3982 15.5053 27.6873 14.816C27.9764 14.1268 28.1253 13.3868 28.1251 12.6394V4.6875C28.1251 3.4443 27.6313 2.25201 26.7522 1.37294C25.8731 0.49386 24.6808 4.03553e-08 23.4376 4.03553e-08H15.4558C14.7168 -8.847e-05 13.9851 0.14542 13.3024 0.428211C12.6197 0.711003 11.9994 1.12554 11.477 1.64812L2.34575 10.7794C1.47237 11.6534 0.979431 12.837 0.974164 14.0727C0.968897 15.3083 1.45173 16.496 2.31763 17.3775L10.5114 25.7213C11.3824 26.608 12.57 27.1125 13.813 27.1238C15.056 27.135 16.2525 26.6521 17.1395 25.7812L26.4414 16.6537ZM19.4664 6.67125C18.8757 6.28833 18.2057 6.04469 17.507 5.95875C16.9539 5.89441 16.3934 5.95724 15.8683 6.14246C15.3432 6.32768 14.8673 6.63039 14.477 7.0275C13.4645 8.04 13.427 9.33375 13.6576 10.3406C13.8808 11.3269 14.3964 12.27 14.852 12.9844C15.3283 13.7344 15.7145 14.3569 15.8814 14.9213C16.0183 15.3881 15.9489 15.5813 15.7464 15.7838C15.6114 15.9188 15.4051 16.0163 14.9645 15.9075C14.4901 15.7875 13.8976 15.4444 13.3614 14.9081C12.9167 14.4541 12.6116 13.8821 12.482 13.26C12.3526 12.6431 12.4389 12.1913 12.5458 11.985C12.6354 11.8209 12.6913 11.6406 12.7104 11.4546C12.7295 11.2686 12.7113 11.0806 12.6569 10.9018C12.6025 10.7229 12.5129 10.5567 12.3935 10.4128C12.2741 10.2689 12.1271 10.1503 11.9613 10.0639C11.7955 9.97755 11.6141 9.92509 11.4278 9.90963C11.2415 9.89416 11.0539 9.91602 10.8761 9.9739C10.6983 10.0318 10.5339 10.1246 10.3924 10.2468C10.2509 10.369 10.1352 10.5182 10.052 10.6856C9.55888 11.6344 9.51013 12.795 9.7295 13.8394C9.86075 14.4619 10.097 15.0956 10.4458 15.6919L9.97138 16.1644C9.71509 16.4295 9.57318 16.7846 9.57621 17.1533C9.57924 17.5221 9.72696 17.8748 9.98757 18.1357C10.2482 18.3966 10.6008 18.5446 10.9695 18.548C11.3382 18.5514 11.6935 18.4098 11.9589 18.1537L12.3751 17.7394C12.9518 18.1513 13.5986 18.455 14.2839 18.6356C15.4089 18.9169 16.7233 18.7838 17.7339 17.7731C18.8814 16.6256 18.9076 15.2494 18.5795 14.13C18.2926 13.1512 17.6945 12.2137 17.2783 11.5612L17.2239 11.475C16.8245 10.8487 16.5151 10.23 16.3989 9.71813C16.2864 9.22875 16.3951 9.08625 16.4664 9.01688C16.5588 8.9173 16.6738 8.84145 16.8018 8.79576C16.9297 8.75006 17.0668 8.73587 17.2014 8.75438C17.5239 8.79188 18.0358 8.99063 18.6583 9.61125C19.277 10.23 19.4964 10.7362 19.562 11.0925C19.6234 11.4183 19.5794 11.7552 19.4364 12.0544C19.3529 12.2229 19.3041 12.4064 19.2928 12.5941C19.2815 12.7818 19.308 12.9699 19.3706 13.1472C19.4333 13.3245 19.5309 13.4874 19.6576 13.6263C19.7843 13.7653 19.9376 13.8773 20.1084 13.956C20.2793 14.0346 20.4641 14.0782 20.6521 14.0841C20.84 14.0901 21.0272 14.0583 21.2027 13.9906C21.3781 13.9229 21.5382 13.8207 21.6735 13.6901C21.8087 13.5594 21.9164 13.403 21.9901 13.23C22.3276 12.495 22.517 11.5819 22.3258 10.5675C22.1862 9.86855 21.9013 9.20674 21.4895 8.625L21.9039 8.21063C22.042 8.08188 22.1529 7.92663 22.2297 7.75413C22.3066 7.58164 22.3479 7.39542 22.3512 7.2066C22.3546 7.01779 22.3198 6.83023 22.2491 6.65513C22.1784 6.48003 22.0731 6.32096 21.9396 6.18743C21.806 6.05389 21.647 5.94862 21.4719 5.87789C21.2968 5.80717 21.1092 5.77243 20.9204 5.77577C20.7316 5.7791 20.5454 5.82043 20.3729 5.89729C20.2004 5.97415 20.0451 6.08496 19.9164 6.22312L19.4664 6.67125Z" fill="#22668D" />
                            </SvgIcon>

                            <Typography
                                pl={2}
                                variant="h5"
                                fontWeight='bold'
                                fontSize={20}
                                sx={{ color: '#213346' }}
                            >
                                استعلام قیمت
                            </Typography>
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleMenuItemClick(6)}
                            sx={{
                                borderRadius: '24px',
                                py: 3,
                                px: 3,
                                "&:hover": {
                                    backgroundColor: Colors.yellow,
                                    borderRadius: '24px',
                                },
                            }}
                        >
                            <SvgIcon width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.1794 10.1213C23.2666 10.0338 23.3156 9.91532 23.3156 9.7918C23.3156 9.66829 23.2666 9.54981 23.1794 9.46234L20.3682 6.64367C20.3029 6.57824 20.2197 6.53366 20.1291 6.51558C20.0385 6.49751 19.9445 6.50675 19.8591 6.54214C19.7737 6.57753 19.7008 6.63747 19.6495 6.71437C19.5983 6.79126 19.571 6.88165 19.5711 6.97407V8.39927H18.0778C17.9238 8.39927 17.6429 8.42167 17.4002 8.4422C15.5802 8.5962 13.8965 9.61167 13.021 11.3085L12.7653 11.8059V11.8069C12.2239 12.8615 11.6761 13.9302 11.0797 14.8421C10.3479 15.9621 9.76088 16.4903 9.36235 16.6219C9.07768 16.7153 8.62315 16.7722 8.12568 16.7937C7.76075 16.8095 7.47328 16.8049 7.27448 16.8011L7.10648 16.7993H5.13341C5.00965 16.7993 4.89095 16.8484 4.80343 16.936C4.71591 17.0235 4.66675 17.1422 4.66675 17.2659V19.1326C4.66675 19.2564 4.71591 19.3751 4.80343 19.4626C4.89095 19.5501 5.00965 19.5993 5.13341 19.5993H7.14288L7.22688 19.6011L7.48635 19.6049C7.69075 19.6058 7.95488 19.6049 8.24795 19.5909C8.80141 19.5675 9.57328 19.5003 10.2387 19.281C11.6341 18.8209 12.6747 17.5207 13.4233 16.3746C14.1083 15.3283 14.7318 14.1103 15.2657 13.0669L15.2666 13.065L15.2685 13.0622L15.5093 12.5918C15.9059 11.8237 16.6918 11.3122 17.6363 11.2319C17.7794 11.2201 17.9225 11.2095 18.0657 11.2002L18.0853 11.1993H19.5711V12.6105C19.5712 12.7028 19.5986 12.7931 19.6499 12.8698C19.7013 12.9466 19.7742 13.0064 19.8595 13.0416C19.9449 13.0769 20.0388 13.0861 20.1293 13.068C20.2199 13.0499 20.303 13.0053 20.3682 12.9399L23.1794 10.1213Z" fill="#22668D" />
                                <path d="M17.4002 19.5623C17.6429 19.5829 17.9238 19.6053 18.0769 19.6053H19.5702V21.0183C19.57 21.1109 19.5974 21.2014 19.6488 21.2783C19.7002 21.3553 19.7733 21.4152 19.8588 21.4505C19.9443 21.4858 20.0384 21.4949 20.1291 21.4766C20.2198 21.4583 20.3031 21.4135 20.3682 21.3478L23.1794 18.5291C23.2666 18.4417 23.3156 18.3232 23.3156 18.1997C23.3156 18.0762 23.2666 17.9577 23.1794 17.8702L20.3682 15.0515C20.3029 14.9861 20.2197 14.9415 20.1291 14.9234C20.0385 14.9054 19.9445 14.9146 19.8591 14.95C19.7737 14.9854 19.7008 15.0453 19.6495 15.1222C19.5983 15.1991 19.571 15.2895 19.5711 15.3819V16.8053H18.0853L18.0647 16.8043C17.9215 16.7951 17.7784 16.7845 17.6354 16.7726C16.8421 16.7054 16.1841 16.3647 15.7594 15.7991C15.6521 15.6563 15.4243 15.6461 15.3273 15.7973L14.0346 17.803C14.0057 17.8472 13.9932 17.9001 13.9992 17.9526C14.0051 18.0051 14.0292 18.0539 14.0673 18.0905C14.9792 18.9448 16.1545 19.4638 17.4002 19.5623ZM8.73328 8.4426C8.49062 8.42207 8.20968 8.39967 8.05661 8.39967H5.13341C5.00965 8.39967 4.89095 8.44883 4.80343 8.53635C4.71591 8.62387 4.66675 8.74256 4.66675 8.86633V10.733C4.66675 10.8568 4.71591 10.9755 4.80343 11.063C4.89095 11.1505 5.00965 11.1997 5.13341 11.1997H8.04821L8.06875 11.2006L8.16768 11.2071C8.25355 11.2127 8.36555 11.2221 8.49715 11.2323C9.44168 11.3126 10.0745 11.685 10.4711 12.4541C10.5841 12.6734 10.8809 12.6967 11.0097 12.4849C11.3979 11.8521 11.8954 10.9001 12.1353 10.4343C12.1784 10.3531 12.195 10.2604 12.1826 10.1693C12.1702 10.0782 12.1295 9.99331 12.0662 9.9266C11.1655 8.99793 10.0511 8.5546 8.73328 8.4426Z" fill="#22668D" />
                                <path d="M4.66667 -0.000335693C4.05383 -0.000335693 3.447 0.120371 2.88081 0.354893C2.31462 0.589415 1.80018 0.933159 1.36683 1.3665C0.491665 2.24167 0 3.42865 0 4.66633V23.333C0 24.5707 0.491665 25.7577 1.36683 26.6328C1.80018 27.0662 2.31462 27.4099 2.88081 27.6444C3.447 27.879 4.05383 27.9997 4.66667 27.9997H23.3333C24.571 27.9997 25.758 27.508 26.6332 26.6328C27.5083 25.7577 28 24.5707 28 23.333V4.66633C28 4.0535 27.8793 3.44666 27.6448 2.88047C27.4102 2.31429 27.0665 1.79984 26.6332 1.3665C26.1998 0.933159 25.6854 0.589415 25.1192 0.354893C24.553 0.120371 23.9462 -0.000335693 23.3333 -0.000335693H4.66667ZM1.86667 4.66633C1.86667 3.92372 2.16167 3.21153 2.68677 2.68643C3.21187 2.16133 3.92406 1.86633 4.66667 1.86633H23.3333C24.0759 1.86633 24.7881 2.16133 25.3132 2.68643C25.8383 3.21153 26.1333 3.92372 26.1333 4.66633V23.333C26.1333 24.0756 25.8383 24.7878 25.3132 25.3129C24.7881 25.838 24.0759 26.133 23.3333 26.133H4.66667C3.92406 26.133 3.21187 25.838 2.68677 25.3129C2.16167 24.7878 1.86667 24.0756 1.86667 23.333V4.66633Z" fill="#22668D" />
                            </SvgIcon>
                            <Typography
                                pl={2}
                                variant="h5"
                                fontWeight='bold'
                                fontSize={20}
                                sx={{ color: '#213346' }}
                            >
                                پیگیری سفارش
                            </Typography>
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleMenuItemClick(7)}
                            sx={{
                                borderRadius: '24px',
                                py: 3,
                                px: 3,
                                "&:hover": {
                                    backgroundColor: Colors.yellow,
                                    borderRadius: '24px',
                                },
                            }}
                        >
                            <SvgIcon width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.1459 2.65977C23.4766 1.9831 22.6793 1.44637 21.8005 1.08083C20.9217 0.715289 19.979 0.528249 19.0272 0.530601C18.0754 0.528249 17.1327 0.715289 16.2539 1.08083C15.3751 1.44637 14.5778 1.9831 13.9084 2.65977L13.5001 3.08268L13.0918 2.67435C11.738 1.32073 9.90202 0.560288 7.98761 0.560288C6.07321 0.560288 4.2372 1.32073 2.88345 2.67435C1.54742 4.03737 0.799072 5.8699 0.799072 7.77852C0.799072 9.68713 1.54742 11.5197 2.88345 12.8827L12.7564 22.7848C12.9614 22.9896 13.2394 23.1046 13.5293 23.1046C13.8191 23.1046 14.0971 22.9896 14.3022 22.7848L24.1751 12.8827C25.5116 11.5152 26.2575 9.67741 26.2521 7.76526C26.2466 5.8531 25.4903 4.01961 24.1459 2.65977Z" fill="#22668D" />
                            </SvgIcon>
                            <Typography
                                pl={2}
                                variant="h5"
                                fontWeight='bold'
                                fontSize={20}
                                sx={{ color: '#213346' }}
                            >
                                علاقه مندی ها
                            </Typography>
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleMenuItemClick(8)}
                            sx={{
                                borderRadius: '24px',
                                py: 3,
                                px: 3,
                                "&:hover": {
                                    backgroundColor: Colors.yellow,
                                    borderRadius: '24px',
                                },
                            }}
                        >
                            <SvgIcon width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.5 13L20.5 7.99997V11.75H10.5V14.25H20.5V18M23 20.5C21.4259 22.5988 19.2313 24.1491 16.7271 24.9314C14.2229 25.7136 11.5361 25.6881 9.04715 24.8585C6.55825 24.0289 4.39348 22.4372 2.85947 20.3088C1.32547 18.1805 0.5 15.6235 0.5 13C0.5 10.3764 1.32547 7.81941 2.85947 5.69109C4.39348 3.56277 6.55825 1.97106 9.04715 1.14143C11.5361 0.311795 14.2229 0.286298 16.7271 1.06855C19.2313 1.8508 21.4259 3.40114 23 5.49997H19.5875C18.1441 4.22705 16.3641 3.39765 14.4611 3.11129C12.558 2.82494 10.6128 3.09379 8.85874 3.88559C7.1047 4.67739 5.6164 5.95851 4.57241 7.5752C3.52843 9.1919 2.97312 11.0755 2.97312 13C2.97312 14.9244 3.52843 16.808 4.57241 18.4247C5.6164 20.0414 7.1047 21.3225 8.85874 22.1143C10.6128 22.9061 12.558 23.175 14.4611 22.8886C16.3641 22.6023 18.1441 21.7729 19.5875 20.5H23Z" fill="#BB0000" />
                            </SvgIcon>
                            <Typography
                                pl={2}
                                variant="h5"
                                fontWeight='bold'
                                fontSize={20}
                                sx={{ color: '#213346' }}
                            >
                                خروج از حساب
                            </Typography>
                        </ListItemButton>
                    </List>
                </Paper>
            </Grid>

            <Paper
                variant="outlined"
                sx={{
                    height: 'fit-content',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                {functionList[selectedMenuItem]}
            </Paper>
        </Grid>
    )
}