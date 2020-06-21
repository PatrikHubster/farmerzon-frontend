import { Products } from '../components/Product/Products';
import { Layout } from '../components/Layout/Layout';
import { ItemCarousel } from '../components/Carousel/ItemCarousel';
import { useQuery } from '@apollo/react-hooks';
import { getAllArticles } from '../lib/request';

const carouselItems = [
  {
    id: 1,
    title: 'Gerste',
    desc: 'Auf unseren Feldern wächst das Getreide Österreichs.',
    image: "/gerste.jpg"
  },
  {
    id: 3,
    title: 'Kohlrabi',
    desc: 'Vitamin und ballaststoffreicher Kohlrabi für eine gesunde Ernährung',
    image: "/kohlrabi.jpg",
  },
  {
    id: 2,
    title: "Nüsse",
    desc: "Sie bieten viele wichtige Fette und Proteine für eine gesunde Ernährung",
    image: "/nuesse.jpg"
  },
]

const Home = () => {
  const { loading, error, data } = useQuery(getAllArticles);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Layout title="Farmerzon">
      <div>
        <ItemCarousel data={carouselItems} />
      </div>
      <Products articles={data.articles.map(item => ({
        ...item,
        id: item.articleId,
        image: "/apfel.jpg",
        unit: item.unit.name
      }))} />
    </Layout>
  )
}

export default Home;
