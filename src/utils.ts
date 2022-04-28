import { CoordinatesType, TouchEvent } from "./types";

export let generatorInstance: Generator<number> | null = null;

export const genNext = () => generatorInstance?.next();

export const sinusWaveY = (
  index = 0,
  height = 20,
  amplitude = 10,
  frequency = 10
) => {
  if (isNaN(index)) {
    return 0;
  }

  return Math.abs(height / 2 + amplitude * Math.sin(index / frequency) - 0);
};

export const getCoordinatesFromEvent = (
  event: TouchEvent<HTMLElement> | MouseEvent | any
): CoordinatesType => {
  const { changedTouches } = event;

  const target = event.target as HTMLElement;
  const rect = target.getBoundingClientRect();

  if (!changedTouches) {
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    return {
      x,
      y,
    };
  } else {
    const x = changedTouches[0].clientX - rect.left;
    const y = changedTouches[0].clientY - rect.top;

    return {
      x,
      y,
    };
  }
};

export const animateInitialData = function* (
  context: CanvasRenderingContext2D,
  initial: any[],
  color: string
) {
  let index = 0;

  while (index < initial.length) {
    if (index === 0) {
      context.beginPath();
      context.moveTo(initial[0].x, initial[0].y);
    }

    const item = initial[index];

    if (!item) {
      const next = initial[index + 1];
      const prev = initial[index - 1];

      if (next) {
        context.beginPath();
        context.moveTo(next.x, next.y);
      } else {
        context.beginPath();
        context.moveTo(prev.x, prev.y);
      }
    } else {
      context.lineTo(item.x, item.y);
      context.strokeStyle = color;
      context.stroke();
    }

    setTimeout(() => {
      if (generatorInstance) {
        window.requestAnimationFrame(genNext);
      }
    }, 10 + sinusWaveY(index));

    yield index++;
  }
};

export const initAnimation = (
  context: CanvasRenderingContext2D,
  initial: any[],
  color: string
) => {
  generatorInstance = animateInitialData(context, initial, color);
  generatorInstance.next();
};
