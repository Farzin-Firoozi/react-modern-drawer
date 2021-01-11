# react-ez-drawer

> creating drawers made easy!

[![NPM](https://img.shields.io/npm/v/react-ez-drawer.svg)](https://www.npmjs.com/package/react-ez-drawer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Why this package ?
low bundle size with fantastic performance
## Demo 💻🔥
[click here to see the demo](https://farzin-firoozi.github.io/react-ez-drawer/)

## Install

```bash
npm install --save react-ez-drawer
```

or if you are using yarn :

```
yarn add react-ez-drawer
```

## Usage

```tsx
import React from 'react'

// import component 👇
import EZDrawer from 'react-ez-drawer'

//import styles 👇
import 'react-ez-drawer/dist/index.css'

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <button onClick={toggleDrawer}>Show</button>
      <EZDrawer open={isOpen} onClose={toggleDrawer} direction='right'>
        <div>Hello World</div>
      </EZDrawer>
    </>
  )
}

export default App
```

## API

| api            | type                | required | default  | value                             | desciption                                                                                  |
| -------------- | ------------------- | -------- | -------- | --------------------------------- | ------------------------------------------------------------------------------------------- |
| direction      | string              | yes      | "right"  | "right" , "left" , "top","bottom" | Selecting the direction that drawer opens                                                   |
| open           | boolean             | yes      | false    | true , false                      | Select when to show drawer                                                                  |
| onClose        | function            | yes      | ( )=>{ } | any executable function           | This function is called when clicking on backdrop layer usually used for closing the drawer |
| size           | number              | no       | 250      | Any positive Integer              | Determines the size of drawer in pixels                                                     |
| style          | React.CSSProperties | no       | null     | Normal stylings                   | Can be used for inline styles                                                               |
| duration       | number              | no       | 300      | Any positive Integer              | Determines the duration of opening the drawer                                               |
| overlayOpacity | number              | no       | 0.4      | Number between 0 and 1            | Determines the opacity of overlay                                                           |
| overlayColor   | string              | no       | "#000"   | Any color code                    | Determines the color of overlay                                                             |
| zIndex         | number              | no       | 100      | Any positive Integer              | Determines the zIndex of drawer                                                             |
| children       | React.ReactNode     | no       | null     | Any ReactNode                     | This is the same as props.children                                                          |

## Contribution

clone the project and run `yarn install` then run `yarn start` to run the main project.

then `cd example` and run `yarn start` to start the development example in order to test the component.

any PRs are welcome !!!

## License

MIT © [Farzin-Firoozi](https://github.com/Farzin-Firoozi)
