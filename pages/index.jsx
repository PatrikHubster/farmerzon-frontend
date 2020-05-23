import { Products } from '../components/Product/Products';
import { Layout } from '../components/Layout/Layout';
import { ItemCarousel } from '../components/Carousel/ItemCarousel';

const products = [
  {
    id: 1,
    name: 'Tomaten',
    description: 'einzigartig frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg/1024px-Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg"
  },
  {
    id: 2,
    name: 'Tomaten',
    description: 'Sehr frisch und mit ganz viel Liebe großgezogen und geerntet. Schmecken engelsgleich.',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg/1024px-Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg"
  },
  {
    id: 3,
    name: 'Tomaten',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg/1024px-Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg"
  },
  {
    id: 4,
    name: 'Tomaten',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg/1024px-Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg"
  },
  {
    id: 5,
    name: 'Tomaten',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg/1024px-Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg"
  },
  {
    id: 6,
    name: 'Tomaten',
    description: 'einzigartig frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg/1024px-Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg"
  },
  {
    id: 7,
    name: 'Reis',
    description: 'Feinster Reis aus Ang Thong',
    price: 1,
    size: 2,
    amount: 100,
    unit: 'kg',
    image: "https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg"
  },
  {
    id: 8,
    name: 'Tomaten',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg/1024px-Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg"
  },
  {
    id: 9,
    name: 'Tomaten',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg/1024px-Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg"
  },
  {
    id: 10,
    name: 'Tomaten',
    description: 'frisch',
    price: 3.24,
    size: 2,
    amount: 100,
    unit: 'kg',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg/1024px-Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg"
  },
];

const Home = () => {
  return (
    <Layout title="Farmerzon">
      <ItemCarousel data={products.slice(0, 3)} />
      <Products articles={products} />
    </Layout>
  )
}

export default Home;
