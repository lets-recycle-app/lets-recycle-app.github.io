import React, { useState } from 'react';
import './AdminPostCode.css';

const AdminPostCode = () => {
  const [postCode, setPostCode] = useState('');

  let inputCode = {
    background: '#ffffff',
  };

  const validatePostcode = () => true;

  const handleClick = () => {
    if (validatePostcode(postCode)) {
      inputCode = {
        color: '#73f175',
      };
    }

    setPostCode('');
  };

  return (
    <div>
      <label htmlFor="input-post-code">Validate Post Code</label>
      <input
        value={ postCode }
        onChange={ (e) => setPostCode(e.target.value) }
        id="input-post-code"
        className={inputCode}
      >
      </input>
      <button onClick={ handleClick} className="button button-checkcode">Check</button>
    </div>
  );
};

export default AdminPostCode;
