import { Products } from '../components/Product/Products';
import { Layout } from '../components/Layout/Layout';

const products = [
  {
    id: 1,
    name: 'Tomaten',
    description: 'einzigartig frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg'
  },
  {
    id: 2,
    name: 'Tomaten',
    description: 'Sehr frisch und mit ganz viel Liebe großgezogen und geerntet. Schmecken engelsgleich.',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg'
  },
  {
    id: 3,
    name: 'Tomaten',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg'
  },
  {
    id: 4,
    name: 'Tomaten',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg'
  },
  {
    id: 5,
    name: 'Tomaten',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg'
  },
  {
    id: 6,
    name: 'Tomaten',
    description: 'einzigartig frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg'
  },
  {
    id: 7,
    name: 'Tomaten',
    description: 'Sehr frisch und mit ganz viel Liebe großgezogen und geerntet. Schmecken engelsgleich.',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg'
  },
  {
    id: 8,
    name: 'Tomaten',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg'
  },
  {
    id: 9,
    name: 'Tomaten',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg'
  },
  {
    id: 10,
    name: 'Tomaten',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg'
  },
];

const Home = () => {
  return (
    <Layout title="Farmerzon">
      <Products articles={products} />
    </Layout>
  )
}

export default Home;
