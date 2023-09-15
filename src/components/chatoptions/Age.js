import React, { useState } from 'react';

const Age = (props) => {
  const ageOptions = [];
  const [selectedAge, setSelectedAge] = useState('');

  for (let age = 18; age <= 40; age++) {
    ageOptions.push(age.toString());
  }

  // This piece of code is handling the age input from the user
  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
    props.actionProvider.handleAge(event.target.value);
  };

// this is responsible for showing the age dropdown
  return (
    <div>
      <label htmlFor="age">Age: </label>
      <select name="age" id="age" value={selectedAge} onChange={handleAgeChange}>
        {ageOptions.map((age, id) => (
          <option value={age} key={id}>
            {age}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Age;
