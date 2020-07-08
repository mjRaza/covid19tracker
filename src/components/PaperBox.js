import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { PieChart } from "./maps/PieChart";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    marginTop: "35px",
  },
  root2: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    marginTop: "35px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  lastupdateTypo: {
    color: "#a1ff7a",
  },
  title: {
    color: "#3dff00",
    textAlign: "center",
    marginTop: "35px",
    fontSize: "35px",
  },
  recovered: {
    color: "green",
  },
  deaths: {
    color: "red",
  },
  confirmed: {
    color: "blue",
  },
}));

export default function NestedGrid({ globalData, title }) {
  console.log(globalData);
  const classes = useStyles();
  return (
    <div>
      <Typography title variat="h1" className={classes.title}>
        {title}
      </Typography>
      {globalData ? (
        <div>
          <div>
            <Grid container spacing={1} className={classes.root}>
              <Grid item xs={3} md={2}>
                <Paper className={classes.paper}>
                  <Typography variant="h4" noWrap className={classes.confirmed}>
                    Confirmed
                  </Typography>
                  <Typography variant="h4" noWrap>
                    {globalData.confirmed.value}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={3} md={2}>
                <Paper className={classes.paper}>
                  <Typography variant="h4" noWrap className={classes.deaths}>
                    Deaths
                  </Typography>
                  <Typography variant="h4" noWrap>
                    {globalData.deaths.value}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={3} md={2}>
                <Paper className={classes.paper}>
                  <Typography variant="h4" noWrap className={classes.recovered}>
                    Recovered
                  </Typography>
                  <Typography variant="h4" noWrap>
                    {globalData.recovered.value}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1} className={classes.root2}>
              <Grid item xs={7} md={7}>
                <PieChart
                  recovered={globalData.recovered.value}
                  confirmed={globalData.confirmed.value}
                  deaths={globalData.deaths.value}
                />
              </Grid>
              <Grid item xs={8} md={5}>
                <Typography
                  className={classes.lastupdateTypo}
                  variant="h6"
                  noWrap
                >
                  Last updated: {new Date(globalData.lastUpdate).toDateString()}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      ) : (
        <Grid container spacing={1} className={classes.root2}>
          <Grid item xs={7} md={7}>
            <h1 className={classes.lastupdateTypo}>Loading....</h1>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
