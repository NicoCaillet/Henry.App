import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    contenedor: {
        paddingTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6E6DD'
    },
    boton: {
        margin: '10px',
    },
    media: {
        height: 340,
        maxWidth: 345,
    }

}));