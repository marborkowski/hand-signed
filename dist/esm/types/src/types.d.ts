import React from "react";
export declare type CoordinatesType = {
    x: number;
    y: number;
};
export interface HandSignedProps extends React.HTMLAttributes<HTMLCanvasElement> {
    initialData?: CoordinatesType[];
    color?: string;
    width?: string;
    height?: string;
}
export interface Ref {
    getRawData: () => CoordinatesType[];
    clear: () => void;
    getDataURL: () => string;
}
export interface TouchEvent<T = Element> extends React.UIEvent<T, React.TouchEvent> {
    altKey: boolean;
    changedTouches: TouchList;
    ctrlKey: boolean;
    getModifierState(key: string): boolean;
    metaKey: boolean;
    shiftKey: boolean;
    targetTouches: TouchList;
    touches: TouchList;
}
