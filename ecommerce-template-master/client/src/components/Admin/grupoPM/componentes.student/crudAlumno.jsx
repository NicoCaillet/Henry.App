import React, { useState, forwardRef, useEffect} from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { useSelector, useDispatch } from "react-redux";
import { getUser } from '../../../../store/actions/alumnos'
import {TableContainer, TableHead, TableBody, TableRow, TableCell, Paper} from '@material-ui/core';

const tableIcons = {
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
export default function CrudAlumnos() {
    const dispatch = useDispatch();
    const alumnos = useSelector((state) => state.alumnos.alumnos);

    useEffect(() => {
        // Cuando se abra el componente, dispachar la accion que va a hacer el get para que traiga el pp del usuario logeado
        dispatch(getUser())
    
    }, [])
    const handleEdit = (id) =>{

    };
    const handleDelete = (id) =>{

    };
    return (
        <TableContainer component={Paper}>
            <TableHead>
                <TableRow>
                    {Object.keys(alumnos[0]).map(key =>(
                        <TableCell variant="head">{key.toUpperCase()}</TableCell>
                    ))}
                    <TableCell variant="head">EDITAR</TableCell>
                    <TableCell variant="head">ELIMINAR</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {alumnos.map(alumno => (
                    <TableRow>
                            {(()=>{
                                let keys = [];
                                for(let key in alumno){
                                    keys.push(alumno[key])
                                }
                                return keys.map(cell => {
                                    return(
                                        <TableCell>{
                                            typeof cell === "boolean"?
                                            (cell?<Check/>:<Close/>):
                                            cell
                                        }</TableCell>
                                    );
                                })
                            })()}
                            <TableCell onClick={() => handleEdit(alumno.id)}><Edit/></TableCell>
                            <TableCell onClick={() => handleDelete(alumno.id)}><DeleteOutline/></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </TableContainer>
    );
}