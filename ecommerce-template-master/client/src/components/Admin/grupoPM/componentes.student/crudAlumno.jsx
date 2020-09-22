import React, { useState, forwardRef, useEffect, useStyles} from 'react';
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
import { getUser,putUsuarioCohorte } from '../../../../store/actions/alumnos'
import {dropUser} from "../../../../store/actions/user"
import {TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Autocomplete from "@material-ui/lab/Autocomplete"



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
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function CrudAlumnos() {
    const dispatch = useDispatch();
    const alumnos = useSelector((state) => state.alumnos.alumnos);
    const cohortes = useSelector((state) => state.cohorte.cohortes);
    const pps = useSelector((state) => state.pairPrograming.grupos);
    const [edit, setEdit] = useState({
        open: false,
        alumnoId: null,
        cohorteId: null
    });

    const [dropped, setDropped] = useState({
    open: false,
    alumnoId: ""
    });
    const handleInputChange = (e, value) => {
    setEdit({...edit, cohorteId: value.id});
    }
    
    useEffect(() => {
        // Cuando se abra el componente, dispachar la accion que va a hacer el get para que traiga el pp del usuario logeado
        dispatch(getUser())
    }, [])
    const handleEdit =  () =>{
        dispatch(putUsuarioCohorte(edit)).then(() =>{
        dispatch(getUser());
        });
    };
    const handleDelete = async (id) =>{
        await dispatch(dropUser(id))
        dispatch(getUser());
    };
    //delete dialog
            const handleClickOpened = (id) => {
            setDropped({
                ...dropped,
                open: true,
                alumnoId: id
            })
            };
        
            const handleClosed = () => {
            setDropped({
                ...dropped,
            open:false
            })
            };
            //edit dialog
            const handleClickOpen = (alumnoId) => {
            setEdit({
                    ...edit,
                    open:true,
                    alumnoId
            });
            };
        
            const handleClose = () => {
            setEdit({
                ...edit,
                open:false
            });
            };
    if(alumnos.length)
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
                            <Button component={TableCell} onClick={() => handleClickOpen(alumno.id)}><Edit/></Button>
                    <Dialog open={edit.open} onClose={handleClose} aria-labelledby="form-dialog-title">

            <DialogTitle id="form-dialog-title">Editar Alumno</DialogTitle>
            <DialogContent>
            <DialogContentText>
            Edita el grupo de cohorte, pm o pair de un alumno.
            </DialogContentText>
            <Autocomplete
    id="cohorte"
    options={cohortes}
    getOptionLabel={(option) => option.nombre}
    onChange={handleInputChange}
    style={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Cohortes" variant="outlined" />}
    />
        
        <Autocomplete
    id="cohorte"
    options={cohortes}
    getOptionLabel={(option) => option.nombre}
    onChange={handleInputChange}
    style={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Grupo PM" variant="outlined" />}
    />
            <Autocomplete
    id="cohorte"
    options={cohortes}
    getOptionLabel={(option) => option.nombre}
    onChange={handleInputChange}
    style={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Grupo PP" variant="outlined" />}
    />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} color="primary">
            Cancelar
        </Button>
        <Button onClick={()=> {handleEdit(edit.alumnoId, edit.cohorteId);handleClose()}} color="primary">
            Aceptar
        </Button>
        </DialogActions>
    </Dialog>
                            <Button component={TableCell} onClick={() => {handleClickOpened(alumno.id);}}><DeleteOutline/></Button>
                            <Dialog
        open={dropped.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClosed}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle id="alert-dialog-slide-title">{"Eliminar alumno"}</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
            ¿Seguro que quieres eliminar este alumno?
        </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClosed} color="primary">
            Cancelar
        </Button>
        <Button onClick={() => {handleDelete(dropped.alumnoId); handleClosed()}} color="primary">
            Aceptar
        </Button>
        </DialogActions>
    </Dialog>
                    </TableRow>
                ))}
            </TableBody>
        </TableContainer>
    );
    return (
        <CircularProgress color="inherit" />
    
    )
}
