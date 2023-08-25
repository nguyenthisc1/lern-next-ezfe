import { useAuth } from '@/hooks';
import router from 'next/router';
import react, { useEffect } from 'react';

export interface AuthProps {
    children: any;
}

export function Auth({ children }: AuthProps) {
    const { profile, firstLoading } = useAuth();

    useEffect(() => {
        if (!firstLoading && !profile) router.push('/login');
    }, [profile, firstLoading]);

    if (!profile) return <p>Loading...</p>;

    return <div>{children}</div>;
}
