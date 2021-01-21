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

  async postRegister(userName, email, password, street, doorNumber, zipCode, cityName, stateName, countryName, countryCode) {
    let response = await this.client.post("/authentication/register", {
      userName: userName,
      email: email,
      password: password,
      address: {
        city: {
          zipCode: zipCode,
          name: cityName
        },
        country: {
          name: countryName,
          code: countryCode
        },
        state: {
          name: stateName
        },
        doorNumber: doorNumber,
        street: street
      }
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
