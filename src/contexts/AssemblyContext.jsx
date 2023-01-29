import React, { createContext, useContext, useState } from "react";
import StageNode from "../Entities/StageNode";

const buildStageMap = (stageNames = []) => {
  const stageMap = {};
  let previousStage = null;
  for (const name of stageNames) {
    const currentStage = new StageNode(name, null, previousStage);
    if (previousStage) {
      previousStage.next = currentStage;
    }
    previousStage = currentStage;
    stageMap[name] = currentStage;
  }
  return stageMap;
}

export const StageLineContext = createContext({});

export const StageLineProvider = ({children, stageNames}) => {
  const stageMap = buildStageMap(stageNames);
  const [stages, setStages] = useState(stageMap);
  
  const addItem = (item) => {
    const initialStage = stageNames[0];  
    const stage = stages[initialStage];
    stage.insertItem(item)
    const newStages = {
      ...stages,
      [initialStage]: stage,
    };
    setStages(newStages);
  };

  const getStageItems = (stageName) => {
    return stages[stageName] ? stages[stageName].items : [];
  };
  
  return (
    <StageLineContext.Provider value={{addItem, getStageItems}} >
      {children}
    </StageLineContext.Provider>
  )
}

export const useStageContext = () => {
  return useContext(StageLineContext);
}



