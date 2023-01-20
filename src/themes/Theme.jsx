import { createTheme } from '@mui/material/styles';

const secondColor = '#fffaf0';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },

    typography: {
        fontFamily: 'cursive'
    },

    palette: {
        primary: {
            main: secondColor,
            darker: secondColor,
        },
        neutral: {
            main: secondColor,
            contrastText: secondColor,
        },
        text: {
            primary: secondColor,
            secondary: secondColor,
            disabled: secondColor,
        },

    },
});

export default theme;