import { Layout } from '../components/Layout/Layout';
import { LoginForm } from '../components/Login/Login';
import { connect } from 'react-redux';
import actions from '../lib/redux/actions';

const MyLogin = (props) => (
    <Layout title="Login" needAuthentication={false}>
        <LoginForm handleSubmit={(e) => {
            props.authenticate({
                userName: e.userName,
                password: e.password
            }, 'login-username');
        }}/>
    </Layout>
);

const Login = connect(state => state, actions)(MyLogin);

export default Login;