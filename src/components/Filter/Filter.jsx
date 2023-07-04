export const Filter = props => {
  const onChange = event => {
    const filter = event.target.value;
    props.changeFilter(filter);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input name="filter" type="text" onChange={onChange} />
    </div>
  );
};
