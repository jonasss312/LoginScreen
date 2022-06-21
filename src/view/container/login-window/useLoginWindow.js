import { useEffect, useState } from "react";
import useControllerContext from "../context/useControllerContext";
import { pages } from "../../container/navigation/useNavigation";

export const useLoginWindow = (setPage) => {
    const accountController = useControllerContext().accountController;
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        if (user) {
            if (accountController.login(user) === true) {
                setPage(pages[1]);
                return;
            }
            alert("Incorrect Login or Password!");
        }
    }, [user]);

    const login = (user) => {
        setUser(user);
    }

    return login;
}