import { LoginForm } from '@/components/auth';
import { useAuth } from '@/hooks';
import { LoginPayload } from '@/models';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Login(props: any) {
    const router = useRouter();

    const { login, logout, profile } = useAuth({
        revalidateOnMount: false,
    });

    // async function handleLogin() {
    //     try {
    //         await login();

    //         router.push('/about')
    //     } catch (error) {
    //         console.log('field to login', error);
    //     }
    // }

    async function handleGetProfile() {
        try {
            await profile();
        } catch (error) {
            console.log('field to get profile', error);
        }
    }

    async function handleLogout() {
        try {
            await logout();
            console.log('redirect to login page');
        } catch (error) {
            console.log('field to logout', error);
        }
    }

    async function handleLoginSubmit(payload: LoginPayload) {
        try {
            await login(payload);

            router.push('/')
        } catch (error) {
            console.log('field to login', error);
        }
    }

    return (
        <Box>
            <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Paper sx={{ p: 2, minWidth: '400px' }}>
                    <Stack spacing={3}>
                        <Typography component="h1" variant="h5" color="initial">
                            Login Page
                        </Typography>

                        <LoginForm  onSubmit={handleLoginSubmit} />
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
}
