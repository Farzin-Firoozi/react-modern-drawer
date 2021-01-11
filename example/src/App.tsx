import React from 'react'

import EZDrawer from 'react-ez-drawer'
import 'react-ez-drawer/dist/index.css'

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        display: 'flex'
      }}
    >
      <button onClick={toggleDrawer}>Show</button>
      <EZDrawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
      >
        <div>salam</div>
      </EZDrawer>
    </div>
  )
}

export default App
