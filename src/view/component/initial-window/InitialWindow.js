import React from "react";
import { LogoutButton } from "../../container/logout-button/LogoutButton";
import { PageInfo } from "../page-info/PageInfo";
import { useStyles } from "./StyledInitialWindow";
import { Fade } from "@mui/material";

export const InitialWindow = (props) => {
    const classes = useStyles();

    return <Fade in={true} timeout={2000}>
        <div className={classes.background}>
            <div className={classes.content}>
                <PageInfo title={"Welcome " + localStorage.getItem("login") + "!"} description="You are logged in, now you can log out." />
                <LogoutButton setPage={props.setPage} />
            </div>
        </div>
    </Fade>
} 
