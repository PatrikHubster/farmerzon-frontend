import { RESTDataSource } from "apollo-datasource-rest";

class AuthenticationLogic extends RESTDataSource {
  constructor(baseUrlAuthentication) {
    super();
    this.baseURL = baseUrlAuthentication;
  }

  async postLogin(userName, password) {
    return this.post(`login-user-name`, {
      userName: userName,
      password: password,
    });
  }
}

export default AuthenticationLogic;
