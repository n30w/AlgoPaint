# AlgoPaint
 Algorithmic painting.

## Log
I installed npm then ran
``` npm install parcel ```
and
``` npm install p5 ```

I am also using typescript. I install it globally with

``` npm install typescript ```

To use typescript, I created a file called ```tsconfig.json``` and added compiler code to it.

Furthermore, in the package.json file, I added

```
"scripts": {
    "start": "parcel index.html --open",
    "watch": "parcel watch",
    "build": "parcel build index.html"
  },
```