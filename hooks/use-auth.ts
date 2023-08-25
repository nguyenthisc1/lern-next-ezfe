import { authApi } from '@/api/index';
import { LoginPayload, UserProfile } from '@/models';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/_internal';

export function useAuth(option?: Partial<PublicConfiguration>) {
    const {
        data: profile,
        error,
        mutate,
    } = useSWR<UserProfile | any>('/profile', {
        dedupingInterval: 60 * 60 * 1000, // 1 hr
        revalidateOnFocus: false,
        ...option,
    });

    const firstLoading = profile === undefined && error === undefined;

    async function login(payload: LoginPayload) {
        await authApi.login(payload);

        await mutate();
    }
    async function logout() {
        await authApi.logout();

        mutate(null, false);
    }

    return {
        profile,
        error,
        login,
        logout,
        firstLoading,
    };
}
