import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-3xl box-shadow`}>
    <div className={`flex-1 flex flex-col`}>
      <h2 className={styles.heading2}>Let&apos;s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-md`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quisquam tenetur soluta </p>
    </div>
    <div className={`${styles.flexCenter} sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA