import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Historical from "../../components/Historical/Historical.js";
import HistoricalOHLC from "../../components/Historical/HistoricalOHLC.js";

import styles from "../../assets/jss/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <h3 className={classes.cardTitleWhite}>Historical Chart View</h3>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <h1>Historical Chart</h1>
        </div>
        {/* <Historical></Historical> */}
        <HistoricalOHLC></HistoricalOHLC>
      </CardBody>
    </Card>
  );
}
