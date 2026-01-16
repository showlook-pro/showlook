/* eslint-disable no-unreachable */
import DashboardButton from '@/components/ui/dashboard/DashboardButton'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import throttle from 'lodash.throttle'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { DarkModeButton } from './DarkModeButton'
import { Logo } from './Logo'
import { MenuList } from './MenuList'

/**
 * 顶部导航栏
 */
export const Header = props => {
    const router = useRouter()
    const { isDarkMode } = useGlobal()
    const isHome = router.route === '/'
    const [buttonTextColor, setColor] = useState(
        router.route === '/' ? 'text-white' : ''
    )
    const [isVisible, setIsVisible] = useState(true)
    const [headerOpacity, setHeaderOpacity] = useState(isHome ? 0 : 0.8)
    const lastScrollY = useRef(0)
    const heroFadeStart = useRef(0)
    const scrollThreshold = 10

    useEffect(() => {
        if (isDarkMode || router.route === '/') {
            setColor('text-white')
        } else {
            setColor('')
        }
        // ======= Sticky
        // window.addEventListener('scroll', navBarScollListener)
        // return () => {
        //     window.removeEventListener('scroll', navBarScollListener)
        // }
    }, [isDarkMode])

    useEffect(() => {
        const updateHeroFadeStart = () => {
            if (!isHome) {
                heroFadeStart.current = 0
                return
            }
            const hero = document.getElementById('home')
            const heroHeight = hero?.offsetHeight || 0
            heroFadeStart.current = heroHeight || 0
        }

        updateHeroFadeStart()
        window.addEventListener('resize', updateHeroFadeStart)
        return () => window.removeEventListener('resize', updateHeroFadeStart)
    }, [isHome])

    useEffect(() => {
        const handleScroll = throttle(() => {
            const scrollY = window.scrollY
            const lastY = lastScrollY.current
            const delta = scrollY - lastY
            const atTop = scrollY <= 0

            const fadeStart = heroFadeStart.current
            let opacity = 0.8
            if (isHome) {
                if (fadeStart > 0) {
                    if (scrollY <= fadeStart) {
                        opacity = (scrollY / fadeStart) * 0.8
                    }
                } else if (atTop) {
                    opacity = 0
                }
            }
            setHeaderOpacity(opacity)

            if (atTop) {
                setIsVisible(true)
                lastScrollY.current = 0
                return
            }

            if (Math.abs(delta) < scrollThreshold) {
                return
            }

            if (delta > 0) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            lastScrollY.current = scrollY
        }, 100)

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isHome])

    return (
        <>
            {/* <!-- ====== Navbar Section Start --> */}
            <div
                className={`ud-header fixed left-0 top-0 z-40 flex w-full items-center transition-all duration-300 ${
                    !isHome || headerOpacity > 0.02 ? 'backdrop-blur-md nav-solid' : 'backdrop-blur-0 nav-transparent'
                } ${isHome ? 'nav-home' : 'nav-inner'} ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
                style={{ backgroundColor: `rgba(0, 0, 0, ${headerOpacity})` }}>
                <div className='container'>
                    <div className='relative -mx-4 flex items-center justify-between'>
                        {/* Logo */}
                        <Logo white={!isHome} {...props} />
                        {/* 右侧菜单 */}
                        <div className='flex items-center gap-4 justify-end pr-16 lg:pr-0'>
                            <MenuList {...props} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ====== Navbar Section End --> */}
        </>
    )
}
