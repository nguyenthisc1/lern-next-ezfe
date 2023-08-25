import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from '@/components/home';
import { Post } from '@/models';

export function RecentPostsSection() {
    const postList: Post[] = [
        {
            id: '1',
            slug: '',
            title: 'Making a design system from scratch',
            publishedDate: '2022-06-15T03:00:00Z',
            tagList: ['Design', 'Pattern'],
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            thumbnailUrl: '',
        },
        {
            id: '2',
            slug: '',
            title: 'Making a design system from scratch',
            publishedDate: '2022-06-15T03:00:00Z',
            tagList: ['Design', 'Pattern'],
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            thumbnailUrl: '',
        },
    ];

    return (
        <Box component="section" bgcolor="secondary.light" py={4}>
            <Container>
                <Stack mb={3} direction="row" justifyContent={{ xs: 'center', md: 'space-between' }} alignItems="center">
                    <Typography variant="h5" fontWeight="500" color="initial">
                        Recent Posts
                    </Typography>
                    <Link passHref href="/blog">
                        <MuiLink component="span" display={{ xs: 'none', md: 'inline-block' }}>
                            View All
                        </MuiLink>
                    </Link>
                </Stack>

                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={3}
                    sx={{
                        '& > div': {
                            width: {
                                xs: '100%',
                                md: '50%',
                            },
                        },
                    }}
                >
                    {postList.map((post) => (
                        <Box key={post.id}>
                            <PostCard post={post} />
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
