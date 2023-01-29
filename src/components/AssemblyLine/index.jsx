import React from "react";
import Input from "../Input";
import Item from "../Item";

const AssemblyLine = () => {
  const onAddItem = item => console.log(item);

  const onRightClick = () => console.log('right');
  const onLeftClick = () => console.log('left');
  
    return (
      <>
        <Input  onAddItem={onAddItem}/>
        <Item name='banana' onRightClick={onRightClick} onLeftClick={onLeftClick} />
      </>
    );
}

export default AssemblyLine;