import { Layout } from '../../components/Layout/Layout';
import { connect } from 'react-redux';
import actions from '../../lib/redux/actions';
import { ProductForm } from '../../components/ProductForm/ProductForm';

const AddProduct = () => (
    <Layout title="Produkt hinzufügen" needAuthentication={false}>
      <ProductForm handleSubmit={console.log} />
    </Layout>
);

export default connect(state => state, actions)(AddProduct);
