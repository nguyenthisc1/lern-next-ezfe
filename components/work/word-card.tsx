import { Work } from '@/models';
import { Chip, Divider, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Image from 'next/image';

export interface WorkCardProps {
    work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
    return (
        <Box>
            <Stack direction={{ sx: 'column', sm: 'row' }} spacing={3}>
                <Box marginBottom={{ xs: 2, sm: 0 }} borderRadius={1} overflow="hidden" minWidth={{ sm: '240px' }} width={{ xs: '100%', sm: '240px' }} height={{ sm: '180px' }}>
                    <Image style={{ width: '100%', height: '100%', objectFit: 'cover' }} width={240} height={180} src={work.thumbnailUrl} alt={work.title} />
                </Box>
                <Stack spacing={2}>
                    <Typography variant="h4" fontWeight="600" color="initial">
                        {work.title}
                    </Typography>
                    <Stack flexDirection="row" alignItems="center">
                        <Chip color="secondary" size="small" label={new Date(Number(work.createdAt)).getFullYear()} sx={{ mr: 3 }} />
                        <Typography variant="body1" color="initial">
                            {work.tagList.join(', ')}
                        </Typography>
                    </Stack>
                    <Typography variant="body2" color="initial">
                        {work.shortDescription}
                    </Typography>
                </Stack>
            </Stack>
            <Divider sx={{ mt: 2 }} />
        </Box>
    );
}
