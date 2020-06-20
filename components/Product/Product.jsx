import Amount from './Amount/Amount';
import Price from './Price/Price';
import Size from './Size/Size';
import styles from './Product.module.css';
import { Card } from '../Card/Card';
import { Button } from 'react-bootstrap';
import { OrderForm } from '../OrderForm/OrderForm';
import React, { useState } from 'react';

export const Product = ({ name, description, image, price, size, amount, unit }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card title={name} text={description} image={image}>
      <div className={styles.cardFooter}>
        <div className={styles.parent}>
          <Price price={price} className={styles.inlineBlock} />
          <Button size="sm" onClick={handleShow}>Bestellen</Button>
        </div>
        <div className={styles.parent}>
          <Size size={size} unit={unit} />
          <Amount amount={amount} className={styles.inlineBlock} />
        </div>
      </div>
      <OrderForm
        show={show}
        handleClose={handleClose}
        product={{ name, description, image, price, size, amount, unit }}
        handleSubmit={console.log}
      />
    </Card>)
};
