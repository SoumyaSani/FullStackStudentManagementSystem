import React, { useState } from 'react';

function SubmitData() {
  const languages = ['Java', 'Python', 'JavaScript', 'C++'];
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // Add to array if not already present
      setSelectedLanguages([...selectedLanguages, value]);
    } else {
      // Remove from array if unchecked
      setSelectedLanguages(
        selectedLanguages.filter((lang) => lang !== value)
      );
    }
  };

  return (
    <div>
      <h3>Select Languages:</h3>
      {languages.map((lang) => (
        <label key={lang}>
          <input
            type="checkbox"
            value={lang}
            checked={selectedLanguages.includes(lang)}
            onChange={handleCheckboxChange}
          />
          {lang}
        </label>
      ))}

      <h4>Checked Values:</h4>
      <ul>
        {selectedLanguages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
    </div>
  );
}

export default SubmitData;
