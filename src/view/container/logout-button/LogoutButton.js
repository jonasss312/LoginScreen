import { useLogoutButton } from "./useLogoutButton";
import { Button } from "@mui/material";
import React from "react";
import { useStyles } from "./StyledLoginButton";

export const LogoutButton = (props) => {
    const classes = useStyles();
    const logout = useLogoutButton(props.setPage);

    return <Button className={classes.button} variant="outlined" onClick={logout}>Logout</Button>
}