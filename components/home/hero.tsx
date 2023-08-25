import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export function HeroSection() {
    return (
        <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
            <Container>
                <Stack spacing={8} direction={{ xs: 'column-reverse', md: 'row' }} alignItems={{ xs: 'center', md: 'flex-start' }} textAlign={{ xs: 'center', md: 'left' }}>
                    <Stack spacing={{ xs: 3.5, md: 8 }} direction="column">
                        <Typography component="h1" fontWeight="700" variant="h3" color="initial">
                            Hi, I am John, <br /> Creative Technologist
                        </Typography>

                        <Typography variant="body1" color="initial">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </Typography>

                        <Box>
                            <Button variant="contained" size="large">
                                Download Resume
                            </Button>
                        </Box>
                    </Stack>

                    <Box sx={{ minWidth: '240px', boxShadow: '-5px 13px', color: 'secondary.light', borderRadius: '50%', overflow: 'hidden' }}>
                        <Image width={240} height={240} src="/images/img_hero.jpg" alt="img_hero" />
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
