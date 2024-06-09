import { bill, google, apple } from "../assets"
import styles, {layout} from "../style"

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse} relative`}>
        <img src={bill} alt="billing" className="w-full h-full z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient"></div>
        <div className="absolute z-[3] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient"></div>
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/>billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-lg mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quisquam tenetur soluta blanditiis error harum voluptatibus, amet cumque qui vero, repellat beatae reiciendis quae nisi dicta? Vel inventore delectus cupiditate?
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="Apple" className="w-32 object-contain mr-5 cursor-pointer" />
          <img src={google} alt="Google" className="w-32 object-contain mr-5 cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing