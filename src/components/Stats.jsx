import styles from '../style'
import { stats } from '../constants'

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((state)=>(
      <div className="flex-1 flex justify-start items-center flex-row m-3" key={state.id}>
        <div className="font-poppins font-semibold xs:text-[40px] text-[30px] text-white">{state.value}</div>
        <div className="font-poppins font-semibold xs:text-[20px] text-[15px] text-gradient uppercase ml-3">{state.title}</div>
      </div>
    ))}
  </section>
)

export default Stats