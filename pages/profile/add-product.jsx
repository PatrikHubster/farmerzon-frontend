import { Layout } from '../../components/Layout/Layout';
import { connect } from 'react-redux';
import actions from '../../lib/redux/actions';

const AddProduct = () => (
    <Layout title="Produkt hinzufügen">
      Produkt hinzufügen (Farmer)
    </Layout>
);

export default  connect(state => state, actions)(AddProduct);
