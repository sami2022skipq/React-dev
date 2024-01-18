import React, { useState } from 'react';

function RadioForm() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Do something with the selected option
  //   console.log('Selected option:', selectedOption);
  // };

  return (
    <div className='form'>
      <div>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          Option 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          Option 2
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          Option 3
        </label>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}

export default RadioForm;
