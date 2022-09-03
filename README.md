# AlgoPaint

## Dependencies
Installed using yarn.
- parcel
- p5
    - @types/p5
- bootstrap@latest

## Helpful Links
- [TypeScript value delcared never read](https://flaviocopes.com/typescript-disable-declared-never-read/)
- [Vue + P5 demo](https://codesandbox.io/s/vue-p5-forked-ql5oi1?file=/src/components/canvas.component.vue:103-930)
- [Japanese dude Vue + P5 Medium Article](https://medium.com/js-dojo/experiment-with-p5-js-on-vue-7ebc05030d33)


## Building
Make sure to have node package manager (npm) installed, along with yarn.

```brew cask install node```
```npm install -g yarn```

As a sidenote, to get started with a new project:
```yarn parcel init```

I installed packages by doing:

```cd (project dir)```

```yarn parcel add --dev```

```yarn parcel add p5```

```yarn parcel add --dev @types/p5```

Yarn automatically installs dependecies like TypeScript and Sass. It detects it via files in the directory.

In order to run the server, just do:

```yarn parcel```