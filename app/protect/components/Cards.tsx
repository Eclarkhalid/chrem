import Image from 'next/image'
import Link from 'next/link'

import img1 from '@/public/microchip.png'
import img2 from '@/public/fast-food.png'
import img3 from '@/public/video.png'

const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-20">
      <div className="rounded-lg bg-gray-200 my-3">
        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-yellow-300 via-red-500 to-pink-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
          <div className="rounded-[10px] bg-white p-4 py-2 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <Image src={img1} alt={'image1'} width={40} height={40} />
              <h1 className="font-bold text-2xl">ChatGPT 4 Summarize</h1>
            </div>

            <Link href={'https://article-summarizer-eclarkhalid.vercel.app/'} className="text-lg font-medium text-gray-900">
              Enter a Url for a blogs website to summarize. Number of requests are limited for your current plan.
            </Link>

            <div className="mt-4 flex flex-wrap gap-1">
              <span className="whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                Blogs
              </span>

              <span className="whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                Articles
              </span>
              <span className="whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                Websites
              </span>
            </div>
          </div>
        </article>
      </div>

      <div className="rounded-lg bg-gray-200">
        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-blue-300 via-green-500 to-yellow-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
          <div className="rounded-[10px] bg-white p-4 py-2 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <Image src={img2} alt={'image1'} width={40} height={40} />
              <h1 className="font-bold text-2xl">Recipes And Meals</h1>
            </div>

            <Link href={'https://recipe-rise-final-j5bs.vercel.app/globalApi'} className="text-lg font-medium text-gray-900">
              Search for any recipe you would ever think of. Unlimited requests, no recipe procedures or methods to cook.
            </Link>

            <div className="mt-4 flex flex-wrap gap-1">
              <span className="whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                Foods
              </span>

              <span className="whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                Drinks
              </span>
              <span className="whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                Fruits
              </span>
            </div>
          </div>
        </article>
      </div>

      <div className="rounded-lg bg-gray-200 my-3">
        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-slate-300 via-indigo-500 to-blue-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
          <div className="rounded-[10px] bg-white p-4 py-2 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <Image src={img3} alt={'image1'} width={40} height={40} />
              <h1 className="font-bold text-2xl">Movie Quest</h1>
            </div>

            <Link href={'https://moviequest-by-eclar-khalid.netlify.app/'} className="text-lg font-medium text-gray-900">
              Search for any movies and get all the information you need. Number of requests are limited for your current plan.
            </Link>

            <div className="mt-4 flex flex-wrap gap-1">
              <span className="whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                Movies
              </span>

              <span className="whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                Series
              </span>
              <span className="whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
                Reality Shows
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Cards;
