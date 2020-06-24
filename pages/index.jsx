import { Products } from '../components/Product/Products';
import { Layout } from '../components/Layout/Layout';
import { ItemCarousel } from '../components/Carousel/ItemCarousel';
import { getAllArticles } from '../lib/request';
import { connect } from 'react-redux';
import actions from '../lib/redux/actions';
import { useQuery } from '@apollo/react-hooks';

const carouselItems = [
  {
    id: 1,
    title: 'Gerste',
    desc: 'Auf unseren Feldern wächst das Getreide Österreichs.',
    image: "/gerste.JPG"
  },
  {
    id: 3,
    title: 'Kohlrabi',
    desc: 'Vitamin und ballaststoffreicher Kohlrabi für eine gesunde Ernährung',
    image: "/kohlrabi.JPG",
  },
  {
    id: 2,
    title: "Nüsse",
    desc: "Sie bieten viele wichtige Fette und Proteine für eine gesunde Ernährung",
    image: "/nuesse.JPG"
  },
]

const Home = (props) => {
  const { loading, error, data } = useQuery(getAllArticles);
  if (loading) { return "Loading..."; };
  if (error) { return "Error"; };
  console.log(data);
  return (
    <Layout title="Farmerzon" needAuthentication={true} {...props}>
      <div>
        <div>
          <ItemCarousel data={carouselItems} />
        </div>
    <Products articles={data.articles.map(item => ({
      ...item,
      key: item.articleId,
      unit: item.unit.name,
      image: '/apfel.JPG'
    }))} />
      </div>
    </Layout>
  );
}

export default connect(state => state, actions)(Home);
