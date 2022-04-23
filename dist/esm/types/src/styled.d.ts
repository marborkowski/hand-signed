import React from "react";
import { AnimationDirectionType, AnimationType } from "./types";
export declare const Colorama: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DEFAULT_COLORS: string[];
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {
    colors?: string[] | undefined;
    bg?: boolean | undefined;
    ref?: React.RefObject<HTMLElement> | undefined;
}, never>;
export declare const Overflow: import("styled-components").StyledComponent<"div", any, {
    animate?: boolean | undefined;
    length?: number | undefined;
    animationDirection?: AnimationDirectionType | undefined;
    animationType?: AnimationType | undefined;
}, never>;
