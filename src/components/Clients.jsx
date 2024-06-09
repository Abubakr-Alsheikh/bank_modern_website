import React from 'react'
import styles from '../style'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client)=>(
            <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-48 min-w-36 min-h-32`}>
              <img src={client.logo} alt={client.name} className='sm:w-48 w-[100px] h-[100px] object-contain' />
            </div>
        ))}
      </div>
    </section>
  )
}

export default Clients