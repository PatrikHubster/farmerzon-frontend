import styles from './Card.module.css';

const Card = (props) => (
  <div className="card">
    <div className={styles.container}>
      {props.children}
    </div>
  </div>
)

export default Card;
