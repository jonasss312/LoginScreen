import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(t => ({
    background: {
        background: '#0E2141',
        width: '100%',
        height: '100vh',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: '10px',
        paddingRight: '10px',
    }
}
));