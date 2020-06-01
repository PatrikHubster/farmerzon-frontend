import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import styles from './ItemCarousel.module.css';

/**
 * data -> [{image, title, desc, id}, ...]
 * width -> image width
 * height -> image height
 */
export const ItemCarousel = ({ data }) => {
  return (
    <Carousel controls={false} className={styles.imageInCarousel}>
      {data.map(d => (
        <CarouselItem key={d.id} className={styles.imageInCarousel}>
          <img
            className="d-block w-100"
            src={d.image}
            alt="slide"
          />
          {d.title || d.desc ?
            <Carousel.Caption className={styles.caption}>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </Carousel.Caption>
           : ''}
        </CarouselItem>
      ))}
    </Carousel>
  );
};
