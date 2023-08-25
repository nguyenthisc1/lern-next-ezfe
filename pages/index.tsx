import { Seo } from '@/components/common';
import { HeroSection, RecentPostsSection, FeaturedWorksSection } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
    return (
        <Box>
            <Seo
                data={{
                    title: 'NextJs Tutorials | Nguyn Thi',
                    description: 'Step by step tutorials',
                    url: '',
                    thumbnailUrl: '',
                }}
            />
            <HeroSection />
            <RecentPostsSection />
            <FeaturedWorksSection />
        </Box>
    );
}

HomePage.Layout = MainLayout;
