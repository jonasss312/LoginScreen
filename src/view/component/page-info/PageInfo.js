import { Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./StyledPageInfo";

export const PageInfo = (props) => {
    const classes = useStyles();

    return <>
        <Typography variant="title" className={classes.title}>
            {props.title}
        </Typography>
        <Typography variant="description" className={classes.description}>
            {props.description}
        </Typography>
    </>
}