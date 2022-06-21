import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(t => ({
    button: {
        "&.MuiButton-root": {
            textTransform: 'none',
            color: '#8b0000',
            background: 'transparent',
            borderColor: '#8b0000',
            borderRadius: '10px',
            borderWidth: '2px',
        },
        "&.MuiButton-root:hover": {
            color: '#ff0000',
            borderColor: '#ff0000',
            borderWidth: '2px'
        }
    }
})); 