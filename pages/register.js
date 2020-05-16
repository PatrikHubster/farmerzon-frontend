import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import initialize from '../utils/initialize';
import Layout from '../components/Layout/Layout';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userName: ''
    };
  }

  static getInitialProps(ctx) {
    initialize(ctx);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.authenticate({
      email: this.state.email,
      password: this.state.password,
      userName: this.state.userName
    }, 'register');
  }

  render() {
    return (
      <Layout title="Registrieren" needAuthentication="false">
        <h3>Registrieren</h3>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="container"
        >
          <div>
            <input
              className="input"
              type="email"
              placeholder="Email-Adresse"
              required
              value={this.state.email}
              onChange={e => this.setState({ ...this.state, email: e.target.value })}
            />
          </div>
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
            Registrieren
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
)(Register);
