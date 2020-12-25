import styled, { keyframes } from "styled-components";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { failureMessage, successMessage } from "../../locale/en/main.json";
import { selectLevelCompletionState } from "../../currentLevel/selectors/selectLevelCompletionState";
import { LevelCompletionState } from "../../currentLevel/slice";

const fadeIn = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }

  to {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const OverlayDisplay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  animation: ${fadeIn} 0.5s linear 0s;
`;

const messageByState: Record<string, string> = {
  [LevelCompletionState.Lost]: failureMessage,
  [LevelCompletionState.Won]: successMessage,
};

export const GameEndAnnouncement: FunctionComponent = () => {
  const levelCompletionState = useSelector(selectLevelCompletionState);
  const message = messageByState[levelCompletionState];
  if (message === undefined) {
    return null;
  }
  return <OverlayDisplay>{message}</OverlayDisplay>;
};
