import CategorySelection from './CategorySelection';

const Select = ({ options, name, id }) => {
  const style = { margin: '10px' };
  return (
    <div style={style}>
      <select name={name} id={id}>
        {options.map((e, index) => (
          <CategorySelection key={index} text={e} />
        ))}
      </select>
    </div>
  );
};

export default Select;
