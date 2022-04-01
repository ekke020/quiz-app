import CategorySelection from './CategorySelection';

const Select = ({ options, name, id }) => {
  const style = { margin: '10px' };
  return (
    <div style={style}>
      <select name={name} id={id}>
        {options.map((option, index) => (
          <CategorySelection key={index} value={option.value} name={option.name} />
        ))}
      </select>
    </div>
  );
};

export default Select;
