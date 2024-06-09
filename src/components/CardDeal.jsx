import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"


const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" />in few easy steps</h2>
        <p className={`${styles.paragraph}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quisquam tenetur soluta blanditiis error harum voluptatibus, amet cumque qui vero, repellat beatae reiciendis quae nisi dicta? Vel inventore delectus cupiditate?</p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-full h-full object-contain" />
      </div>
    </section>
  )
}

export default CardDeal