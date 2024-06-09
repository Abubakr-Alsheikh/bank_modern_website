import { quotes } from "../assets"
import { feedback } from "../constants"
import styles from "../style"

const FeedbackCard = ({content, name, title, img}) =>(
  <div className="flex justify-between flex-col px-10 py-10 rounded-3xl max-w-96 md:mr-10 sm:mr-5 mr-0 feedback-card">
    <img src={quotes} alt="double_quotes" className="w-10 h-7 object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-8 text-white my-10">{content}</p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-12 h-12 rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-8 text-white">{name}</h4>
        <h4 className="font-poppins font-semibold text-[16px] leading-6 text-dimWhite">{title}</h4>
        
      </div>
    </div>
  </div>
)

const Testimonials = () =>(
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-0 w-3/4 h-3/4 -right-1/2 rounded-full blue__gradient"></div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        What people are <br className="sm:block hidden"/>saying about us
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-md`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quisquam tenetur soluta blanditiis error harum voluptatibus</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials