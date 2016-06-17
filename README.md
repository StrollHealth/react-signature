# React Signature

A signature board component for react. Implemented by referring to https://github.com/szimek/signature_pad. Compatible with all modern browsers. In order to make the component work for IE8, import excanvas at the top of your html file.


## Demo & Examples

Live demo: [github.com/StrollHealth/react-signature](https://github.com/StrollHealth/react-signature)

To build the examples locally, first clone the repository, then run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-signature is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-signature.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-signature --save
```


## Usage
To initialize:

```
var ReactSignature = require('react-signature');

<ReactSignature ref="signatureboard"/>

...

var signaturepad = this.refs.signatureboard;

/* 
 * Method that returns the signature on canvas in URL form.
*/

signatureboard.handleSave();


/* 
 * Method that takes a base 64 string (URL) and shows it as an image on the canvas.
*/

signatureboard.fromDataURL(base64String);


/* 
 * Method to clear the signature board
*/

signatureboard.handleClear();
```



## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT

Copyright (c) 2016 Quang Tran.

