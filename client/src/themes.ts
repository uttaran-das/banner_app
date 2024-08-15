import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
        button: {
            fontWeight: 600,
            fontSize: '1rem',
        },
    },
});

export default theme;