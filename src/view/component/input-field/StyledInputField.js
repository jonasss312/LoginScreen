import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(t => ({
    input: {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        color: '#ffffff',
        fontSize: 18,
        "&::placeholder": {
            color: '#ffffff',
        },
        "&::-ms-reveal": {
            display: 'none'
        },
        width: '100%'
    },
    box: {
        color: '#ffffff',
        fontSize: 18,
        display: 'flex',
        alignItems: 'flex-end',
        borderRadius: '10px',
        padding: t.spacing(1),
        border: 'solid',
        borderColor: '#ffffff',
        borderWidth: '1px',
        width: '100%',
        boxSizing: 'border-box',
        margin: t.spacing(1),
    },
    incorrect: {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        color: 'red',
        fontSize: 18,
        "&::placeholder": {
            color: 'red',
        },
        "&::-ms-reveal": {
            display: 'none'
        },
    }
}
));