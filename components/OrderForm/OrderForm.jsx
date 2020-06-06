import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import styles from './OrderForm.module.css';

export const OrderForm = ({ product, handleSubmit, handleClose, show }) => {
  const [count, setCount] = useState(0);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>{product.name}</Modal.Header>
      <Modal.Body className={styles.body}>
        <Row>
          {product.description}
        </Row>
        <Row>
          <input type="number" min="0" max={product.amount}
            value={count} onChange={(event) => setCount(event.target.value)} />
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Abbrechen
        </Button>
        <Button variant="primary" onClick={() => handleSubmit({ ...product, count: +count })}>
          Bestellen
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

