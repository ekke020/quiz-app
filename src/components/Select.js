import CategorySelection from './CategorySelection';

const Select = ({ options, name, id }) => {
  return (
    <div>
      <select name={name} id={id}>
        {options.map((e, index) => (
          <CategorySelection key={index} text={e} />
        ))}
      </select>
    </div>
  );
};

export default Select;
