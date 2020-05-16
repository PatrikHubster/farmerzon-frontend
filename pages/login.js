import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import initialize from '../utils/initialize';
import Layout from '../components/Layout/Layout';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
  }

  static getInitialProps(ctx) {
    initialize(ctx);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.authenticate({
      userName: this.state.userName,
      password: this.state.password
    }, 'login-username');
  }

  render() {
    return (
      <Layout title="Login" needAuthentication="false">
        <h3>Login</h3>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="container"
        >
          <div>
            <input
              className="input"
              type="text"
              placeholder="Benutzername"
              required
              value={this.state.userName}
              onChange={e => this.setState({ ...this.state, userName: e.target.value })}
            />
          </div>
          <div>
            <input
              className="input"
              type="password"
              placeholder="Passwort"
              required
              value={this.state.password}
              onChange={e => this.setState({ ...this.state, password: e.target.value })}
            />
          </div>
          <button type="submit" className="button is-success">
            Login
            </button>
        </form>
        <textarea readOnly value="Test">
        </textarea>
      </Layout>
    )
  }


}

export default connect(
  state => state,
  actions
)(Login);
