import Carousel from 'react-bootstrap/Carousel'
import styles from './CarouselItem.module.css';

export const ItemCarouselItem = ({ image, title, desc }) => {
  console.log('Item: ', image, title, desc);
  return (
    <Carousel.Item className={styles.slide}>
      <img
        className="d-block w-100"
        src={image}
        alt="Alt"
      />
      <Carousel.Caption>
        <h3>{title}</h3>
        <p>{desc}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )
};
