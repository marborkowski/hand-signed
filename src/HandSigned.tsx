// http://jsfiddle.net/xt4erwog/4/
import * as React from "react";

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

export const HandSigned = React.forwardRef<Ref, HandSignedProps>(
  (props, ref) => {
    const mainRef = React.useRef<HTMLDivElement>(null);
    const internalRef = React.useRef<HTMLCanvasElement>(null);
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
      }
    };

    const handleMouseUp = (event: any) => {
      if (context && isDrawing) {
        const { x, y } = getCoordinatesFromEvent(event);

        context.lineTo(x, y);
        context.stroke();

        setIsDrawing(false);
      }
    };

    React.useImperativeHandle(ref, () => ({
      getRawData: () => {
        return "dupa";
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
      console.log("aaa");
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

    return (
      <div ref={mainRef}>
        <canvas
          style={{ border: "1px solid red" }}
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
