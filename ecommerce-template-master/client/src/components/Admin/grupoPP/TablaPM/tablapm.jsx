import React, { useState, forwardRef, useEffect } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import { Redirect } from "react-router-dom"
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
import { getGrupo } from '../../../../store/actions/grupoPM'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Autocomplete from "@material-ui/lab/Autocomplete";
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { getPPdePM } from '../../../../store/actions/pairprogramming';
import s from './tabla.module.css'
import AddPM from '../AddPM/addpm'
import ElevatedHeaderCardDemo from './tarjetaPP'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));


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
  const { cohorte } = useParams();
  const cohortes = useSelector((state) => state.cohorte.cohortes);
  const pps = useSelector((state) => state.pairPrograming.grupos);
  const gruposPM = useSelector((state) => state.grupoPM.gruposPM);
  const gruposPPdePm = useSelector((state) => state.pairPrograming.gruposDePm);
  const [redirect, setRedirect] = useState(false)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [renderAdd, setrenderAdd] = useState(false)

  useEffect(() => {
    // Cuando se abra el componente, dispachar la accion que va a hacer el get para que traiga el pp del usuario logeado
    dispatch(getGrupo(cohorte))

  }, [cohorte])

  const setrenderagregar = function () {
    setrenderAdd(true);

  }

  const onClose = function () {
    setrenderAdd(false);
  }

  const handleClickOpen = (grupoId) => {
    setOpen(true);
    dispatch(getPPdePM(cohorte, grupoId))
  };
  const handleClose = () => {
    setOpen(false);
  };
  if (redirect) {
    return <Redirect to="/Admin" />;
  }

  if (gruposPM.length)
    return (
      <div>
        <TableContainer component={Paper} style={{ width: '82%' }} className={s.container}>
          <TableHead>
            <TableRow>
              {Object.keys(gruposPM[0]).map(key => (

                <TableCell variant="head">{key.toUpperCase()}</TableCell>
              ))}
              <TableCell variant="head">EDITAR</TableCell>
              <TableCell variant="head">ELIMINAR</TableCell>
              <TableCell variant="head">VER GRUPO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gruposPM.map(grupo => (
              <TableRow>
                {(() => {
                  let keys = [];
                  for (let key in grupo) {
                    keys.push(grupo[key])
                  }
                  return keys.map(cell =>
                    (<TableCell>{cell}</TableCell>)
                  )
                })()}
                <Button component={TableCell}><Edit /></Button>
                <Button component={TableCell}><DeleteOutline /></Button>
                <Button component={TableCell} onClick={() => handleClickOpen(grupo.id)}>Ver Grupo PM</Button>

                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                  {/* <AppBar className={classes.appBar}>
          <Toolbar> */}
                  <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                  </IconButton>
                  {/* <Typography variant="h6" className={classes.title}>
              Grupos JUNIOR DEL PINCHA
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Cerrar
            </Button>
          </Toolbar>
        </AppBar>
        <List>
            {gruposPPdePm && gruposPPdePm.map(grupo => (<ListItem button>
            <ListItemText primary={grupo.id} secondary={grupo.alumnos} />
            </ListItem>))}
        </List>  */}
                  <ElevatedHeaderCardDemo cohorteId={cohorte} grupoPP={gruposPPdePm} cerrar={() => handleClose()} />
                </Dialog>
              </TableRow>
            ))}
          </TableBody>
          <div className={s.regresar}>
            <Button variant="contained" color="primary" onClick={setRedirect} className={s.regresar}>Regresar </Button>
            <Button variant="contained" color="primary" onClick={setrenderagregar} className={s.agregar}>Agregar PM </Button>
          </div>
        </TableContainer>
        {renderAdd && <AddPM onClose={onClose} cohorteid={cohorte} />}

      </div>

    );
  return (<div>ESPERE...</div>);
}
