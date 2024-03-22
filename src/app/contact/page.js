"use client"
import { React, useState, useEffect } from 'react';
import { Typography, Box, Grid, Link } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import ContactUsTextfields from "@/components/ContactUsTextfields";
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Location icon
import EmailIcon from '@mui/icons-material/Email'; // Gmail icon
import LineSplitter from '@/components/LineSpliter';


function ContactUs() {
    const [gizmoinfo, setGizmoInfo] = useState([]);
    useEffect(() => {
        const fetchGizmo = async () => {
            try {
                const response = await fetch('https://gizmoshop.liara.run/api/config/aboutus/', {
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGizmoInfo(data.data);
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        };
        fetchGizmo();
    }, []);

    // URLs for the images
    const imageUrls = [
        "https://s3-alpha-sig.figma.com/img/84d6/2a8d/1dc6cd11416d5b4a06890e01f66dc3df?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BlO~lGDgOVAY3lL7LYxeyu2USrqg1XKJSXD7BOEGnj2O0-MOpoXbdpxziFDkA81Xh7mZ9XBpEZ~8Zoq19LAGTUpl2qdI5wg4AusY71WLZi7sIXWE43qLNsmyuasp7AMUiDYX0Ug5ailUZ4nolwD-6UMguUoJGazzfgD7UimdH7gfG~XU5cFEuUJfNqYFHjYQRMWmgpCCxnKCed1LoCmWqOEYbS6MgOdVXKdbUzH8Otmdfyrv6Cjfn7PRj8ola92~0QZv0SCgavEFzX2PJqnKzEuvPiNTHT3~lpa3NC9CxH~fj7NSC2PY2QpLud0B1mKdJJwCMFePvxviCTHDgQxiqg__", // Replace with actual URLs
        "https://s3-alpha-sig.figma.com/img/9344/c8df/cf4a10c14044ddd420119125b3f18e9a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e1eM3JzJAuo2J-TM7UWkFJHWRqisD640T44oK7D2YHzfBbosxCQ2JK8Qo4Lv~UXtg38zCNXi80LbFlswCC4lS9RQqpgwRAWHBGlBoyOxdwPkAp3gmWLUk4raNiauETRaFCy5YXqD8MD84eKhmPCHBOLu8-reH80V-U705K35FeaCSG5uQlhHdWicVwMFEIBHUuxbHB68vdymcqANaOWGTUahYpEZqr~b6DF6nd02H7lpvCgt-ZEXEnL69tg5ENi1EpuiBX7FsdRGra2hvIL~AaojipplhTp-7PC1m55gVe9K8mM5WYoMjG70aMv8a~rH6iF3kA3ppHkSqe7SAzOL~Q__",
        "https://s3-alpha-sig.figma.com/img/4027/d0fe/782207bf1cf3c2e43c7126871ecb7926?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PctKUDaN6SDYYEsL1yi2z~FcKBEagTBsNeAMRgwBculG0p9Ksi8gcvh8hTAbM~L8xegDjpu0ZvmcmevqJRFrOWPkV-xBcmNf9LS5flP5NM9jnx7jOP3EZbLL7hxCen6rzu64onEvNp4muh1R2OwIWVEpPrkF36wlYONSSgEs12BzZt5ijz6EdrxHxO1NHzqYLJvSe~arLXtlq2gg30p6TKXxWP-qaQQnyi8vqBmJ2sZPuD5PMfqR9GmylXBFRIioOo5KG~Vs76beVe4OwUOzSan1du~-nIAI4aCYbU-623pRTre2B-64ffk7MFWQ~xX0nxYeHh~7Q59GS~95B8fPKg__"
    ];

    const imageTexts = [
        "خرید آسان و راحت",
        "پشتیبانی",
        "محصولات با کیفیت و گسترده",
    ];

    // Explanatory texts for each image
    const imageExplanations = [
        "با طراحی کارپسندانه و ساده٬ شما به راحتی می‌توانید محصولات مورد نظر خود را جستجو کنید و با چند کلیک ساده آنها را به سبد خرید خود اضافه کنید.",
        "هر ساعتی از شبانه‌روز از طریق ایمیل٬ تلگرام٬ اینیستاگرام و سایت در کنار شما هستیم.",
        "ما در گیزموشاپ به ارائه محصولات با کیفیت و گسترده تعهد داریم. مجموعه‌ای از محصولات متنوع و با کیفیت را با دقت و بازبینی دقیق برای شما انتخاب کرده‌ایم.",
    ];

    return (
        <Box
            sx={{
                padding: { xs: 0, md: '20px' }, // Adjusted padding
                paddingX: { xs: 0, md: '50px' }
            }}>
            <LineSplitter text={"درباره گیزموشاپ"} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'auto',
                }}
            >
                {/* New Typography for the introduction text */}
                <Typography
                    sx={{
                        color: 'black',
                        fontWeight: '300',
                        paddingBottom: 8, // Add some space before the main title
                        paddingX: { xs: 4, md: 10 },
                        fontSize: { xs: '16px', md: '32px' },
                    }}
                >
                    گیزموشاپ یک سایت فروشگاهی است که در زمینه فروش وسایل الکتریکی فعالیت می‌کند. ما در گیزموشاپ به فروش انواع لوازم الکترونیکی و برقی، از جمله تلویزیون، موبایل، لپ تاپ، دوربین، لوازم خانگی و... می‌پردازیم. ما با ارائه محصولات با کیفیت و قیمت مناسب، تلاش می‌کنیم تا نیازهای مشتریان را به بهترین نحو برطرف کنیم. همچنین، در گیزموشاپ به عنوان یک فروشگاه آنلاین، سعی می‌کنیم تا فرآیند خرید را برای مشتریان ساده و راحت کنیم.            </Typography>
                {/* Typography for the main title */}
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: { xs: '26px', sm: '30px', md: '33px', lg: '36px' },
                        fontWeight: '900',
                        paddingBottom: 2
                    }}
                >
                    سوالی دارید؟!
                </Typography>
                <ContactUsTextfields />
                {/* Typography for the subtitle */}
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: { xs: '26px', sm: '30px', md: '33px', lg: '36px' },
                        fontWeight: '900',
                        paddingTop: 3
                    }}
                >
                    راه‌های ارتباط با ما
                </Typography>
                {/* Grid for contact info */}
                <Grid container spacing={4} sx={{ width: { xs: '100%', md: '80%' }, margin: 'auto', marginTop: 5 }}>
                    <Grid item xs={12} md={6} display="flex" alignItems="center">
                        <Link>
                            <Box
                                component="span"
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: { xs: 40, sm: 45, md: 45, lg: 50 },
                                    height: { xs: 40, sm: 45, md: 45, lg: 50 },
                                    borderRadius: { xs: '20%', md: '50%' },
                                    bgcolor: "#22668D",
                                    mr: 2,
                                }}
                            >
                                <LocalPhoneIcon sx={{ color: "white", fontSize: '2rem' }} />
                            </Box>
                        </Link>
                        <Typography sx={{ color: '#213346', fontSize: { xs: '20px', md: '28px' }, fontWeight: '500' }}>شماره تماس: {gizmoinfo.phone}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display="flex" alignItems="center">
                        <Link href={gizmoinfo.insta}>
                            <Box
                                component="span"
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: { xs: 40, sm: 45, md: 45, lg: 50 },
                                    height: { xs: 40, sm: 45, md: 45, lg: 50 },
                                    borderRadius: { xs: '20%', md: '50%' },
                                    bgcolor: "#22668D",
                                    mr: 2,
                                }}
                            >
                                <InstagramIcon sx={{ color: "white", fontSize: '2rem' }} />
                            </Box>
                        </Link>
                        <Typography variant="h6" sx={{ color: '#213346', fontSize: { xs: '20px', md: '28px' }, fontWeight: '500' }}>پیج اینستاگرام:‌ Gizmo_shop</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display="flex" alignItems="center">
                        <Link href={gizmoinfo.telegram}>
                            <Box
                                component="span"
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: { xs: 40, sm: 45, md: 45, lg: 50 },
                                    height: { xs: 40, sm: 45, md: 45, lg: 50 },
                                    borderRadius: { xs: '20%', md: '50%' },
                                    bgcolor: "#22668D",
                                    mr: 2,
                                }}
                            >
                                <TelegramIcon sx={{ color: "white", fontSize: '2rem' }} />
                            </Box>
                        </Link>
                        <Typography variant="h6" sx={{ color: '#213346', fontSize: { xs: '20px', md: '28px' }, fontWeight: '500' }}>کانال تلگرام</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display="flex" alignItems="center">
                        <Link>
                            <Box
                                component="span"
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: { xs: 40, sm: 45, md: 45, lg: 50 },
                                    height: { xs: 40, sm: 45, md: 45, lg: 50 },
                                    borderRadius: { xs: '20%', md: '50%' },
                                    bgcolor: "#22668D",
                                    mr: 2,
                                }}
                            >
                                <EmailIcon sx={{ color: "white", fontSize: '2rem' }} />
                            </Box>
                        </Link>
                        <Typography variant="h6" sx={{ color: '#213346', fontSize: { xs: '20px', md: '28px' }, fontWeight: '600' }}>{gizmoinfo.email}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display="flex" alignItems="center">
                        <Link>
                            <Box
                                component="span"
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: { xs: 40, sm: 45, md: 45, lg: 50 },
                                    height: { xs: 40, sm: 45, md: 45, lg: 50 },
                                    borderRadius: { xs: '20%', md: '50%' },
                                    bgcolor: "#22668D",
                                    mr: 2,
                                }}
                            >
                                <LocationOnIcon sx={{ color: "white", fontSize: '2rem' }} />
                            </Box>
                        </Link>
                        <Typography variant="h6" sx={{ color: '#213346', fontSize: { xs: '20px', md: '28px' }, fontWeight: '500' }}>آدرس: {gizmoinfo.address}</Typography>
                    </Grid>
                </Grid>
                {/* Grid for photos with text */}
                <Grid container spacing={2} justifyContent="center" sx={{ width: '100%', marginTop: 5, padding: 7 }}>
                    {imageUrls.map((url, index) => (
                        <Grid item xs={12} md={4} key={index} sx={{ textAlign: 'center' }}>
                            <Link href={url} target="_blank" rel="noopener noreferrer">
                                <Box component="img" src={url} sx={{ width: '20%', height: 'auto', margin: 'auto' }} />
                            </Link>
                            <Typography variant="h6" sx={{ color: '#252B48', marginTop: 2, fontWeight: 'bold', marginBottom: 1 }}>
                                {imageTexts[index]}
                            </Typography>
                            <Typography variant="body" sx={{ color: 'gray', marginTop: 1 }}>
                                {imageExplanations[index]}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}


export default ContactUs;
