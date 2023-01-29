import React from 'react';
import './Stage.css';
import Item from '../Item';

const Stage = ({name}) => {

  const items = ['first', 'second', 'third', 'fourth'];

  const Items = () => items.map(name => 
    <Item 
      name={name} 
      key={name} 
      onRightClick={() => {}} 
      onLeftClick={() => {}} />
  );
  
  return (
    <div className="assembly-stage">
      <div className='stage-name'>{name}</div>
      <div className="items-container">
        <Items />
      </div>
    </div>
  )
}

export default Stage;