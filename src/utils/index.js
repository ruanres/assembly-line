import StageNode from "../entities/StageNode";

export const buildStageMap = (stageNames = []) => {
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
