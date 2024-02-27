import LoginComponent from '@/components/LoginComponent';
import { Box } from '@mui/material';

function Login() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url("https://gizmoshop.liara.run/images/media/pictures/Log_in.png")`, // Use the `url()` function
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <LoginComponent />
    </Box>
  );
}

export default Login;
