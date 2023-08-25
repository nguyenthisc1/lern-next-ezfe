import { Footer, Header } from '@/components/common';
import { LayoutProps } from '@/models';
import { Box, Stack } from '@mui/material';

export function MainLayout({ children }: LayoutProps) {
    return (
        <Stack>
            <Header />

            <Box component="main" flexGrow={1}>
                {children}
            </Box>

            <Footer />
        </Stack>
    );
}
