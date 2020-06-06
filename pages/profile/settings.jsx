import { Layout } from '../../components/Layout/Layout';
import PersonalInformation from '../../components/PersonalInformationForm/PersonalInformationForm';

const Settings =() => (
    <Layout title="Einstellungen">
        <PersonalInformation handleSubmit={console.log} />
    </Layout>
)

export default Settings;
