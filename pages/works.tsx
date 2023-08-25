import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';

export interface IWorksPageProps {}

export default function WorksPage(props: IWorksPageProps) {
    return (
        <Box>
            <h1>Work page</h1>
        </Box>
    );
}

WorksPage.Layout = MainLayout;
