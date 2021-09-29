import React, { ReactElement } from 'react';
import './InputField.css';

interface Props {}

function InputField({}: Props): ReactElement {
  return (
    <div className='inputField'>
      <form className='inputField__form'>
        <input
          type='input'
          placeholder='Enter Task'
          className='inputField__formInput'
        />
        <button className='inputField__formSubmit'>Go</button>
      </form>
    </div>
  );
}

export { InputField };
