// http://jsfiddle.net/xt4erwog/4/
import * as React from "react";
import initial from "./mock.js";

interface HandSignedProps {}
interface Ref {
  getRawData: any | null;
}

interface TouchEvent<T = Element> extends React.UIEvent<T, React.TouchEvent> {
  altKey: boolean;
  changedTouches: TouchList;
  ctrlKey: boolean;
  getModifierState(key: string): boolean;
  metaKey: boolean;
  shiftKey: boolean;
  targetTouches: TouchList;
  touches: TouchList;
}

type CoordinatesType = {
  x: number;
  y: number;
};

// TODO: https://technotip.com/3421/accessing-raw-pixel-data-in-canvas-html5/

const getCoordinatesFromEvent = (
  event: TouchEvent<HTMLElement> & MouseEvent
): CoordinatesType => {
  const { changedTouches } = event;

  const target = event.target as HTMLElement;
  const rect = target.getBoundingClientRect();

  // Mouse position
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

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

const sinusWave = (index = 0, height = 30, amplitude = 30, frequency = 20) => {
  if (isNaN(index)) {
    return 0;
  }

  return Math.abs(height / 2 + amplitude * Math.sin(index / frequency) - 0);
};

let gen: Generator<number> | null = null;

const animateInitialData = function* (
  context: CanvasRenderingContext2D | null,
  initial: any[]
) {
  let index = 0;

  while (index < initial.length) {
    if (context && initial.length > 0) {
      if (index === 0) {
        context.beginPath();
        context.moveTo(initial[0].x, initial[0].y);
      }

      const item = initial[index];
      if (!item) {
        const next = initial[index + 1];

        if (next) {
          context.beginPath();
          context.moveTo(next.x, next.y);
        } else {
          const prev = initial[index - 1];
          context.beginPath();
          context.moveTo(prev.x, prev.y);
        }
      } else {
        context.lineTo(item.x, item.y);
        context.stroke();
      }
    }

    setTimeout(() => {
      window.requestAnimationFrame(() => {
        gen?.next();
      });
    }, 20 + sinusWave(index));

    yield index++;
  }
};

export const HandSigned = React.forwardRef<Ref, HandSignedProps>(
  (props, ref) => {
    const mainRef = React.useRef<HTMLDivElement>(null);
    const internalRef = React.useRef<HTMLCanvasElement>(null);
    const [raw, setRaw] = React.useState<any[]>([]);
    const [width, setWidth] = React.useState<number>(0);
    const [isDrawing, setIsDrawing] = React.useState<boolean>(false);
    const [context, setContext] =
      React.useState<CanvasRenderingContext2D | null>(null);

    const handleMouseDown = (event: any) => {
      if (context) {
        const { x, y } = getCoordinatesFromEvent(event);

        context.beginPath();
        context.moveTo(x, y);

        setIsDrawing(true);
      }
    };

    const handleMouseMove = (event: any) => {
      if (context && isDrawing) {
        const { x, y } = getCoordinatesFromEvent(event);

        context.lineTo(x, y);
        context.stroke();

        raw.push({ x, y });

        setRaw(raw);
      }
    };

    const handleMouseUp = (event: any) => {
      if (context && isDrawing) {
        const { x, y } = getCoordinatesFromEvent(event);

        context.lineTo(x, y);
        context.stroke();

        raw.push(null);
        setRaw(raw);

        setIsDrawing(false);
      }
    };

    React.useImperativeHandle(ref, () => ({
      getRawData: () => {
        return raw;
      },
    }));

    const init = () => {
      const { current } = internalRef;

      if (current) {
        const context = current.getContext("2d");

        if (context) {
          context.shadowColor = "rgba(0,0,0,.5)";
          context.shadowBlur = 1;
          context.lineCap = "round";
          context.lineJoin = "round";
          context.lineWidth = 3;

          setContext(context);
        }
      }
    };

    React.useEffect(() => {
      init();
    }, []);

    React.useEffect(() => {
      let resizeObserver: any | null = new ResizeObserver((entries) => {
        setWidth(mainRef.current?.clientWidth);
        init();
      });

      resizeObserver.observe(mainRef.current);

      return () => {
        resizeObserver.disconnect();
        resizeObserver = null;
      };
    }, [mainRef]);

    React.useEffect(() => {
      gen = animateInitialData(context, initial);
      gen.next();
    }, [context, init]);

    console.log(JSON.stringify(raw));
    return (
      <div ref={mainRef}>
        <canvas
          width={width}
          height="300"
          ref={internalRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseOut={handleMouseUp}
          onTouchEnd={handleMouseUp}
        />
      </div>
    );
  }
);
