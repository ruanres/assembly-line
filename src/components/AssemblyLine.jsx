import React from "react";
import Input from "./input";

const AssemblyLine = () => {
  const onAddItem = item => console.log(item);
  
    return (
      <>
        <Input  onAddItem={onAddItem}/>
      </>
    );
}

export default AssemblyLine;