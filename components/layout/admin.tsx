import { LayoutProps } from '@/models';
import Link from 'next/link';
import { Auth } from '@/components/common';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

export function AdminLayout({ children }: LayoutProps) {
    const { logout } = useAuth();
    const router = useRouter();

    async function handleLogout() {
        try {
            await logout();
            router.push('/login');
        } catch (error) {
            console.log('field to logout', error);
        }
    }

    return (
        <Auth>
            <h1>Admin layout</h1>
            <div>Sidebar</div>

            <Button variant='contained' onClick={handleLogout}>Logout</Button>

            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>

            <div>{children}</div>
        </Auth>
    );
}
