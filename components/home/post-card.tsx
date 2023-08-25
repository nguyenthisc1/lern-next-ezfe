import { Post } from '@/models';
import { Card, CardContent } from '@mui/material';
import { PostItem } from '../blog';
export interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    if (!post) return null;

    return (
        <Card>
            <CardContent>
                {/* <Stack spacing={3} direction="column">
                    <Typography variant="h5" fontWeight="600" color="initial">
                        {post.title}
                    </Typography>

                    <Stack direction="row">
                        <Typography variant="body1" color="initial">
                            {format(Number(post.publishedDate), 'dd MMM yyyy')}
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
                </Stack> */}
                <PostItem post={post}/>
            </CardContent>
        </Card>
    );
}
