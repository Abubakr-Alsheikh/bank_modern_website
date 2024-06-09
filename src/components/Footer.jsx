import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} flex flex-col sm:flex-row mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt="hoobank" className='w-64 object-contain' />
        <p className={`${styles.paragraph} mt-4 max-w-80`}>A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className="flex-1 w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink)=>(
          <div className="flex flex-col ss:my-0 my-4 min-w-36" key={footerLink.id}>
            <h4 className='font-poppins font-semibold text-[20px] leading-8 text-white'>
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((link, index)=>(
                <li key={link.id} className={`font-poppins font-normal text-[16px] leading-6 text-dimWhite  cursor-pointer ${index !== footerLink.links.length ?'mt-4' :'mt-0' }`}>
                  <a href={link.url} className="text-dimWhite hover:text-secondary">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="flex w-full sm:flex-row flex-col justify-between items-center border-t-2 border-dimWhite border-opacity-50 pt-6">
      <p className='font-poppins font-semibold text-[20px] leading-8 text-white'>
        © 2021 Hoobank. All rights reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index)=>(
          <img key={social.id} src={social.icon} alt={social.name} className={`w-8 h-8 object-contain ${index !== socialMedia.length - 1? 'mr-6' : 'mr-0'}`} />
        ))}
      </div>
    </div>
  </footer>
)

export default Footer