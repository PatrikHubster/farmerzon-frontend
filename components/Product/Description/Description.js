import styles from './Description.module.css';

const Description = (props) => (
  <div className="description">
    <textarea readOnly className={styles.desc} value={props.description} />
  </div>
)

export default Description;
