const InputNumbers = () => {
  const style = { margin: '10px' };

  return (
    <div style={style}>
      <div>
        <label>Amount of questions</label>
      </div>
      <input type='number' min={1} defaultValue={10}></input>
    </div>
  );
};
export default InputNumbers;
