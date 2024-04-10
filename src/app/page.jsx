import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col w-screen'>
      {/* PAGE 1 */}
      <div className="flex flex-col justify-center w-full h-96 sm:h-screen relative">
        <img src='/PSICHODELIC BG/trippy (6).gif' className='w-full h-full absolute -z-10'/>
        {/* bears */}
        <div className="flex justify-between items-center w-full">
          <img src="/franks/FRANK (1).gif" className='w-1/4' alt="" />
          <img src="/franks/FRANK (10).gif" className='w-1/4' alt="" />
        </div>
        <img src="/nome/5.gif" className='w-1/2 mx-auto' alt="" srcset="" />
      </div>

      {/* PAGE 2 */}
      <div className="flex flex-col justify-center items-center w-full h-96 sm:h-screen relative">
        <img src="/nome/4.gif" className='w-1/3 absolute top-14 right-14' alt="" srcset="" />
        <img src="/franks/FRANK (2).gif" className='w-1/6 absolute top-5 sm:top-14 left-0 sm:left-14' alt="" srcset="" />
        <img src="/franks/FRANK (5).gif" className='w-1/6 absolute top-80 left-14' alt="" srcset="" />
        <div className="absolute right-0 sm:right-24 bottom-16 flex flex-col justify-end items-end">
          <img src="/franks/FRANK (2).gif" className='w-1/4 sm:w-1/3' alt="" srcset="" />
          <img src="/franks/FRANK (5).gif" className='w-1/4 sm:w-1/3' alt="" srcset="" />
        </div>
        {/* links */}
        <div className="flex flex-col items-center gap-8 relative z-10">
          <a href='https://t.me/frankfranksolportal' className='font-bold text-3xl text-blue-400'>
            TELEGRAM
          </a>
          <a href='#' className='font-bold text-3xl text-red-500'>
            SOLSCAN
          </a>
          <a href='https://x.com/franksolcoin_' className='font-bold text-3xl text-green-600'>
            TWITTER
          </a>
        </div>
      </div>

      {/* PAGE 3 */}
      <div className="flex flex-col w-full h-96 sm:h-screen relative">
        <img src='/PSICHODELIC BG/trippy (5).gif' className='w-full h-full absolute -z-10'/>
        <img src="/nome/6.gif" className='w-1/2 mx-auto mt-10' alt="" srcset="" />
        <img src='/franks/FRANK (14).gif' className='w-1/4 top-0 right-16 absolute'/>
        <img src='/franks/FRANK (6).gif' className='w-1/6 top-20 left-1/3 absolute'/>
        <img src='/franks/FRANK (15).gif' className='w-1/6 bottom-20 left-1/2 absolute'/>
        <img src='/webmemes/meme (8).gif' className='w-1/6 bottom-0 right-20 absolute'/>
        <img src='/webmemes/meme (2).gif' className='w-1/6 bottom-1/3 left-0 absolute'/>
      </div>

      {/* FRANK FRANK */}
      <marquee behavior="" direction="" >
        <div className="flex">
        <img src="/nome/1.gif" className='w-36 sm:w-48' alt=""/>
        <img src="/nome/2.gif" className='w-36 sm:w-48' alt="" />
        <img src="/nome/3.gif" className='w-36 sm:w-48' alt="" />
        <img src="/nome/4.gif" className='w-36 sm:w-48' alt="" />
        <img src="/nome/5.gif" className='w-36 sm:w-48' alt="" />
        <img src="/nome/6.gif" className='w-36 sm:w-48' alt="" />
        </div>
      </marquee>
      {/* PAGE 4 */}
      <div className="flex flex-col w-full h-screen relative">
        <img src='/PSICHODELIC BG/trippy (2).gif' className='w-full h-full absolute -z-10'/>
        <img src='/webmemes/meme (10).gif' className='w-1/6 top-16 left-16 absolute'/>
        <img src='/franks/FRANK (12).gif' className='w-1/6 bottom-0 left-20 absolute'/>
        <img src='/franks/FRANK (7).gif' className='w-1/6 top-0 right-20 absolute'/>
        <img src='/webmemes/meme (12).gif' className='w-1/6 bottom-20 right-20 absolute'/>

        <div className="flex absolute w-full h-full gap-8 flex-col justify-center items-center drop-shadow-lg">
          <div className="flex gap-8">
            <div className="flex flex-col text-center">
              <div className='text-4xl font-black text-white'>tax</div>
              <div className='text-4xl font-black text-white'>0/0</div>
            </div>
            <div className='text-4xl font-black text-white'>
              lp burnt
            </div>
          </div>
          <div className='flex flex-col text-center'>
            <div className='text-4xl font-black text-white'>supply</div>
            <div className='text-4xl font-black text-white'>100,000,000,000</div>
          </div>
        </div>
      </div>
      <marquee behavior="" direction="" >
        <div className="flex">
        <img src="/nome/1.gif" className='w-36 sm:w-48' alt=""/>
        <img src="/nome/2.gif" className='w-36 sm:w-48' alt="" />
        <img src="/nome/3.gif" className='w-36 sm:w-48' alt="" />
        <img src="/nome/4.gif" className='w-36 sm:w-48' alt="" />
        <img src="/nome/5.gif" className='w-36 sm:w-48' alt="" />
        <img src="/nome/6.gif" className='w-36 sm:w-48' alt="" />
        </div>
      </marquee>


    </div>
  )
}

export default page