import { Layout } from '../components/Layout/Layout';
import PersonalInformation from '../components/PersonalInformationForm/PersonalInformationForm';
import { connect } from 'react-redux';
import actions from '../lib/redux/actions';

const Register = () => (
    <Layout title="Registrieren" needAuthentication={false}>
        <PersonalInformation />
    </Layout>
);

export default  connect(state => state, actions)(Register);
