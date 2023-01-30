import React from 'react';
import './Stage.css';
import Item from '../Item';
import { useStageContext } from '../../contexts/AssemblyContext';

const Stage = ({name}) => {
  const {getStageItems, moveItemNext, moveItemPrevious} = useStageContext()
  const items = getStageItems(name);

  const Items = () => items.map(item => 
    <Item 
      name={item} 
      key={item} 
      onRightClick={() => moveItemNext(name, item)} 
      onLeftClick={() => moveItemPrevious(name, item)} />
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