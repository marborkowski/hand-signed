[![Node.js CI](https://github.com/marborkowski/hand-signed/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/marborkowski/hand-signed/actions/workflows/node.js.yml)

<img src="https://raw.githubusercontent.com/marborkowski/hand-signed/main/.storybook/logo.svg?token=GHSAT0AAAAAABTC7KOV4AY2SVFIABNGWTXIYTEASUA" alt="Hand-Signed" />

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
yarn add @react-goodies/hand
```

**NPM**

```shell
npm install @react-goodies/colorama --save
```

## Basic implementation

```jsx
import React from "react";
import { Colorama } from "@react-goodies/colorama";

const App = () => {
  return (
    <Colorama
      colors={[
        "#8000ff",
        "#FD0311",
        "#FB8201",
        "#FFF803",
        "#00FF05",
        "#0580FF",
      ]}
      text="Hello World!"
    />
  );
};

export default App;
```
