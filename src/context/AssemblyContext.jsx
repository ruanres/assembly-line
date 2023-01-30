import React, { createContext, useContext, useState } from "react";
import { buildStageMap } from "../utils";

export const StageLineContext = createContext({});

export const StageLineProvider = ({children, stageNames}) => {
  const stageMap = buildStageMap(stageNames);
  const [stages, setStages] = useState(stageMap);

  const updateStage = (stage) => {
    const newStages = {
      ...stages,
      [stage.name]: stage,
    };
    setStages(newStages);
  }
  
  const addItem = (item) => {
    const initialStage = stageNames[0];  
    const stage = stages[initialStage];
    stage.insertItem(item)
    updateStage(stage);
  };

  const getStageItems = (stageName) => {
    return stages[stageName] ? stages[stageName].items : [];
  };

  const moveItemNext = (stageName, item) => {
    const stage = stages[stageName];
    stage.moveItemToNext(item);
    updateStage(stage);
  }

  const moveItemPrevious = (stageName, item) => {
    const stage = stages[stageName];
    stage.moveItemToPrevious(item);
    updateStage(stage);
  }
  
  return (
    <StageLineContext.Provider value={{
        addItem, getStageItems, moveItemNext, moveItemPrevious,
      }} >
      {children}
    </StageLineContext.Provider>
  )
}

export const useStageContext = () => {
  return useContext(StageLineContext);
}



