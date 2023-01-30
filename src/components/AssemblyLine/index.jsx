import React from "react";
import Input from "../Input";
import Stage from "../Stage";
import './AssemblyLine.css';
import Divider from "../Divider";
import { StageLineProvider } from '../../context/AssemblyContext';

const AssemblyLine = ({stages}) => {
    if (!stages) return null;

    const Stages = () => stages.map((stage) => <Stage key={stage} name={stage} />)
  
    return (
      <>
        <StageLineProvider stageNames={stages}>
          <Input />
          <Divider />
          <div className="stages-container">
            <Stages />
          </div>
        </StageLineProvider>
      </>
    );
}

export default AssemblyLine;