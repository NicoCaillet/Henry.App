import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    contenedor: {
        paddingTop: '35px',
        display: 'flex',
        justifyContent: 'center',
    },
    div1: {
        height: '500px',
        display: 'flex',
        justifyContent: 'center',

    },
    div2: {
        backgroundColor: 'green',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',

    },
    //////////////////////
    card: {
        borderRadius: '20px',
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: ' red[500]',
    },
}));