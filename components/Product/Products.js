import { client, getProducts } from '../../utils/graphql';
import { useQuery } from '@apollo/react-hooks';

const Products = (props) => {
  const { loading, error, data } = useQuery(getProducts, {
    fetchPolicy: 'no-cache'
  });
  if (loading) { console.error("Loading..."); return "Loading..."; };
  if (error) { console.error(`Error: ${error}`); console.error(data); return "Error"; };
  return (
    <div>
      {data.articles.map(product =>
        <Product name={product.name}
          price={product.price}
          description={product.description}
          amount={product.amount}
          size={product.size}
          unit={product.unit}
          key={product.id}
        />
      )}
    </div>
  );
}

export default Products;
