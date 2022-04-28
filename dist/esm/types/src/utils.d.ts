import { CoordinatesType, TouchEvent } from "./types";
export declare let generatorInstance: Generator<number> | null;
export declare const genNext: () => IteratorResult<number, any> | undefined;
export declare const sinusWaveY: (index?: number, height?: number, amplitude?: number, frequency?: number) => number;
export declare const getCoordinatesFromEvent: (event: TouchEvent<HTMLElement> | MouseEvent | any) => CoordinatesType;
export declare const animateInitialData: (context: CanvasRenderingContext2D, initial: any[], color: string) => Generator<number, void, unknown>;
export declare const initAnimation: (context: CanvasRenderingContext2D, initial: any[], color: string) => void;
