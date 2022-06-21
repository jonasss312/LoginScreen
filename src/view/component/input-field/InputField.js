import { Input, Box } from "@mui/material";
import React from "react";
import { useStyles } from "./StyledInputField";

export const InputField = (props) => {
    const classes = useStyles();

    if (props.image)
        return <Box className={classes.box} >
            {props.image}
            &nbsp;
            <input className={classes.input} id={props.id ? props.id : props.type} type={props.type} placeholder={props.placeholder} required disableUnderline fullWidth maxlength="40" autocomplete="none" />
        </Box>
    return <Box className={classes.box}>
        <Input id={props.id ? props.id : props.type} type={props.type} placeholder={props.placeholder} required />
    </Box>

}
