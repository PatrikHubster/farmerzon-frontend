import axios from 'axios';

class AuthenticationLogic {
  constructor(baseUrlAuthentication) {
    this.client = axios.create({
      baseURL: baseUrlAuthentication
    });
    this.client.interceptors.response.use((nonErrorResponse) => {
      if (nonErrorResponse.status === 200) {
        return nonErrorResponse;
      }
      return false;
    }, (_) => {
      return false;
    });
  }

  async postLogin(userName, password) {
    let response = await this.client.post("/authentication/login-user-name", {
      userName: userName,
      password: password
    });

    return this.processLoginData(response);
  }

  async refreshLogin(token, refreshToken) {
    let response = await this.client.post("/authentication/refresh", {
      token: localStorage.getItem("token"),
      refreshToken: localStorage.getItem("refreshToken")
    });

    this.processLoginData(response);
  }

  processLoginData(loginResponse) {
    if (loginResponse !== false) {
      localStorage.setItem("token", loginResponse.data.content.token);
      localStorage.setItem("refreshToken", loginResponse.data.content.refreshToken);
      return true;
    } else {
      return false;
    }
  } 
}

export default AuthenticationLogic;
