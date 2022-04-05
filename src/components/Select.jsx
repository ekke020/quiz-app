import styles from '../css/select.module.css';

const Select = ({ options, name }) => {
  return (
    <div className={styles.selectBody}>
      <div>
        <label>{name}</label>
      </div>
      <select className={styles.dropdown} name={name}>
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
