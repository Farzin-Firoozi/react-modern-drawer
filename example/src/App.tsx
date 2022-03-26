import React, { useState } from 'react'

import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const App = () => {
    const [isLeftOpen, setIsLeftOpen] = useState(false)
    const [isRightOpen, setIsRightOpen] = useState(false)
    const [isBottomOpen, setIsBottomOpen] = useState(false)
    const [isTopOpen, setIsTopOpen] = useState(false)

    const [enableOverlay, setEnableOverlay] = useState(true)

    const toggleLeft = () => {
        setIsLeftOpen((prev) => !prev)
    }

    const toggleRight = () => {
        setIsRightOpen((prev) => !prev)
    }

    const toggleBottom = () => {
        setIsBottomOpen((prev) => !prev)
    }

    const toggleTop = () => {
        setIsTopOpen((prev) => !prev)
    }

    const toggleOverlay = () => {
        setEnableOverlay((prev) => !prev)
    }

    const btnStyle = {
        backgroundColor: '#03adfc',
        color: '#fff',
        borderRadius: '5px',
        border: 'none',
        padding: '10px 25px',
        cursor: 'pointer',
        margin: 5,
        width: 200,
    }

    const toggleBtnStyle = {
        ...btnStyle,
        backgroundColor: '#fff',
        border: enableOverlay ? '1px solid #ee5858' : '1px solid #42be67',
        color: enableOverlay ? '#ee5858' : '#42be67',
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
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button style={btnStyle} onClick={toggleLeft}>
                    Open Left
                </button>
                <button style={btnStyle} onClick={toggleRight}>
                    Open Right
                </button>
                <button style={btnStyle} onClick={toggleBottom}>
                    Open Bottom
                </button>
                <button style={btnStyle} onClick={toggleTop}>
                    Open Top
                </button>
                <button style={toggleBtnStyle} onClick={toggleOverlay}>
                    {enableOverlay ? 'Disable' : 'Enable'} Overlay
                </button>
            </div>
            <Drawer
                open={isLeftOpen}
                onClose={toggleLeft}
                direction='left'
                size={300}
                enableOverlay={enableOverlay}
            >
                <DrawerBody />
            </Drawer>
            <Drawer
                open={isRightOpen}
                onClose={toggleRight}
                direction='right'
                size={300}
                enableOverlay={enableOverlay}
            >
                <DrawerBody />
            </Drawer>

            <Drawer
                open={isTopOpen}
                onClose={toggleTop}
                direction='top'
                size={300}
                enableOverlay={enableOverlay}
            >
                <DrawerBody />
            </Drawer>
            <Drawer
                open={isBottomOpen}
                onClose={toggleBottom}
                direction='bottom'
                size={300}
                enableOverlay={enableOverlay}
            >
                <DrawerBody />
            </Drawer>
        </div>
    )
}

export default App

const DrawerBody = () => {
    return (
        <div style={{ padding: 20 }}>
            <h1 style={{ fontWeight: 'bold' }}>Hello World! 🚀🥳</h1>
        </div>
    )
}
