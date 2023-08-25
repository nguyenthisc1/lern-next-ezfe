import { Heebo } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Heebo({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
export let theme = createTheme({
    palette: {
        primary: {
            main: '#ff6464',
        },
        secondary: {
            main: '#00ăcc',
            light: '#edf7fa',
            dark: '#142850',
        },
        error: {
            main: red.A400,
        },
    },

    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'md',
            },
            styleOverrides: {
                maxWidthSm: {
                    maxWidth: '680px',

                    '@media (min-width: 600px)': {
                        maxWidth: '680px',
                    },
                },
                maxWidthMd: {
                    maxWidth: '860px',

                    '@media (min-width: 900px)': {
                        maxWidth: '860px',
                    },
                },
            },
            variants: [],
        },
        MuiLink: {
            defaultProps: {
                underline: 'hover',
            },
            styleOverrides: {
                root: {
                    color: 'black',
                    '&:hover,&.active': {
                        color: '#ff6464',
                    },
                },
            },
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        color: 'white',
                    },
                },
            ],
        },
        MuiTypography: {
            variants: [
                {
                    props: { variant: 'body1' },
                    style: {
                        fontSize: '18px',
                    },
                },
                {
                    props: { variant: 'body2' },
                    style: {
                        fontSize: '16px',
                    },
                },
            ],
        },
        MuiChip: {
            variants: [
                {
                    props: { color: 'secondary' },
                    style: {
                        backgroundColor: '#142850',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 16,
                    },
                },
            ],
        },
    },
});
theme = responsiveFontSizes(theme);
