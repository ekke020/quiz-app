const InputNumbers = () => {
  const style = { margin: '10px' };

  return (
    <div style={style}>
      <label>Amount of questions</label>
      <br />
      <input type="number" min={1} defaultValue={10}></input>
    </div>
  );
};

export default InputNumbers;
