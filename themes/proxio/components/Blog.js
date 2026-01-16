/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

/**
 * 博文列表
 * @param {*} param0
 * @returns
 */
export const Blog = ({ posts }) => {
  const enable = siteConfig('PROXIO_BLOG_ENABLE')
  if (!enable) {
    return null
  }

  // 博客列表默认显示图片，鼠标指向时背景变模糊并变淡，显示摘要文字。
  const PROXIO_BLOG_PLACEHOLDER_IMG_URL_1 = siteConfig(
    'PROXIO_BLOG_PLACEHOLDER_IMG_URL_1'
  )
  const PROXIO_BLOG_PLACEHOLDER_IMG_URL_2 = siteConfig(
    'PROXIO_BLOG_PLACEHOLDER_IMG_URL_2'
  )
  const PROXIO_BLOG_PLACEHOLDER_IMG_URL_3 = siteConfig(
    'PROXIO_BLOG_PLACEHOLDER_IMG_URL_3'
  )
  const PROXIO_BLOG_PLACEHOLDER_IMG_URL_4 = siteConfig(
    'PROXIO_BLOG_PLACEHOLDER_IMG_URL_4'
  )

  return (
    <>
      {/* <!-- ====== Blog Section Start --> */}
      <section className='bg-white pt-20 dark:bg-dark lg:pt-[120px]'>
        <div className='container mx-auto'>
          {/* 区块标题文字 */}
          <div
            className='-mx-4 flex flex-wrap justify-center wow fadeInUp'
            data-wow-delay='.2s'>
            <div className='w-full px-4 py-4'>
              <div className='mx-auto max-w-[485px] text-center space-y-4'>
                <span className='px-3 py-0.5 rounded-2xl mb-2 dark:bg-dark-1 border border-gray-200 dark:border-[#333333] dark:text-white'>
                  {siteConfig('PROXIO_BLOG_TITLE')}
                </span>

                <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {siteConfig('PROXIO_BLOG_TEXT_1')}
                </h2>
              </div>
            </div>
          </div>
          {/* 博客列表 此处优先展示3片文章 */}
          <div className='-mx-4 grid md:grid-cols-2 grid-cols-1'>
            {posts?.map((item, index) => {
              // 文章封面图片，默认使用占位符 根据index 判断获取的时哪一张图片
              let coverImg = PROXIO_BLOG_PLACEHOLDER_IMG_URL_1
              if (index === 0) {
                coverImg = PROXIO_BLOG_PLACEHOLDER_IMG_URL_1
              } else if (index === 1) {
                coverImg = PROXIO_BLOG_PLACEHOLDER_IMG_URL_2
              } else if (index === 2) {
                coverImg = PROXIO_BLOG_PLACEHOLDER_IMG_URL_3
              } else if (index === 3) {
                coverImg = PROXIO_BLOG_PLACEHOLDER_IMG_URL_4
              }
              const displayImg = coverImg || item.pageCoverThumbnail
              return (
                <div key={index} className='w-full px-4'>
                  <div
                    className='wow fadeInUp group mb-10 relative overflow-hidden blog'
                    data-wow-delay='.1s'>
                    <div className='relative rounded-xl border overflow-hidden shadow-md dark:border-gray-700 dark:bg-gray-800'>
                      <SmartLink
                        href={item?.href}
                        className='relative block proxio-blog-card'>
                        {displayImg ? (
                          <LazyImage
                            src={displayImg}
                            alt={item.title}
                            className='proxio-blog-card__image w-full h-80 object-cover rounded-xl'
                          />
                        ) : (
                          <div className='flex h-80 items-center justify-center rounded-xl bg-gray-100 px-6 text-center dark:bg-hexo-black-gray'>
                            <p className='text-base text-body-color dark:text-dark-6'>
                              {item.summary}
                            </p>
                          </div>
                        )}
                        {displayImg && (
                          <div className='proxio-blog-card__overlay'>
                            <p className='proxio-blog-card__summary'>
                              {item.summary}
                            </p>
                          </div>
                        )}
                      </SmartLink>
                    </div>
                    {/* 内容部分 */}
                    <div className='relative z-10 p-4'>
                      <span className='inline-blocktext-center text-xs font-medium leading-loose text-white'>
                        {item.publishDay}
                      </span>
                      <h3>
                        <SmartLink
                          href={item?.href}
                          className='mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'>
                          {item.title}
                        </SmartLink>
                      </h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Blog Section End --> */}
    </>
  )
}
