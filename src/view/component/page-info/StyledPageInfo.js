import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(t => ({
    title: {
        fontSize: 45,
        fontWeight: "bold",
        color: 'black',
        color: '#ffffff',
        paddingBottom: t.spacing(1),
        textAlign: 'center',
        wordBreak: 'break-all'
    },
    description: {
        fontSize: 18,
        color: '#ffffff',
        paddingBottom: t.spacing(4),
        wordBreak: 'break-all',
        textAlign: 'center',
        wordBreak: 'break-all'
    }
}));