import React from "react";
import Input from "../Input";
import Stage from "../Stage";
import './AssemblyLine.css';

const AssemblyLine = ({stages}) => {
  const onAddItem = item => console.log(item);

    const Stages = () => stages.map((stage) => <Stage name={stage} />)
  
    return (
      <>
        <Input onAddItem={onAddItem}/>
        <div className="stages-container">
          <Stages />
        </div>
      </>
    );
}

export default AssemblyLine;