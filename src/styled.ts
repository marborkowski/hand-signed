import React from "react";
import styled, { css, keyframes } from "styled-components";
import { AnimationDirectionType, AnimationType } from "./types";

export const Colorama = styled.div``;

export const DEFAULT_COLORS: string[] = [
  "#8000ff",
  "#FD0311",
  "#FB8201",
  "#FFF803",
  "#00FF05",
  "#0580FF",
];

const rideRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const rideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const rideTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const rideBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const getRideKeyframes = (type: AnimationType | undefined) => {
  if (type === AnimationType.BOTTOM) {
    return rideBottom;
  }

  if (type === AnimationType.LEFT) {
    return rideLeft;
  }

  if (type === AnimationType.RIGHT) {
    return rideRight;
  }

  if (type === AnimationType.TOP) {
    return rideTop;
  }

  return rideLeft;
};
const getAnimationTime = (
  type: AnimationType | undefined,
  length: number = 0
) => {
  if (type === AnimationType.BOTTOM) {
    return 800;
  }

  if (type === AnimationType.LEFT) {
    return length * 80;
  }

  if (type === AnimationType.RIGHT) {
    return length * 95;
  }

  if (type === AnimationType.TOP) {
    return 800;
  }

  return 800;
};

const applyNthChildStyles = (
  colorArray: string[] = DEFAULT_COLORS,
  bg: boolean = false
) => {
  const output = colorArray.map((color, i) => {
    return `
      &:nth-child(${colorArray.length}n+${i}) {
        color: ${bg ? "#fff" : color};
        background-color: ${bg ? color : "none"};
        min-width: ${bg ? "1.5em" : "auto"};
        line-height: ${bg ? "1.5em" : "auto"};
        text-align: center;
        display: inline-block;
      }
    `;
  });

  return css`
    ${output.join("")}
  `;
};

export const Wrapper = styled.div<{
  colors?: string[];
  bg?: boolean;
  ref?: React.RefObject<HTMLElement> | undefined;
}>`
  position: relative;
  overflow-x: hidden;

  span.hand-signed {
    ${(props) => applyNthChildStyles(props.colors || DEFAULT_COLORS, props.bg)}
    opacity: 1;
  }
`;

export const Overflow = styled.div<{
  animate?: boolean;
  length?: number;
  animationDirection?: AnimationDirectionType;
  animationType?: AnimationType;
}>`
  position: relative;
  ${(props) =>
    props.animate &&
    css`
      animation-direction: ${props.animationDirection} !important;
      animation: ${getRideKeyframes(props.animationType)}
        ${getAnimationTime(props.animationType, props.length)}ms ease forwards;
    `}
`;
