import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({ rows }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Titulo</TableCell>
            <TableCell align="left">Nombre Agencia</TableCell>
            <TableCell align="left">Contacto</TableCell>
            <TableCell align="left">Fecha Publicación</TableCell>
            <TableCell align="left">Detalles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell align="left">{row.OPPORTUNITY_TITLE}</TableCell>
              <TableCell align="left">{row.AGENCY_NAME}</TableCell>
              <TableCell align="left">{row.AGENCY_CONTACT_EMAIL}</TableCell>
              <TableCell align="left">{row.POSTED_DATE}</TableCell>
              <TableCell align="left"><a href={row.OPPORTUNITY_NUMBER?.toString().substring(12,69)} target="_blank">Link</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
