import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled({ data, onChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={data.npages} onChange={onChange} />
    </div>
  );
}
