import { Layout } from '../../components/Layout/Layout';
import { connect } from 'react-redux';
import actions from '../../lib/redux/actions';
import { ProductForm } from '../../components/ProductForm/ProductForm';
import { createArticle } from '../../lib/request';
import { useMutation } from '@apollo/react-hooks';

const AddProduct = () => {
  const [updateArticle] = useMutation(createArticle);

  return (
    <Layout title="Produkt hinzufügen" needAuthentication={false}>
      <ProductForm handleSubmit={(e) => {
        const target =  
          {
            ...e,
            unit: {
              name: e.unit
            }
          };
          console.log(target);
        updateArticle({ variables: { article: target } });
      }} />
    </Layout>
  );
};

export default connect(state => state, actions)(AddProduct);
