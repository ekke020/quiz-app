import { categories, type, difficulties } from '../userInputData';
import InputNumbers from './InputNumbers';
import Select from './Select';

const Welcome = ({ setData }) => {
  const click = (event) => {
    event.preventDefault();
    const inputData = {
      amount: event.target[0].value,
      category: event.target[1].value,
      difficulty: event.target[2].value,
      type: event.target[3].value,
    };
    console.log(setData);
    setData(inputData);
  };
  return (
    <div>
      <h1>Welcome to our Quiz!</h1>
      <p>Please make some choices!</p>

      <form onSubmit={(e) => click(e)}>
        <InputNumbers />

        <Select options={categories} name={'category'} id={'id'} />

        <Select options={difficulties} name={'difficulties'} id={'diffId'} />

        <Select options={type} name={'type'} id={'typeId'} />


        <input type="submit" value="Start quiz" />
      </form>
    </div>
  );
};

export default Welcome;
