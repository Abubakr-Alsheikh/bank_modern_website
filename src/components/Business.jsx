import { features } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"

const FeatureCard =({icon, title, content, index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <div className="font-poppins font-semibold text-white text-[18px] leading-10">
        {title}
      </div>
      <div className="font-poppins font-semibold text-dimWhite text-[16px] leading-5">
        {content}
      </div>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden" />We'll handle the money</h2>
        <p className={`${styles.paragraph}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quisquam tenetur soluta blanditiis error harum voluptatibus, amet cumque qui vero, repellat beatae reiciendis quae nisi dicta? Vel inventore delectus cupiditate?</p>
        <Button styles="mt-10"/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index)=>(
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default Business