import styles from './Amount.module.css';

const Amount = (props) => {
  let style = {
    color: 'green'
  };
  if (props.amount <= 0) {
    style.color = 'red';
  } else if (props.amount < 5) {
    style.color = 'orange';
  }
  return (
    <div className={styles.price}>
      <b style={style}> {props.amount <= 0 ? "Nicht vorhanden" : "Noch " + props.amount + " Stück im Lager."}</b>
    </div>);
}

export default Amount;
