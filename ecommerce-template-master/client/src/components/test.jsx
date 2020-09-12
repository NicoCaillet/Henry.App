import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { pruebaRedux } from '../store/actions/actionTest';

//ESTE COMPONENTE ES UNA PRUEBA DE REDUX
function Prueba(props) {

    useEffect(() => {
        props.pruebaRedux('https://www.opusvida.com/wp-content/uploads/2010/07/homero_simpson_02-1024x819.jpg')
    }, [])

    return (
        <div>
            <div style={{ borderStyle: 'groove', marginTop: '20px' }}>
                <h3> INSTALACION DE REDUX EXITOSA</h3>
                <img src={props.test.test} />
            </div>
        </div>
    )
};

const mapStateToProps = ({ test }) => ({
    test,
})
const mapDispatchToProps = dispatch => ({
    pruebaRedux: prueba => dispatch(pruebaRedux(prueba))
})

export default connect(mapStateToProps, mapDispatchToProps)(Prueba)