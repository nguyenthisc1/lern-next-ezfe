import { useAuth } from '@/hooks';
import { Box, Container, Link as MuiLink, Stack } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTE_LIST } from './routes';

export interface IHeaderDesktopProps {}

export default function HeaderDesktop(props: IHeaderDesktopProps) {
    const router = useRouter();
    const { profile, logout } = useAuth();
    const isLoggedIn = Boolean(profile?.username);

    const routeList = ROUTE_LIST.filter((route) => !route.requireLogin || isLoggedIn);

    return (
        <Box component="header" sx={{ py: 2 }} className="header-desktop" display={{ xs: 'none', md: 'block' }}>
            <Container>
                <Stack direction="row" justifyContent="flex-end">
                    {routeList.map((route) => (
                        <Link key={route.path} href={route.path} passHref>
                            <MuiLink className={clsx({ active: router.pathname === route.path })} sx={{ ml: 2, fontWeight: 'medium' }} component="span" underline="hover">
                                {route.label}
                            </MuiLink>
                        </Link>
                    ))}

                    {!isLoggedIn && (
                        <Link href="/login" passHref>
                            <MuiLink className={clsx({ active: router.pathname === '/login' })} sx={{ ml: 2, fontWeight: 'medium' }} component="span" underline="hover">
                                Login
                            </MuiLink>
                        </Link>
                    )}

                    {isLoggedIn && (
                        <MuiLink onClick={logout} className={clsx({ active: router.pathname === '/logout' })} sx={{ ml: 2, fontWeight: 'medium' }} component="span" underline="hover">
                            Logout
                        </MuiLink>
                    )}
                </Stack>
            </Container>
        </Box>
    );
}
