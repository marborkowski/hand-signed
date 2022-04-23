// http://jsfiddle.net/xt4erwog/4/
import * as React from "react";

interface HandSignedProps {}
interface Ref {
  getRawData: any | null;
}

export const HandSigned = React.forwardRef<Ref, HandSignedProps>(
  (props, ref) => {
    React.useImperativeHandle(ref, () => ({
      getRawData: () => {
        return "dupa";
      },
    }));

    return <div></div>;
  }
);
