import useControllerContext from "../context/useControllerContext";
import { pages } from "../navigation/useNavigation";

export const useLogoutButton = (setPage) => {
    const accountController = useControllerContext().accountController;

    const logout = () => {
        accountController.logout(setPage);
        setPage(pages[0]);
    };

    return logout;
}