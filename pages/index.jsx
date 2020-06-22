import { Products } from '../components/Product/Products';
import { Layout } from '../components/Layout/Layout';
import { ItemCarousel } from '../components/Carousel/ItemCarousel';
import { getAllArticles } from '../lib/request';
import { client } from '../lib/apollo';

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
  return (
    <Layout title="Farmerzon" needAuthentication={true}>
      <div>
        <div>
          <ItemCarousel data={carouselItems} />
        </div>
        <Products articles={() => 
          client.query({
            query: getAllArticles
          }).then(result => result)}/>
      </div>
    </Layout>
  );
}

export default Home;
