import { InitialWindow } from "../../component/initial-window/InitialWindow";
import { LoginWindow } from "../login-window/LoginWindow";
import { useNavigation } from "./useNavigation";
import React from "react";


export const Navigation = () => {
    const { page, setPage } = useNavigation();

    switch (page) {
        case "LoginWindow":
            return <LoginWindow setPage={setPage} />;
        case "InitialWindow":
            return <InitialWindow setPage={setPage} />;
        default:
            return <>Error</>
    }
}