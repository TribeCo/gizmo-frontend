"use client";

import LineSplitter from "@/components/LineSpliter";
import { Box, Button, Grid, Paper, SvgIcon, Typography } from "@mui/material";
import React, { useState } from "react";

import key from '@/components/siteIcons/key.png';
import distribution from '@/components/siteIcons/distribution.png';
import guarantee from '@/components/siteIcons/guarantee.png';
import logistics from '@/components/siteIcons/logistics.png';
import onlineShop from '@/components/siteIcons/online-shop.png';
import _return from '@/components/siteIcons/return.png';
import Image from "next/image";
import { Colors } from "@/utils";
import FaqQuestion from "@/components/FaqQuestion";

const FAQ = () => {
    const [faqComponent, setfaqComponent] = useState(0);

    const handleFaqChange = (id) => {
        console.log(id);
        setfaqComponent(id);
    }

    const boxList = [
        [<PaperIcon logo={key} text="ورود و ثبت نام" />],
        [<PaperIcon logo={onlineShop} text="ثبت سفارش" />],
        [<PaperIcon logo={distribution} text="پیگیری ارسال سفارش" />],
        [<PaperIcon logo={logistics} text="سفارشات دبی" />],
        [<PaperIcon logo={guarantee} text="ضمانت اصالت" />],
        [<PaperIcon logo={_return} text="بازگشت کلا" />],
    ];

    let page;
    if (faqComponent === 0) {
        page = (
            <>
                <Grid
                    mb={30}
                    px={3}
                    sx={{
                        gap: { xs: 3, sm: 4, md: 5 },
                        display: { xs: 'none', lg: 'flex' },
                        flexWrap: 'wrap',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Grid
                        sx={{
                            gap: { xs: 3, sm: 4, md: 5 },
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box onClick={() => handleFaqChange(1)}>{boxList[0]}</Box>
                        <Box onClick={() => handleFaqChange(2)}>{boxList[1]}</Box>
                        <Box onClick={() => handleFaqChange(3)}>{boxList[2]}</Box>
                        <Box onClick={() => handleFaqChange(4)}>{boxList[3]}</Box>
                    </Grid>
                    <Grid
                        sx={{
                            gap: { xs: 3, sm: 4, md: 5 },
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box onClick={() => handleFaqChange(5)}>{boxList[4]}</Box>
                        <Box onClick={() => handleFaqChange(6)}>{boxList[5]}</Box>
                    </Grid>
                </Grid>
                <Grid
                    mb={30}
                    px={3}
                    sx={{
                        gap: { xs: 3, sm: 4, md: 5 },
                        display: { xs: 'flex', lg: 'none' },
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box onClick={() => handleFaqChange(1)}>{boxList[0]}</Box>
                    <Box onClick={() => handleFaqChange(2)}>{boxList[1]}</Box>
                    <Box onClick={() => handleFaqChange(3)}>{boxList[2]}</Box>
                    <Box onClick={() => handleFaqChange(4)}>{boxList[3]}</Box>
                    <Box onClick={() => handleFaqChange(5)}>{boxList[4]}</Box>
                    <Box onClick={() => handleFaqChange(6)}>{boxList[5]}</Box>
                </Grid>
            </>
        );
    } else if (faqComponent === 1) {
        page = (
            <Grid mb={30}>
                <Grid
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='space-around'
                    px={1}
                >
                    <Grid
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Grid
                            sx={{
                                width: { xs: '50px', sm: '60px', md: '80px' },
                                height: { xs: '50px', sm: '60px', md: '80px' },
                            }}
                        >
                            <Image src={key} />
                        </Grid>
                        <Grid>
                            <Typography
                                pl={2}
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: 14, sm: 18, md: 20, lg: 24 }
                                }}
                            >
                                ورود و ثبت نام
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid>
                        <Button
                            onClick={() => handleFaqChange(0)}
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
                                    display: { xs: 'none', sm: 'flex' },
                                    pr: { xs: 0, sm: 1, md: 2 },
                                    fontSize: { xs: 13, sm: 14, md: 18, lg: 20 },
                                }}
                            >
                                بازگشت به صفحه موضوعات
                            </Typography>
                            <Grid
                                sx={{
                                    scale: { xs: '0.8', md: '0.9', lg: '1' },
                                }}
                            >
                                <SvgIcon width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.99992 7.50094L1.11617 8.38469L0.232422 7.50094L1.11617 6.61719L1.99992 7.50094ZM23.2499 17.5009C23.2499 17.8325 23.1182 18.1504 22.8838 18.3848C22.6494 18.6192 22.3314 18.7509 21.9999 18.7509C21.6684 18.7509 21.3505 18.6192 21.116 18.3848C20.8816 18.1504 20.7499 17.8325 20.7499 17.5009H23.2499ZM7.36617 14.6347L1.11617 8.38469L2.88367 6.61719L9.13367 12.8672L7.36617 14.6347ZM1.11617 6.61719L7.36617 0.367188L9.13367 2.13469L2.88367 8.38469L1.11617 6.61719ZM1.99992 6.25094H14.4999V8.75094H1.99992V6.25094ZM23.2499 15.0009V17.5009H20.7499V15.0009H23.2499ZM14.4999 6.25094C16.8206 6.25094 19.0462 7.17281 20.6871 8.81375C22.328 10.4547 23.2499 12.6803 23.2499 15.0009H20.7499C20.7499 13.3433 20.0914 11.7536 18.9193 10.5815C17.7472 9.40942 16.1575 8.75094 14.4999 8.75094V6.25094Z" fill="#213346" />
                                </SvgIcon>
                            </Grid>
                        </Button>
                    </Grid>
                </Grid>

                <Grid
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                >
                    <FaqQuestion
                        question="برای خرید حتما باید در سایت عضو باشم ؟"
                        answear="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان"
                    />
                    <FaqQuestion
                        question="برای خرید حتما باید در سایت عضو باشم ؟"
                        answear="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان"

                    />
                    <FaqQuestion
                        question="برای خرید حتما باید در سایت عضو باشم ؟"
                        answear="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان"
                    />
                </Grid>
            </Grid>
        );
    } else if (faqComponent === 2) {
        page = (
            <>
                <Grid mb={30}>
                    <Grid
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='space-around'
                        px={1}
                    >
                        <Grid
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Grid
                                sx={{
                                    width: { xs: '50px', sm: '60px', md: '80px' },
                                    height: { xs: '50px', sm: '60px', md: '80px' },
                                }}
                            >
                                <Image src={key} />
                            </Grid>
                            <Grid>
                                <Typography
                                    pl={2}
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: 14, sm: 18, md: 20, lg: 24 }
                                    }}
                                >
                                    ورود و ثبت نام
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid>
                            <Button
                                onClick={() => handleFaqChange(0)}
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
                                        display: { xs: 'none', sm: 'flex' },
                                        pr: { xs: 0, sm: 1, md: 2 },
                                        fontSize: { xs: 13, sm: 14, md: 18, lg: 20 },
                                    }}
                                >
                                    بازگشت به صفحه موضوعات
                                </Typography>
                                <Grid
                                    sx={{
                                        scale: { xs: '0.8', md: '0.9', lg: '1' },
                                    }}
                                >
                                    <SvgIcon width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.99992 7.50094L1.11617 8.38469L0.232422 7.50094L1.11617 6.61719L1.99992 7.50094ZM23.2499 17.5009C23.2499 17.8325 23.1182 18.1504 22.8838 18.3848C22.6494 18.6192 22.3314 18.7509 21.9999 18.7509C21.6684 18.7509 21.3505 18.6192 21.116 18.3848C20.8816 18.1504 20.7499 17.8325 20.7499 17.5009H23.2499ZM7.36617 14.6347L1.11617 8.38469L2.88367 6.61719L9.13367 12.8672L7.36617 14.6347ZM1.11617 6.61719L7.36617 0.367188L9.13367 2.13469L2.88367 8.38469L1.11617 6.61719ZM1.99992 6.25094H14.4999V8.75094H1.99992V6.25094ZM23.2499 15.0009V17.5009H20.7499V15.0009H23.2499ZM14.4999 6.25094C16.8206 6.25094 19.0462 7.17281 20.6871 8.81375C22.328 10.4547 23.2499 12.6803 23.2499 15.0009H20.7499C20.7499 13.3433 20.0914 11.7536 18.9193 10.5815C17.7472 9.40942 16.1575 8.75094 14.4999 8.75094V6.25094Z" fill="#213346" />
                                    </SvgIcon>
                                </Grid>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                    >
                    //TODO: replace FaqQuestion components here
                    </Grid>
                </Grid>
            </>
        );
    } else if (faqComponent === 3) {
        page = (
            <>
                <Grid mb={30}>
                    <Grid
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='space-around'
                        px={1}
                    >
                        <Grid
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Grid
                                sx={{
                                    width: { xs: '50px', sm: '60px', md: '80px' },
                                    height: { xs: '50px', sm: '60px', md: '80px' },
                                }}
                            >
                                <Image src={key} />
                            </Grid>
                            <Grid>
                                <Typography
                                    pl={2}
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: 14, sm: 18, md: 20, lg: 24 }
                                    }}
                                >
                                    ورود و ثبت نام
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid>
                            <Button
                                onClick={() => handleFaqChange(0)}
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
                                        display: { xs: 'none', sm: 'flex' },
                                        pr: { xs: 0, sm: 1, md: 2 },
                                        fontSize: { xs: 13, sm: 14, md: 18, lg: 20 },
                                    }}
                                >
                                    بازگشت به صفحه موضوعات
                                </Typography>
                                <Grid
                                    sx={{
                                        scale: { xs: '0.8', md: '0.9', lg: '1' },
                                    }}
                                >
                                    <SvgIcon width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.99992 7.50094L1.11617 8.38469L0.232422 7.50094L1.11617 6.61719L1.99992 7.50094ZM23.2499 17.5009C23.2499 17.8325 23.1182 18.1504 22.8838 18.3848C22.6494 18.6192 22.3314 18.7509 21.9999 18.7509C21.6684 18.7509 21.3505 18.6192 21.116 18.3848C20.8816 18.1504 20.7499 17.8325 20.7499 17.5009H23.2499ZM7.36617 14.6347L1.11617 8.38469L2.88367 6.61719L9.13367 12.8672L7.36617 14.6347ZM1.11617 6.61719L7.36617 0.367188L9.13367 2.13469L2.88367 8.38469L1.11617 6.61719ZM1.99992 6.25094H14.4999V8.75094H1.99992V6.25094ZM23.2499 15.0009V17.5009H20.7499V15.0009H23.2499ZM14.4999 6.25094C16.8206 6.25094 19.0462 7.17281 20.6871 8.81375C22.328 10.4547 23.2499 12.6803 23.2499 15.0009H20.7499C20.7499 13.3433 20.0914 11.7536 18.9193 10.5815C17.7472 9.40942 16.1575 8.75094 14.4999 8.75094V6.25094Z" fill="#213346" />
                                    </SvgIcon>
                                </Grid>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                    >
                    //TODO: replace FaqQuestion components here
                    </Grid>
                </Grid>
            </>
        );
    } else if (faqComponent === 4) {
        page = (
            <>
                <Grid mb={30}>
                    <Grid
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='space-around'
                        px={1}
                    >
                        <Grid
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Grid
                                sx={{
                                    width: { xs: '50px', sm: '60px', md: '80px' },
                                    height: { xs: '50px', sm: '60px', md: '80px' },
                                }}
                            >
                                <Image src={key} />
                            </Grid>
                            <Grid>
                                <Typography
                                    pl={2}
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: 14, sm: 18, md: 20, lg: 24 }
                                    }}
                                >
                                    ورود و ثبت نام
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid>
                            <Button
                                onClick={() => handleFaqChange(0)}
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
                                        display: { xs: 'none', sm: 'flex' },
                                        pr: { xs: 0, sm: 1, md: 2 },
                                        fontSize: { xs: 13, sm: 14, md: 18, lg: 20 },
                                    }}
                                >
                                    بازگشت به صفحه موضوعات
                                </Typography>
                                <Grid
                                    sx={{
                                        scale: { xs: '0.8', md: '0.9', lg: '1' },
                                    }}
                                >
                                    <SvgIcon width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.99992 7.50094L1.11617 8.38469L0.232422 7.50094L1.11617 6.61719L1.99992 7.50094ZM23.2499 17.5009C23.2499 17.8325 23.1182 18.1504 22.8838 18.3848C22.6494 18.6192 22.3314 18.7509 21.9999 18.7509C21.6684 18.7509 21.3505 18.6192 21.116 18.3848C20.8816 18.1504 20.7499 17.8325 20.7499 17.5009H23.2499ZM7.36617 14.6347L1.11617 8.38469L2.88367 6.61719L9.13367 12.8672L7.36617 14.6347ZM1.11617 6.61719L7.36617 0.367188L9.13367 2.13469L2.88367 8.38469L1.11617 6.61719ZM1.99992 6.25094H14.4999V8.75094H1.99992V6.25094ZM23.2499 15.0009V17.5009H20.7499V15.0009H23.2499ZM14.4999 6.25094C16.8206 6.25094 19.0462 7.17281 20.6871 8.81375C22.328 10.4547 23.2499 12.6803 23.2499 15.0009H20.7499C20.7499 13.3433 20.0914 11.7536 18.9193 10.5815C17.7472 9.40942 16.1575 8.75094 14.4999 8.75094V6.25094Z" fill="#213346" />
                                    </SvgIcon>
                                </Grid>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                    >
                    //TODO: replace FaqQuestion components here
                    </Grid>
                </Grid>
            </>
        );
    } else if (faqComponent === 5) {
        page = (
            <>
                <Grid mb={30}>
                    <Grid
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='space-around'
                        px={1}
                    >
                        <Grid
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Grid
                                sx={{
                                    width: { xs: '50px', sm: '60px', md: '80px' },
                                    height: { xs: '50px', sm: '60px', md: '80px' },
                                }}
                            >
                                <Image src={key} />
                            </Grid>
                            <Grid>
                                <Typography
                                    pl={2}
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: 14, sm: 18, md: 20, lg: 24 }
                                    }}
                                >
                                    ورود و ثبت نام
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid>
                            <Button
                                onClick={() => handleFaqChange(0)}
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
                                        display: { xs: 'none', sm: 'flex' },
                                        pr: { xs: 0, sm: 1, md: 2 },
                                        fontSize: { xs: 13, sm: 14, md: 18, lg: 20 },
                                    }}
                                >
                                    بازگشت به صفحه موضوعات
                                </Typography>
                                <Grid
                                    sx={{
                                        scale: { xs: '0.8', md: '0.9', lg: '1' },
                                    }}
                                >
                                    <SvgIcon width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.99992 7.50094L1.11617 8.38469L0.232422 7.50094L1.11617 6.61719L1.99992 7.50094ZM23.2499 17.5009C23.2499 17.8325 23.1182 18.1504 22.8838 18.3848C22.6494 18.6192 22.3314 18.7509 21.9999 18.7509C21.6684 18.7509 21.3505 18.6192 21.116 18.3848C20.8816 18.1504 20.7499 17.8325 20.7499 17.5009H23.2499ZM7.36617 14.6347L1.11617 8.38469L2.88367 6.61719L9.13367 12.8672L7.36617 14.6347ZM1.11617 6.61719L7.36617 0.367188L9.13367 2.13469L2.88367 8.38469L1.11617 6.61719ZM1.99992 6.25094H14.4999V8.75094H1.99992V6.25094ZM23.2499 15.0009V17.5009H20.7499V15.0009H23.2499ZM14.4999 6.25094C16.8206 6.25094 19.0462 7.17281 20.6871 8.81375C22.328 10.4547 23.2499 12.6803 23.2499 15.0009H20.7499C20.7499 13.3433 20.0914 11.7536 18.9193 10.5815C17.7472 9.40942 16.1575 8.75094 14.4999 8.75094V6.25094Z" fill="#213346" />
                                    </SvgIcon>
                                </Grid>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                    >
                    //TODO: replace FaqQuestion components here
                    </Grid>
                </Grid>
            </>
        );
    } else if (faqComponent === 6) {
        page = (
            <>
                <Grid mb={30}>
                    <Grid
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='space-around'
                        px={1}
                    >
                        <Grid
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Grid
                                sx={{
                                    width: { xs: '50px', sm: '60px', md: '80px' },
                                    height: { xs: '50px', sm: '60px', md: '80px' },
                                }}
                            >
                                <Image src={key} />
                            </Grid>
                            <Grid>
                                <Typography
                                    pl={2}
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: 14, sm: 18, md: 20, lg: 24 }
                                    }}
                                >
                                    ورود و ثبت نام
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid>
                            <Button
                                onClick={() => handleFaqChange(0)}
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
                                        display: { xs: 'none', sm: 'flex' },
                                        pr: { xs: 0, sm: 1, md: 2 },
                                        fontSize: { xs: 13, sm: 14, md: 18, lg: 20 },
                                    }}
                                >
                                    بازگشت به صفحه موضوعات
                                </Typography>
                                <Grid
                                    sx={{
                                        scale: { xs: '0.8', md: '0.9', lg: '1' },
                                    }}
                                >
                                    <SvgIcon width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.99992 7.50094L1.11617 8.38469L0.232422 7.50094L1.11617 6.61719L1.99992 7.50094ZM23.2499 17.5009C23.2499 17.8325 23.1182 18.1504 22.8838 18.3848C22.6494 18.6192 22.3314 18.7509 21.9999 18.7509C21.6684 18.7509 21.3505 18.6192 21.116 18.3848C20.8816 18.1504 20.7499 17.8325 20.7499 17.5009H23.2499ZM7.36617 14.6347L1.11617 8.38469L2.88367 6.61719L9.13367 12.8672L7.36617 14.6347ZM1.11617 6.61719L7.36617 0.367188L9.13367 2.13469L2.88367 8.38469L1.11617 6.61719ZM1.99992 6.25094H14.4999V8.75094H1.99992V6.25094ZM23.2499 15.0009V17.5009H20.7499V15.0009H23.2499ZM14.4999 6.25094C16.8206 6.25094 19.0462 7.17281 20.6871 8.81375C22.328 10.4547 23.2499 12.6803 23.2499 15.0009H20.7499C20.7499 13.3433 20.0914 11.7536 18.9193 10.5815C17.7472 9.40942 16.1575 8.75094 14.4999 8.75094V6.25094Z" fill="#213346" />
                                    </SvgIcon>
                                </Grid>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                    >
                    //TODO: replace FaqQuestion components here
                    </Grid>
                </Grid>
            </>
        );
    }

    return (
        <>
            <LineSplitter text="سوالات متداول" />
            {page}
        </>
    )
}


const PaperIcon = ({ logo, text }) => {
    return (
        <Paper
            sx={{
                width: { xs: '125px', sm: '175px', md: '200px' },
                height: { xs: '125px', sm: '175px', md: '200px' },
                borderRadius: '30px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: '0.3s',
                '&:hover': {
                    scale: '1.05',
                }
            }}
        >
            <Grid
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: { xs: '60px', sm: '80px', md: '100px' },
                        height: { xs: '60px', sm: '80px', md: '100px' },
                    }}
                >
                    <Image src={logo} />
                </Box>
                <Typography
                    variant="h6"
                    fontWeight='bold'
                    textAlign='center'
                    sx={{
                        fontSize: { xs: 12, sm: 18, md: 20 },
                        mt: 1,
                    }}
                >
                    {text}
                </Typography>
            </Grid>
        </Paper>
    )
}


export default FAQ;