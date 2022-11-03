/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";
import { v4 as uuidv4 } from "uuid";

const Size = {
  small: {
    "--border-radius": "4px",
    "--padding": "0px",
    "--height": "8px",
  },
  medium: {
    "--border-radius": "4px",
    "--padding": "0px",
    "--height": "12px",
  },
  large: {
    "--border-radius": "8px",
    "--padding": "4px",
    "--height": "24px",
  },
};

const ProgressBar = ({ value, size }) => {
  const uniqueId = uuidv4();
  const styles = Size[size];
  return (
    <Wrapper>
      <Label htmlFor={`loadinglabel-${uniqueId}`}>{value}%</Label>
      <ProgressContainer
        style={styles}
        role="progressbar"
        aria-labelledby={`loadinglabel-${uniqueId}`}
      >
        <Progress id={`loadinglabel-${uniqueId}`} value={value}></Progress>
      </ProgressContainer>
    </Wrapper>
  );
};

const Label = styled.label`
  width: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 320px;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: var(--height);
  border-radius: var(--border-radius);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  overflow: hidden;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Progress = styled.div`
  width: ${(props) => props.value}%;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  ${(props) => props.value > 99 && "border-top-right-radius: 4px"};
  ${(props) => props.value > 99 && "border-bottom-right-radius: 4px"};
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
