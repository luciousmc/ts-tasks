import React, { ReactElement, useRef } from 'react';
import './InputField.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

function InputField({ todo, setTodo, handleAdd }: Props): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    handleAdd(e);
    inputRef.current?.blur;
  };

  return (
    <div className='inputField'>
      <form className='inputField__form' onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
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
