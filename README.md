# `js-prototyping-template`

> Simple starter project for fast testing and prototyping with recent JavaScript

Basically a simple and ready to use webpack configuration.

## Install

```
npm install 
npm run dev
```

Your application will be accessible at `http://localhost:5000/`

## Some features

- Create and resume an `AudioContext` with a big fullscreen button (cf. [https://github.com/ircam-ismm/resume-audio-context](https://github.com/ircam-ismm/resume-audio-context))
- Use [https://github.com/reklawnos/worklet-loader](https://github.com/reklawnos/worklet-loader) to simplify `AudioWorklet` prototyping
- Provide some GUI components to simplify the creation of interfaces (cf. [https://github.com/ircam-ismm/simple-components](https://github.com/ircam-ismm/simple-components))
- Use `lit-html` for DOM rendering (@todo - update to lit#v2)

## Available commands

#### `npm run dev`

launch the server and, watch the file system and transpile on save

#### `npm run build`

build the application

#### `npm run start`

launch the server

## License

BSD-3-Clause
