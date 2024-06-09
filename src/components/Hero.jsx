import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-1 px-4 bg-discount-gradient rounded-xl mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px] object-contain mr-2' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> discount For <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" /> <span className='text-gradient'> Generations </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Payment Method.</h1>
        <p className={`${styles.paragraph} max-w-md`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quisquam tenetur soluta blanditiis error harum voluptatibus, amet cumque qui vero, repellat beatae reiciendis quae nisi dicta? Vel inventore delectus cupiditate?</p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="Robot hand" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[95%] rounded-full white__gradient'></div>
        <div className='absolute z-[2] w-[50%] h-[75%] right-20 blue__gradient'></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero