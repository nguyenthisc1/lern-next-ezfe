import { AdminLayout, MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models/common';
import { Box, Typography } from '@mui/material';

export interface IAboutPageProps {}

export default function AboutPage(props: IAboutPageProps) {
    return (
        <Box>
            <Typography component='h1' variant="h3" color='primary.main'>
                About
            </Typography>
        </Box>
    );
}

AboutPage.Layout = AdminLayout;
