import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { categories, type, difficulties } from '../userInputData';
import InputNumbers from './InputNumbers';

import Select from './Select';

const Welcome = () => {
  const click = (event) => {
    event.preventDefault();
    const inputData = {
      nrQuestions: event.target[0].value,
      category: event.target[1].value,
      type: event.target[2].value,
      difficulty: event.target[3].value
    }
   
  }
  return (
    <div>
      <h1>Welcome to our Quiz!</h1>
      <p>Please make some choices!</p>

      <form onSubmit={(e) => click(e)}>
      <InputNumbers />
      
      <Select options={categories} name={'category'} id={'id'} />
     
      <Select options={type} name={'type'} id={'typeId'} />
     
      <Select options={difficulties} name={'difficulties'} id={'diffId'} />
     
      <input type="submit" value="Start quiz"/>
      </form>
    </div>
  );
};

export default Welcome;

// onClick={click}