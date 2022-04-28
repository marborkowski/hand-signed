[![Node.js CI](https://github.com/marborkowski/hand-signed/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/marborkowski/hand-signed/actions/workflows/node.js.yml)

<img src="https://raw.githubusercontent.com/marborkowski/hand-signed/main/.storybook/logo.svg?token=GHSAT0AAAAAABTC7KOUSOCKTYLK5WQ3F6HAYTK2P5Q" alt="Hand-Signed" />

**HandSigned** is a react component that allows you to easily expose a manual signature interface in your web application.

This library uses the classic canvas element to render the signature.

You can even use `ref` property to execute internal methods of the component like `clear`, `getDataURL`, `getRawData`. You can also read the original canvas element reference if you need.

<br />
<br />

## Browsers support

<span id="compatibility" />

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge >= 80                                                                                                                                                                                                | >= 55                                                                                                                                                                                                             | >= 55                                                                                                                                                                                                         | >= 12.1                                                                                                                                                                                                       | >= 12.1                                                                                                                                                                                                                       | >= 40                                                                                                                                                                                                     |

## Installation

**YARN**

```shell
yarn add @react-goodies/hand-signed
```

**NPM**

```shell
npm install @react-goodies/hand-signed --save
```

## Basic implementation

```jsx
import React from "react";
import { HandSigned } from "@react-goodies/hand-signed";

const initialData = [
  { x: 275, y: 143 },
  { x: 276, y: 143 },
  { x: 276, y: 143 },
  { x: 277, y: 143 },
  { x: 277, y: 142 },
  { x: 278, y: 142 },
  { x: 279, y: 141 },
  { x: 280, y: 141 },
  { x: 281, y: 140 },
  { x: 282, y: 139 },
  { x: 283, y: 139 },
  { x: 283, y: 138 },
  { x: 284, y: 138 },
  { x: 284, y: 138 },
  { x: 285, y: 138 },
];

const App = () => {
  const mainRef = React.useRef(null);

  return (
    <>
      <div>
        <HandSigned
          style={{ border: "1px solid #ccc" }}
          initialData={initialData}
          color="#000000"
          width="700"
          height="300"
          ref={mainRef}
        />
      </div>
      <div className="buttons">
        <button
          onClick={() => console.log("data", mainRef.current.getRawData())}
        >
          Get raw data
        </button>
        <button onClick={() => mainRef.current.clear()}>clear</button>
        <button
          onClick={() => console.log("canvas", mainRef.current.getDataURL())}
        >
          Get base64 image/png data
        </button>

        <button onClick={() => console.log("ref", mainRef.current.internalRef)}>
          Get ref
        </button>
      </div>
    </>
  );
};

export default App;
```
