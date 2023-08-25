import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Container, Icon, Stack, Typography } from '@mui/material';

export interface IFooterProps {}

export function Footer() {
    const socialLink = [
        { icon: Facebook, url: 'google.com' },
        { icon: Instagram, url: 'google.com' },
        { icon: Twitter, url: 'google.com' },
        { icon: LinkedIn, url: 'google.com' },
    ];

    return (
        <Box component="footer" className="footer" py={2}>
            <Container>
                <Stack direction="row" justifyContent="center">
                    {socialLink.map((item, idx) => (
                        <Box key={idx} component="a" p={2} color="secondary.dark" href={item.url} target="_blank" rel="noopener noreferrer">
                            <Icon component={item.icon} sx={{ fontSize: 48 }} />
                        </Box>
                    ))}
                </Stack>

                <Typography variant="body1" color="initial" textAlign="center">
                    Copyright @{new Date().getFullYear()} All rights reserved
                </Typography>
            </Container>
        </Box>
    );
}
