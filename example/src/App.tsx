import React from 'react'

import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const App = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const btnStyle = {
        backgroundColor: '#03adfc',
        color: '#fff',
        borderRadius: '5px',
        border: 'none',
        padding: '10px 25px',
        cursor: 'pointer',
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
            <button style={btnStyle} onClick={toggleDrawer}>
                Show Drawer
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                size={200}
                style={{ padding: 20 }}
                enableOverlay={false}
            >
                <div style={{ fontWeight: 'bold' }}>Hello World!</div>
            </Drawer>
        </div>
    )
}

export default App
