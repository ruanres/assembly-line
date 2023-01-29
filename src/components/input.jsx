import React from 'react';

const Input = ({onAddItem}) => {

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      onAddItem(event.target.value);
      event.target.value = '';
    }
  };
  
  return (
    <div className='item'>
      <div> Add an item:</div>
      <input type="text" onKeyDown={onEnter}/>
    </div>
  )
};

export default Input;