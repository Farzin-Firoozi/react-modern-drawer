import React from 'react'

import Drawer from 'react-modern-drawer'
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
                display: 'flex',
            }}
        >
            <button onClick={toggleDrawer}>Show</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                size={300}
                style={{ padding: 40 }}
            >
                <div>Hello World</div>
            </Drawer>
        </div>
    )
}

export default App
