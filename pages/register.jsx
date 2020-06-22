import { Layout } from '../components/Layout/Layout';
import PersonalInformation from '../components/PersonalInformationForm/PersonalInformationForm';

const Register = () => (
    <Layout title="Registrieren" needAuthentication={false}>
        <PersonalInformation />
    </Layout>
);

export default Register;
