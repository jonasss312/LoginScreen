import { makeStyles } from '@mui/styles';
import LoginBackground from '../../../images/LoginBackground.png';

export const useStyles = makeStyles(t => ({
    alignment: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: '10px',
        paddingRight: '10px'
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        "&.MuiButton-root": {
            textTransform: 'none',
            color: '#00ff00',
            background: 'transparent',
            borderColor: '#00ff00',
            borderRadius: '10px',
            borderWidth: '2px',
            width: '100%',
            marginTop: t.spacing(4)
        },
        "&.MuiButton-root:hover": {
            color: '#00ffff',
            borderColor: '#00ffff',
            borderWidth: '2px'
        }
    },
    background: {
        height: '100vh',
        backgroundImage: `url(${LoginBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        displayDirection: 'row',
        justifyContent: 'center'
    }
}));