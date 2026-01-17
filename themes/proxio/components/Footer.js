import AnalyticsBusuanzi from '@/components/AnalyticsBusuanzi'
import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import CopyRightDate from '@/components/CopyRightDate'
import DarkModeButton from '@/components/DarkModeButton'
import LazyImage from '@/components/LazyImage'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import SocialButton from './SocialButton'

/**
 * 网页底脚
 */
export const Footer = ({ title }) => {
  const { siteInfo } = useGlobal()
  const PROXIO_FOOTER_LINKS = siteConfig('PROXIO_FOOTER_LINKS', [], CONFIG)

  return (
    <footer
      id='footer-bottom'
      className='z-10 justify-center m-auto w-full p-6 relative container'>
      <div className='max-w-screen-3xl w-full mx-auto '>
        {/* 信息与链接区块 */}
        <div className='w-full flex lg:flex-row flex-col justify-between py-16'>
          <div className='gap-y-2 flex flex-col items-start dark:text-gray-200'>
            <div className='flex gap-x-1'>
              <LazyImage
                src={siteInfo?.icon}
                className='rounded-full footer-logo-icon'
                width={24}
                alt={siteConfig('AUTHOR')}
              />
              <h1 className='text-lg'>{title}</h1>
              <span
                className='underline font-bold justify-start'>
                {siteConfig('AUTHOR')}
              </span>
            </div>
            <div className='px-1 whitespace-pre-line text-sm leading-7 text-gray-500/80 dark:text-gray-400/80'>
              {siteConfig('DESCRIPTION')}
            </div>
            <div className='px-1'>{siteConfig('CONTACT_EMAIL')}</div>
          </div>

          {/* 右侧链接区块 */}
          <div className='mt-8 flex w-full justify-between gap-x-12 sm:w-auto sm:justify-start lg:mt-0'>
            {PROXIO_FOOTER_LINKS?.map((group, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col items-center text-center lg:items-end lg:text-right'
                >
                  <div className='font-bold text-xl dark:text-white lg:pb-8 pb-4'>
                    {group.name}
                  </div>
                  <div className='flex flex-col gap-y-2'>
                    {group?.menus?.map((menu, index) => {
                      return (
                        <div key={index}>
                          <SmartLink href={menu.href} className='hover:underline dark:text-gray-200'>
                            {menu.title}
                          </SmartLink>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 页脚 */}
        <div className='dark:text-gray-200 py-4 flex flex-col gap-y-4 items-center text-center lg:flex-row lg:items-center lg:text-left border-t border-gray-600'>
          <div className='flex gap-x-4 flex-wrap items-center justify-center lg:justify-start order-2 lg:order-1'>
            <CopyRightDate />
            <PoweredBy />
          </div>

          <DarkModeButton className='dark:text-white order-1 lg:order-2 lg:ml-4 lg:mr-auto' />

          <div className='flex items-center gap-x-4 justify-center lg:justify-end order-3'>
            <AnalyticsBusuanzi />
            <SocialButton />
          </div>
        </div>

        {/* 备案 */}
        <div className='dark:text-gray-200 w-full text-center flex flex-wrap items-center justify-center gap-x-2'>
          <BeiAnSite />
          <BeiAnGongAn />
        </div>
      </div>
    </footer>
  )
}
