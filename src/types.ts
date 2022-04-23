export type ColorType = string;

export enum AnimationDirectionType {
  REVERSE = "reverse",
  NORMAL = "normal",
}

export enum AnimationType {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}

export interface ColoramaProps {
  colors?: ColorType[];
  bg?: boolean;
  text: string;
  animate?: boolean;
  animationDirection?: AnimationDirectionType;
  animationType?: AnimationType;
}
