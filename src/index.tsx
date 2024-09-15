import React, { useEffect, useMemo, useRef } from 'react'
import type { CSSProperties, ReactElement, SVGProps } from 'react'
import './styles.css'

type IDirection = 'left' | 'right' | 'top' | 'bottom'

type Props = {
    open: boolean
    onClose?: VoidFunction
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
    closeIcon?: ReactElement | boolean
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

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width='30px'
        height='30px'
        viewBox='0 0 1.35 1.35'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        cursor='pointer'
        {...props}
    >
        <path
            d='M0.298 0.298a0.056 0.056 0 0 1 0.08 0L0.675 0.595l0.298 -0.298a0.056 0.056 0 1 1 0.08 0.08L0.755 0.675l0.298 0.298a0.056 0.056 0 0 1 -0.08 0.08L0.675 0.755l-0.298 0.298a0.056 0.056 0 0 1 -0.08 -0.08L0.595 0.675 0.298 0.377a0.056 0.056 0 0 1 0 -0.08'
            fill='#0D0D0D'
        />
    </svg>
)

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
        closeIcon = false,
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
                <span className='EZDrawer__close' onClick={onClose}>
                    {closeIcon && typeof closeIcon === 'boolean' ? (
                        <CloseIcon />
                    ) : (
                        closeIcon
                    )}
                </span>
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
