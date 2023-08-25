import { Post } from '@/models';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';

export interface PostItemProps {
    post: Post;
}

export function PostItem({ post }: PostItemProps) {
    if (!post) return null;
    return (
        <Box>
            <Stack spacing={3} direction="column">
                <Typography variant="h5" fontWeight="600" color="initial">
                    {post.title}
                </Typography>

                <Stack direction="row">
                    <Typography variant="body1" color="initial">
                        {format(new Date(post.publishedDate), 'dd MMM yyyy')}
                    </Typography>

                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                    <Typography variant="body1" color="initial">
                        {post.tagList.join(', ')}
                    </Typography>
                </Stack>

                <Typography
                    variant="body2"
                    color="initial"
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '4',
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {post.description}
                </Typography>
            </Stack>
        </Box>
    );
}
