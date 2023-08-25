import { Box, Container } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

export interface IHeaderMobileProps {}

export default function HeaderMobile(props: IHeaderMobileProps) {
    return (
        <Box component="header" className="header-mobile" display={{ xs: 'block', md: 'none' }}>
            <h1>Main layout</h1>
            <div>Sidebar</div>
            <Container fixed></Container>

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/works">works</Link>
            <Link href="/blog">blog</Link>
        </Box>
    );
}
