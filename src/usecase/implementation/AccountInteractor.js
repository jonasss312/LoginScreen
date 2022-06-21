export class AccountInteractor {
  constructor(restAccountGateway) {
    this.restAccountGateway = restAccountGateway;
  }

  login(user) {
    return this.restAccountGateway.login(user);
  }

  logout() {
    return this.restAccountGateway
      .logout();
  }
}