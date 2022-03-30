import { categories, type, difficulty } from '../userInputData';

import Select from './Select';
import Select2 from './Select';

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to our Quiz!</h1>
      <label htmlFor='numberOfQuestions'>Number of Questions</label>
      <br />
      <div>
        <select name='numberOfQuestions' id='numQuestions'>
          <option value='optionOne'>1</option>
          <option value='optionTwo'>2</option>
          <option value='optionThree'>3</option>
          <option value='optionFour'>4</option>
          <option value='optionFive'>5</option>
        </select>
      </div>
      <br />
      <Select options={categories} name={'category'} id={'id'} />
      <br />

      <div>
        <Select options={type} name={'type'} id={'typeId'} />
      </div>
      <br />

      <div>
        <Select options={type} name={'type'} id={'typeId'} />
      </div>
      <br />
      <div>
        <button onClick={() => {}}>Start the Quiz!</button>
      </div>
    </div>
  );
};

export default Welcome;
