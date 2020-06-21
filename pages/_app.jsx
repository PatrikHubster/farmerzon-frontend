import { ApolloProvider } from '@apollo/react-hooks';
import { Cookies } from 'react-cookie';
import { config } from '../lib/config';
import ApolloClient from 'apollo-boost';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: `${config.GRAPH_SERVER}/graph`,
});

const MyApp = ({Component, pageProps}) => {
  console.log(config.GRAPH_SERVER);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;

// -------------


// set up cookies
/*const cookies = new Cookies();
class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: cookies.get('token') || null
    }
  }

  onLoginClick = async () => {
    console.log("Login called");
    const response = await axios.get(`${authServer}/authentication/login-username`)
    const token = response.data.token;
    cookies.set('token', token);
    this.setState({
      token: token
    })
  }

  render() {
    return (
      <div>
        <h2>Main page</h2>
        <br></br>
        <button onClick={() => this.onLoginClick()}>Get Token</button>
        <br></br>
        <p>Token: {this.state.token}</p>
        <br></br>
        <Link href="/secret">
          <a>Secret page</a>
        </Link>
      </div >
    )
  }
}

export default Index;*/