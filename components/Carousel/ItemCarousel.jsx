import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';

/**
 * data -> [{image, title, desc, id}, ...]
 * width -> image width
 * height -> image height
 */
export const ItemCarousel = ({ data }) => {
  return (
    <Carousel>
      {data.map(d => (
        <CarouselItem key={d.id}>
          <img
            className="d-block w-100"
            src={d.image}
            alt="slide"
          />
          <Carousel.Caption>
            <h3>{d.title}</h3>
            <p>{d.desc}</p>
          </Carousel.Caption>
        </CarouselItem>
      ))}
    </Carousel>
  );
};
