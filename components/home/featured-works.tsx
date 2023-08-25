import { WorkList } from '@/components/work';
import { Work } from '@/models';
import { Box, Container, Typography } from '@mui/material';

export function FeaturedWorksSection() {
    const workList: Work[] = [
        {
            id: '1',
            title: 'Designing Dashboards',
            createdAt: '1688200523563',
            updatedAt: '1688200523563',
            tagList: ['Design', 'Pattern'],
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            thumbnailUrl: 'https://res.cloudinary.com/drqm0rwor/image/upload/v1688203597/lern-next-ezfe/img_featured_work_1_jjorui.jpg',
        },
        {
            id: '2',
            title: 'Vibrant Portraits of 2020',
            createdAt: '1688200523563',
            updatedAt: '1688200523563',
            tagList: ['Design', 'Pattern'],
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            thumbnailUrl: 'https://res.cloudinary.com/drqm0rwor/image/upload/v1688203597/lern-next-ezfe/img_featured_work_2_atuiyr.jpg',
        },
        {
            id: '3',
            title: '36 Days of Malayalam type',
            createdAt: '1688200523563',
            updatedAt: '1688200523563',
            tagList: ['Design', 'Pattern'],
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            thumbnailUrl: 'https://res.cloudinary.com/drqm0rwor/image/upload/v1688203597/lern-next-ezfe/img_featured_work_3_hunpum.jpg',
        },
    ];

    return (
        <Box component="section" py={4}>
            <Container>
                <Typography mb={3} variant="h5" fontWeight="500" color="initial">
                    Featured Works
                </Typography>

                <WorkList workList={workList} />
            </Container>
        </Box>
    );
}
