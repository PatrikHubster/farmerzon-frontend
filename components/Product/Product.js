import Amount from './Amount/Amount';
import Description from './Description/Description';
import Name from './Name/Name';
import Price from './Price/Price';
import Size from './Size/Size';
import './Product.css';

const Product = (props) => (
  <div className="card">
    <div className="container">
      <Name name={props.name} />
      <Description description={props.description} />
      <div className="card-footer">
        <div className="parent">
          <Price price={props.price} className="inline-block" />
          <Amount amount={props.amount} className="inline-block" />
        </div>
        <Size size={props.size} unit={props.unit} />
      </div>
    </div>
  </div>
);

export default Product;
