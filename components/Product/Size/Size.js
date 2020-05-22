const Size = (props) => {
  const style = {
    fontSize: 9
  }
  return (
    <div style={style}>
      {props.size} {props.unit} pro Stück
    </div>
  );
}

export default Size;
