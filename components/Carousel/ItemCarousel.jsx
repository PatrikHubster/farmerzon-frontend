import Carousel from 'react-bootstrap/Carousel';
import { ItemCarouselItem } from './ItemCarouselItem';
import { useState } from 'react';

/**
 * data -> [{image, title, desc}, ...]
 */
export const ItemCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: "750px" }}>
      {data.map(data => <ItemCarouselItem
        image={data.image}
        title={data.name}
        desc={data.description}
        key={data.id}
      />)}
    </Carousel>
  );
};
