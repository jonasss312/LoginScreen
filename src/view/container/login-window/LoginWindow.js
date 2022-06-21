import PersonOutlined from '@mui/icons-material/PersonOutlined';
import VpnKeyOutlined from '@mui/icons-material/VpnKeyOutlined';
import { Button, Fade } from "@mui/material";
import React from "react";
import { useLoginWindow } from "./useLoginWindow";
import { User } from "../../../domain/User";
import { useStyles } from "./StyledLoginWindow";
import { PageInfo } from "../../component/page-info/PageInfo";
import { InputField } from '../../component/input-field/InputField';

export const LoginWindow = (props) => {
    const classes = useStyles();
    const login = useLoginWindow(props.setPage);

    const handleSubmit = (event) => {
        event.preventDefault();
        login(new User(event.target.email.value, event.target.password.value));
    }

    const renderLoginForm = () => <form onSubmit={handleSubmit} className={classes.form} >
        <InputField image={<PersonOutlined />} placeholder="Username or E-mail" type="email" />
        <InputField image={<VpnKeyOutlined />} placeholder="Password" type="password" />
        <Button variant="outlined" type="submit" className={classes.button}>Login</Button>
    </form>

    return (
        <div className={classes.background}>
            <div className={classes.alignment}>
                <PageInfo title="Login" description="Please enter your Login and your Password" />
                <Fade in={true} timeout={2002}>
                    {renderLoginForm()}
                </Fade>
            </div>
        </div>
    )
}