import React, { useEffect, useMemo, useRef } from 'react'
import type { CSSProperties } from 'react'
import './styles.scss'

type IDirection = 'left' | 'right' | 'top' | 'bottom'

type Props = {
    open: boolean
    onClose?: () => void
    direction: IDirection
    lockBackgroundScroll?: boolean
    children?: React.ReactNode
    duration?: number
    overlayOpacity?: number
    overlayColor?: String
    enableOverlay?: boolean
    style?: CSSProperties
    zIndex?: number
    size?: number | string
    className?: string
    customIdSuffix?: string
    overlayClassName?: string
}

type DirectionStyle = Pick<
    CSSProperties,
    'top' | 'left' | 'right' | 'bottom' | 'width' | 'height' | 'transform'
>
const getDirectionStyle = (
    dir: IDirection,
    size?: number | string,
): DirectionStyle => {
    const directionStyle: Record<IDirection, DirectionStyle> = {
        left: {
            top: 0,
            left: 0,
            transform: 'translate3d(-100%, 0, 0)',
            width: size,
            height: '100vh',
        },
        right: {
            top: 0,
            right: 0,
            transform: 'translate3d(100%, 0, 0)',
            width: size,
            height: '100vh',
        },
        bottom: {
            left: 0,
            right: 0,
            bottom: 0,
            transform: 'translate3d(0, 100%, 0)',
            width: '100%',
            height: size,
        },
        top: {
            left: 0,
            right: 0,
            top: 0,
            transform: 'translate3d(0, -100%, 0)',
            width: '100%',
            height: size,
        },
    }
    return directionStyle[dir]
}

const EZDrawer: React.FC<Props> = (props) => {
    const {
        open,
        onClose = () => {},
        children,
        style,
        enableOverlay = true,
        overlayColor = '#000',
        overlayOpacity = 0.4,
        zIndex = 100,
        duration = 500,
        direction,
        size = 250,
        className,
        customIdSuffix,
        lockBackgroundScroll = false,
        overlayClassName = '',
    } = props

    const bodyRef = useRef<HTMLBodyElement | null>(null)

    useEffect(() => {
        const updatePageScroll = () => {
            bodyRef.current = window.document.querySelector('body')
            if (bodyRef.current && lockBackgroundScroll) {
                bodyRef.current.style.overflow = open ? 'hidden' : ''
            }
        }
        updatePageScroll()
    }, [open])

    const idSuffix = useMemo(() => {
        return customIdSuffix || (Math.random() + 1).toString(36).substring(7)
    }, [customIdSuffix])

    const overlayStyles: CSSProperties = {
        backgroundColor: overlayColor.toString(),
        opacity: overlayOpacity,
        zIndex: zIndex,
    }

    const drawerStyles: CSSProperties = {
        zIndex: zIndex + 1,
        transitionDuration: `${duration}ms`,
        ...getDirectionStyle(direction, size),
        ...style,
    }

    return (
        <div id={'EZDrawer' + idSuffix} className='EZDrawer'>
            <input
                type='checkbox'
                id={'EZDrawer__checkbox' + idSuffix}
                className='EZDrawer__checkbox'
                onChange={onClose}
                checked={open}
            />
            <nav
                role='navigation'
                id={'EZDrawer__container' + idSuffix}
                style={drawerStyles}
                className={'EZDrawer__container ' + className}
            >
                {children}
            </nav>
            {enableOverlay && (
                <label
                    htmlFor={'EZDrawer__checkbox' + idSuffix}
                    id={'EZDrawer__overlay' + idSuffix}
                    className={'EZDrawer__overlay ' + overlayClassName}
                    style={overlayStyles}
                />
            )}
        </div>
    )
}

export default EZDrawer
