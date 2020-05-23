import { Products } from '../components/Product/Products';
import { Layout } from '../components/Layout/Layout';

const products = [
  {
    id: 1,
    name: 'Milch',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'l'
  },
  {
    id: 2,
    name: 'Milch',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'l'
  },
  {
    id: 3,
    name: 'Milch',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'l'
  },
  {
    id: 4,
    name: 'Milch',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'l'
  },
  {
    id: 5,
    name: 'Milch',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'l'
  },
];

const Home = () => {
  return (
    <Layout>
      Main Page
      <Products articles={products} className="container" />
    </Layout>
  )
}

export default Home;
