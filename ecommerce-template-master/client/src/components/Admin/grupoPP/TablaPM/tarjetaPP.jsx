import React, { useEffect } from 'react';
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, TableContainer, Paper, CardHeader, CardContent, TableBody, TableCell, TableRow, TableHead, Table, Card } from '@material-ui/core';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './tarjetaPP.styles'

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


export default function TarjetaPP({ grupoPP }) {
  const classes = useStyles();
  const cardHeaderStyles = useContainedCardHeaderStyles();
  const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
  const cardHeaderShadowStyles = useFadedShadowStyles();

  return (
    <Card className={cx(classes.card, cardShadowStyles.root)} >
      < CardHeader className={cardHeaderShadowStyles.root} classes={cardHeaderStyles} title={'Grupo PP'} subheader={'Cohorte'} />
      < CardContent className={classes.content} >
        <Table>
          <TableBody>
            {grupoPP && grupoPP.map(grupo => (
              <div key={grupo.id} className={classes.root}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <TableRow >
                      <TableCell aling='center' >Grupo {grupo.id}</TableCell>
                      <TableCell align="center">({grupo.alumnos} alumnos)</TableCell>
                    </TableRow>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TableContainer component={Paper}>
                      <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell align="center">Alumnos</StyledTableCell>
                            <StyledTableCell align="center">Rol</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody >
                          {grupoPP[0].usuarios.map((datos) => (
                            <StyledTableRow key={datos.id} >
                              <StyledTableCell align="center" component="th" scope="row">
                                {datos.nombre}
                              </StyledTableCell>
                              <StyledTableCell align="center">{datos.rol}</StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </TableBody>
        </Table >
      </CardContent >
    </Card >
  );
}


