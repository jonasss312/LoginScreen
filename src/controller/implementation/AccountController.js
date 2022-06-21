export class AccountController {
  constructor(
    accountInteractor
  ) {
    this.accountInteractor = accountInteractor;
  }

  login(user) {
    return this.accountInteractor.login(user);
  }

  logout() {
    return this.accountInteractor.logout();
  }
}