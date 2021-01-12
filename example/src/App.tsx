import React from 'react'

import EZDrawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

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
