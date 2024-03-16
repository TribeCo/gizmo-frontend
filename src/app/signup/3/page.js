import SignUp3Component from '@/components/Login&SignUp/SignUp3Component';
import { Box } from '@mui/material';

function Login() {
  return (
    <Box
      sx={{
        minHeight: '100vh', // Use minHeight to allow the container to grow
        width: '100vw',
        backgroundImage: {
          lg: `url("https://gizmoshop.liara.run/images/media/pictures/Sign_up1.png")`,
          md: `url("https://gizmoshop.liara.run/images/media/pictures/Sign_up1.png")`,
          sm: 'none',
          xs: 'none',
        },
        backgroundSize: 'cover',
        backgroundPosition: {
          lg: 'center',
          md: 'left',
          sm: 'center',
          xs: 'center',
        },
        backgroundColor: {
          sm: '#8ECDDD',
          xs: '#8ECDDD',
        },
        backgroundRepeat: 'no-repeat',
        overflowY: 'auto', // Add vertical scrolling
      }}
    >
      <SignUp3Component />
    </Box>
  );
}

export default Login;
