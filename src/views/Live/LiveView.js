import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Live from "../../components/Live/Live.js";

import styles from "../../assets/jss/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function LiveView() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <h3 className={classes.cardTitleWhite}>Live Chart</h3>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <h1>Live Chart</h1>
        </div>
        <Live></Live>
      </CardBody>
    </Card>
  );
}
