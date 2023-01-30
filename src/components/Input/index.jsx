import React from 'react';
import './Input.css'
import { useStageContext } from '../../contexts/AssemblyContext';


const Input = () => {
  const { addItem } = useStageContext()

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      addItem(event.target.value);
      event.target.value = '';
    }
  };
  
  return (
    <div className='item'>
      <div> Add an item:</div>
      <input className='assembly-add-item' type="text" onKeyDown={onEnter}/>
    </div>
  )
};

export default Input;