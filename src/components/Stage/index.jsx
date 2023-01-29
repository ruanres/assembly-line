import React from 'react';
import './Stage.css';
import Item from '../Item';

const Stage = ({name}) => {

  const items = ['first', 'second', 'third', 'fourth'];
  
  return (
    <div className="assembly-stage">
      <div className='stage-name'>{name}</div>
      <div className="items-container">
        {
          items.map(name => 
            <Item 
              name={name} 
              key={name} 
              onRightClick={() => {}} 
              onLeftClick={() => {}} />
          )
        }
      </div>
    </div>
  )
}

export default Stage;