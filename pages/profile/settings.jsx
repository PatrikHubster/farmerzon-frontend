import { Layout } from '../../components/Layout/Layout';
import PersonalInformation from '../../components/PersonalInformationForm/PersonalInformationForm';
import { connect } from 'react-redux';
import actions from '../../lib/redux/actions';

const Settings =() => (
    <Layout title="Einstellungen">
        <PersonalInformation handleSubmit={console.log} />
    </Layout>
)

export default  connect(state => state, actions)(Settings);
