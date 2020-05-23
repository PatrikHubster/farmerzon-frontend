import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({Component, pageProps}) => (
    <Component {...pageProps} />
)

export default MyApp;
