import React, { useEffect } from 'react';
import cx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from "react-redux";
import { getPPdePM } from '../../../../store/actions/pairprogramming';

//tabla de alumnos Estilos-----------------------------------------------------
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles3 = makeStyles({
  table: {
    minWidth: 700,
  },
});

//-----------------------------------------------------------------------------
const useStyles2 = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


const useStyles = makeStyles(({ spacing }) => ({
  card: {
    marginTop: 40,
    borderRadius: spacing(0.5),
    transition: '0.3s',
    width: '50%',
    overflow: 'initial',
    background: '#ffffff',
    margin: 'auto'
  },
  content: {
    paddingTop: 0,
    textAlign: 'left',
    overflowX: 'auto',
    '& table': {
      marginBottom: 0,
    }
  },
}));

export default function ElevatedHeaderCard({ grupoPP, cohorteId }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles();
  const cardHeaderStyles = useContainedCardHeaderStyles();
  const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
  const cardHeaderShadowStyles = useFadedShadowStyles();
  const gruposPP = useSelector((state) => state.pairPrograming.gruposDePm);

  useEffect(() => {
    dispatch(getPPdePM(cohorteId, grupoPP[0].id))
  }, [])

  return (
    <Card className={cx(classes.card, cardShadowStyles.root)}>
      <CardHeader
        className={cardHeaderShadowStyles.root}
        classes={cardHeaderStyles}
        title={'Grupo PP'}
        subheader={'Cohorte'}

      />
      <CardContent className={classes.content}>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Grupos</TableCell>
              <TableCell align="right">Alumnos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {grupoPP.map(grupo => (
              <div key={grupo.id} className={classes2.root}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <TableRow >
                      <TableCell aling='left' >{grupo.id}</TableCell>
                      <TableCell align="right">{grupo.alumnos}</TableCell>
                    </TableRow>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <TableContainer component={Paper}>
                        <Table className={classes3.table} aria-label="customized table">
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>Alumnos</StyledTableCell>
                              <StyledTableCell align="right">Rol</StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {gruposPP[0].usuarios.map((datos) => (
                              <StyledTableRow key={datos.id} >
                                <StyledTableCell component="th" scope="row">
                                  {datos.nombre}
                                </StyledTableCell>
                                <StyledTableCell align="right">{datos.rol}</StyledTableCell>
                              </StyledTableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
