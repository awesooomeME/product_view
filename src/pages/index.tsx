import Image from 'next/image'
import { Montserrat, Fraunces } from 'next/font/google'
import productImageMobile from '../../public/image-product-mobile.jpg'
import productImageDesktop from '../../public/image-product-desktop.jpg'
import AddToCart from '../components/addToCart'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '700'] })
const fraunces = Fraunces({ subsets: ['latin'], weight: ['700']});

export default function Home() {
  return (
    <main className='w-screen h-screen overflow-hidden bg-cream 
      flex justify-center items-center'>
      <div className='bg-white w-[90%] h-[95%] md:w-1/2 md:h-3/5
        rounded-xl flex flex-col md:flex-row'>
        <div className='flex-1 overflow-hidden'>
          <picture>
            <source srcSet={productImageMobile.src} media='(max-width: 375px)'/>
            <Image src={productImageDesktop.src} width={600} height={900} alt='' className='h-full w-full object-center'/>
          </picture>
        </div>
        <div className={`${montserrat.className} flex-1 flex flex-col justify-between py-10 px-10`}>
          <h1 className={`${montserrat.className} font-thin text-dark_grayish_blue tracking-[1em]`}>
            PERFUME
          </h1>
          <h1 className={`${fraunces.className} text-[2.5em] md:text-[3em] font-bold md:w-2/3 leading-[1em]`}>
            Gabrielle Essence Eau De Parfum
          </h1>
          <h2 className='text-dark_grayish_blue md:w-4/5 text-lg md:text-[1.2em]'>
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL
          </h2>
          <div className={`font-serif flex gap-10 items-center w-[80%]`}>
            <span className='text-dark_cyan text-[3em]'>
              $149.99
            </span>
            <span className='text-dark_grayish_blue line-through'>
              $169.99
            </span>
          </div>
          <AddToCart/>
        </div>
      </div>
    </main>
  )
}
