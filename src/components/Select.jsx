const Select = ({ options, name }) => {
  const style = { margin: '10px' };

  return (
    <div style={style}>
      <div>
        <label>{name}</label>
      </div>
      <select name={name}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
