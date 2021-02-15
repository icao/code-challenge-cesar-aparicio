# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## 👷‍♂️ Retos del proyecto

### Pensar en una arquitectura óptima para la aplicación

Muy bien podría hacerse una arquitectura de los componentes más simple, pero procure tener una arquitectura escalable y componentes reusables. Involucra más tiempo del pensado en un inicio.
Tenía dos formas de elaborar el proyecto y hacer comunicación entre dos componentes, primero quise resolver usando un routing anidado, pero se me complicó demasiado y tuve que consultar de nuevo la documentación, me consumió gran parte en esa área. Al final decidí que lo mejor era tener un componente padre el cual escuchara a dos componentes hijos y fuera usado como un bus de comunicación entre ambos.

### El consumo de la API

La estructura de la api en algunos campos del JSON de respuesta era un poco confusa a la hora de desestructurar los parámetros, me consumió gran parte en ese apartado, tuve que debuguear y fijarme en como estaba devolviendo la respuesta la API.

El proyecto me llevó más horas de lo aconsejado.
