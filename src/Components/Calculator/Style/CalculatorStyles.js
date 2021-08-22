import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    layout: {
        margin: '25px',
        maxWidth: '450px',
        boxShadow: '2px 2px 10px #CCC',
        borderRadius: '2px'
    },
    button: {
        padding: '16px 12px',
        fontSize: '21px',
        borderRadius: '0px'
    },
    screen: {
        backgroundColor: '#CCCCCC50',
        padding: '20px 5px 5px 5px',
        overflow: 'auto'
    },
    screenText: {
        fontSize: '32px',
        textAlign: 'end'
    },
    darkButton: {
        backgroundColor:'#F44336'
    }
}));