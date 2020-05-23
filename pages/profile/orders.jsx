import { Layout } from '../../components/Layout/Layout';
import { Orders } from '../../components/Order/Orders';

const data = [
    {
        id: 1,
        image: 'https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg',
        name: 'Reis',
        description: 'Feinster Reis aus der Provinz Ang Thong',
        deliveryStatus: 'open',
        orderOrDeliveryDate: '31.12.2019',
    },
    {
        id: 2,
        image: 'https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg',
        name: 'Reis',
        description: 'Feinster Reis aus der Provinz Ang Thong',
        deliveryStatus: 'sent',
        orderOrDeliveryDate: '31.12.2019',
    },
    {
        id: 3,
        image: 'https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg',
        name: 'Reis',
        description: 'Feinster Reis aus der Provinz Ang Thong',
        deliveryStatus: 'sent',
        orderOrDeliveryDate: '31.12.2019',
    },
    {
        id: 4,
        image: 'https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg',
        name: 'Reis',
        description: 'Feinster Reis aus der Provinz Ang Thong',
        deliveryStatus: 'delivered',
        orderOrDeliveryDate: '31.12.2019',
    },
    {
        id: 5,
        image: 'https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg',
        name: 'Reis',
        description: 'Feinster Reis aus der Provinz Ang Thong',
        deliveryStatus: 'delivered',
        orderOrDeliveryDate: '31.12.2019',
    },
    {
        id: 6,
        image: 'https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg',
        name: 'Reis',
        description: 'Feinster Reis aus der Provinz Ang Thong',
        deliveryStatus: 'open',
        orderOrDeliveryDate: '31.12.2019',
    },
]

const OrderPage = () => (
    <Layout title="Bestellungen">
      <Orders data={data} />
    </Layout>
)

export default OrderPage;
