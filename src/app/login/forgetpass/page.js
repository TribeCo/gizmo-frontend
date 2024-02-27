import ForgetPassword from '@/components/ForgetPassword';
import { Box } from '@mui/material';

function ForgetPass() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url("https://gizmoshop.liara.run/images/media/pictures/Forget_pass.png")`, // Use the `url()` function
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ForgetPassword />
    </Box>
  );
}

export default ForgetPass;
