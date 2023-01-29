import React from 'react';
import './Item.css';

const Item = ({name, onRightClick, onLeftClick}) => {
  const handleEvent = (event) => {
      if (event.type === 'click') {
        onLeftClick();
      } else if (event.type === 'contextmenu') {
      onRightClick();
    }
    event.preventDefault();
  };
  
  return (
    <div>
      <button 
        className='assembly-item' 
        onClick={handleEvent} onContextMenu={handleEvent}>
          {name}
      </button>
    </div>
  )
};

export default Item;
