const validLogin = "frontend@isawesome.com";
const validPassword = "cool";

export class RestAccountGateway {
    login(user) {
        if (user.login === validLogin && user.password === validPassword) {
            localStorage.setItem("login", validLogin);
            localStorage.setItem("password", validPassword);
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem("login");
        localStorage.removeItem("password");
    }
}