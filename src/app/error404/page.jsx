
import {
    Box, 
    Button, 
    Grid, 
    Typography,
} from '@mui/material';

import { Colors } from '@/utils';
import Link from 'next/link';


const Error404 = () => {
    return (
        <Box
            display='flex'
            justifyContent='flex-end'
            alignItems='center'
            sx={{
                backgroundImage: {
                    lg: `url("https://gizmoshop.liara.run/images/media/pictures/404-large.jpg")`,
                    xs: `url("https://gizmoshop.liara.run/images/media/pictures/404-small.jpg")`,
                },
                height: '100vh',
                width: 'auto',
                backgroundSize: 'cover',
                backgroundPosition: {xs: 'start', lg: 'center'},
                backgroundRepeat: 'no-repeat',
                backgroundColor: '8ECDDD',
            }}
        >

            <Grid
                display='flex'
                justifyContent='center'
                flexDirection='column'
                alignItems='center'
                wrap='nowrap'
                sx={{
                    mt: {xs: 10, sm: 85, md: 0},
                    width: {xs: '100%', lg: '50%'},
                }}
            >
                <Typography
                    fontWeight='bold'
                    color='rgba(37, 43, 72, 1)'
                    sx={{
                        fontSize: {xs: 35, md: 45, lg: 60},
                        mb: {xs: 2, lg: 3},
                    }}
                >
                    ای واااای!!
                </Typography>
                <Typography
                    fontWeight='bold'
                    color='rgba(37, 43, 72, 1)'
                    textAlign='center'
                    sx={{
                        fontSize: {xs: 25, md: 30, lg: 40},
                        width: {xs: 300, lg: 400},
                        mb: 3,
                    }}
                >
                    چیزی که میخواستی رو فضاییا بردن!!
                </Typography>

                <Link href='/'>
                    <Button
                        variant='contained'
                        sx={{
                            backgroundColor: Colors.orange,
                            borderRadius: '30px',
                            boxShadow: 'none',
                            ":hover": {
                                backgroundColor: Colors.orange,
                            }
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: 20, md: 25, lg: 30 },
                                px: {xs: 4, md: 6},
                            }}
                            fontWeight='bold'
                            color='rgba(37, 43, 72, 1)'
                        >
                            برگردیم به سایت
                        </Typography>
                    </Button>
                </Link>
            </Grid>
        </Box>
    )
}

export default Error404;