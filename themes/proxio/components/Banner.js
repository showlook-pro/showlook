import SmartLink from '@/components/SmartLink'
import LazyImage from '@/components/LazyImage'

/**
 * 页面顶部宣传栏
 * @returns
 */
export const Banner = ({ title, description, tags, cover }) => {
  return (
    <>
      {/* <!-- ====== Banner Section Start --> */}
      <div className='relative z-10 overflow-hidden pb-[24px] pt-[150px] dark:bg-dark md:pt-[170px] lg:pt-[200px]'>
        {cover && (
          <>
            <LazyImage
              alt={title}
              src={cover}
              className='absolute inset-0 h-full w-full object-cover'
              style={{ filter: 'blur(2px)', opacity: 0.9 }}
            />
            <div className='absolute inset-0 bg-black/50'></div>
            <div className='absolute bottom-0 left-0 h-5/6 w-full bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80'></div>
          </>
        )}
        <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3'></div>
        <div className='container relative z-10'>
          <div className='flex flex-wrap items-center -mx-4'>
            <div className='w-full px-4'>
              <div className='text-center'>
                <h1 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {title}
                </h1>
                <p className='mb-5 text-base text-body-color dark:text-dark-6'>
                  {description}
                </p>
                {tags?.length > 0 && (
                  <div className='mt-10 flex flex-wrap justify-center gap-2 text-xs text-gray-500 dark:text-gray-400'>
                    {tags.map(tag => (
                      <SmartLink
                        key={tag}
                        href={`/tag/${encodeURIComponent(tag)}`}
                        className='rounded-full border border-gray-200 px-2 py-1 transition-colors hover:border-primary hover:text-primary dark:border-gray-700'>
                        #{tag}
                      </SmartLink>
                    ))}
                  </div>
                )}

                {/* <ul className="flex items-center justify-center gap-[10px]">
                <li>
                  <a
                    href="index.html"
                    className="flex items-center gap-[10px] text-base font-medium text-dark dark:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-[10px] text-base font-medium text-body-color"
                  >
                    <span className="text-body-color dark:text-dark-6"> / </span>
                    Blog Details
                  </a>
                </li>
              </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Banner Section End --> */}
    </>
  )
}
