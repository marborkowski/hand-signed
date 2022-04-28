import * as React from "react";
import chroma from "chroma-js";
import { HandSignedProps, Ref } from "./types";
import { getCoordinatesFromEvent, initAnimation } from "./utils";

export const HandSigned = React.forwardRef<Ref, HandSignedProps>(
  (
    {
      color = "#000000",
      initialData = [],
      width = "700",
      height = "300",
      ...props
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLCanvasElement>(null);
    const [raw, setRaw] = React.useState<any[]>(initialData || []);
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
        context.strokeStyle = color;
        context.stroke();

        raw.push({ x, y });

        setRaw(raw);
      }
    };

    const handleMouseUp = (event: any) => {
      if (context && isDrawing) {
        const { x, y } = getCoordinatesFromEvent(event);

        context.lineTo(x, y);
        context.strokeStyle = color;
        context.stroke();

        raw.push(null);
        setRaw(raw);

        setIsDrawing(false);
      }
    };

    React.useImperativeHandle(ref, () => ({
      internalRef,
      getRawData: () => {
        return raw.filter((_, index) => index < raw.length - 1);
      },
      clear: () => {
        if (context) {
          setRaw([]);
          context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        }
      },
      getDataURL: () => {
        if (context) {
          const canvas = context.canvas;
          return canvas.toDataURL("image/png");
        }

        return "";
      },
    }));

    const init = () => {
      const { current } = internalRef;

      if (current) {
        const context = current.getContext("2d");

        if (context) {
          const rgbColor = chroma(color).rgb();

          context.shadowColor = `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, .5)`;
          context.shadowBlur = 1.5;
          context.lineCap = "round";
          context.lineJoin = "round";
          context.lineWidth = 1;

          setContext(context);
        }
      }
    };

    React.useEffect(() => {
      init();
    }, []);

    React.useEffect(() => {
      if (context) {
        initAnimation(context, initialData, color);
      }
    }, [context]);

    return (
      <canvas
        {...props}
        width={width}
        height={height}
        ref={internalRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseUp}
        onTouchEnd={handleMouseUp}
      />
    );
  }
);
