import { useEffect, useState } from "react";

export const pages = ["LoginWindow", "InitialWindow"];

export const useNavigation = () => {
    const [page, setPage] = useState(pages[0]);
    
    useEffect(() => {
        if (localStorage.getItem("login") || localStorage.getItem("password")) {
            setPage(pages[1])
        }
    }, [page]);

    return {page, setPage};
}
