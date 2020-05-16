import './Description.css';

const Description = (props) => (
  <div className="description">
    <textarea readOnly className="desc" value={props.description} />
  </div>
)

export default Description;
