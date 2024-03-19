'use client';

import { Colors } from "@/utils";
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogContentText, 
    DialogActions, 
    Button, 
    Typography,
} from "@mui/material";


const LogoutDialog = ({ logoutModalOpen, setLogoutModalOpen, handleLogout }) => {
    return (
        <Dialog
            open={logoutModalOpen}
            onClose={() => setLogoutModalOpen(false)}
            sx={{
                '& .MuiPaper-root': {
                    borderRadius: '20px',
                },
                '& .MuiDialog-paper': {
                    px: {xs: 1, sm: 2},
                    py: {xs: 0.5, sm: 1},
                }
            }}
        >
            <DialogTitle>
                <Typography
                    sx={{
                        fontSize: {xs: 18, sm: 20}
                    }}
                >
                    خروج از حساب کاربری
                </Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography
                        sx={{
                            fontSize: {xs: 14, sm: 18}
                        }}
                    >
                        از خروج از حساب کاربری مطمئن هستید؟
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => setLogoutModalOpen(false)}
                    variant="outlined"
                    sx={{
                        borderRadius: '20px',
                        borderColor: Colors.blue,
                        boxShadow: 'none',
                        ":hover": {
                            borderColor: Colors.blue,

                        }
                    }}
                >
                    <Typography 
                        sx={{ 
                            width: {xs: 35, sm: 45},
                            fontSize: {xs: 14, sm: 18},
                        }}
                    >
                        لغو
                    </Typography>
                </Button>
                <Button
                    variant="contained"
                    onClick={handleLogout}
                    sx={{
                        borderRadius: '20px',
                        bgcolor: '#ef5350',
                        boxShadow: 'none',
                        ":hover": {
                            bgcolor: '#ef5350',
                        }
                    }}
                >
                    <Typography 
                        sx={{
                            width: {xs: 35, sm: 45},
                            fontSize: {xs: 14, sm: 18},
                        }}
                        >
                        خروج
                    </Typography>
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LogoutDialog;