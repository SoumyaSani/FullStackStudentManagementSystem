import React, { useState } from 'react';

const Linkbtndropandradio = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('');

  // Radio options based on dropdown selection
  const radioOptions = {
    UG: ['BSc', 'Bcom', 'BCA'],
    PG: ['MSC', 'MCOM', 'MCA'],
    
  };

  return (
    <div className="pb-2 space-x-4">
      {/* Dropdown */}
      <label className='text-gray-500' >Qualification:</label>
      <select
        className="border rounded-sm "
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
          setSelectedRadio(''); // Reset radio selection
        }}
      >
        <option value="">-- Select Category --</option>
        <option value="UG">UG</option>
        <option value="PG">PG</option>
       
      </select>

      {/* Radio Buttons */}
      {selectedOption && (
        <div className="space-y-2">
          <p className="text-gray-400">Course :</p>
          {radioOptions[selectedOption].map((item) => (
            <label key={item} className="flex items-center space-x-2">
                
              <input
                type="radio"
                name="option"
                value={item}
                checked={selectedRadio === item}
                onChange={(e) => setSelectedRadio(e.target.value)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Linkbtndropandradio;
