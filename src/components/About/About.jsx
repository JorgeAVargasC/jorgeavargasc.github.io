import React from 'react'
import styles from './About.module.css'
import getAge from '../../functions/getAge'
// import { MdPersonSearch } from "react-icons/md";

import mydata from '../../data/mydata'
import photo from '../../assets/img/photo.png'

export default function About () {
  const birthday = new Date(mydata.birthday).toLocaleDateString('en-us', {
    day: 'numeric',
    year: 'numeric',
    month: 'short'
  })

  return (
    <div id='about' className='container'>
      <div className={styles.about_content}>
        <div className={styles.about_content_item}>
          <img src={photo} className={styles.photo + ' mb-2'} alt='' srcset='' />
        </div>
        <div className={styles.about_content_item}>
          <h3 className='mb-2'>{mydata.name}</h3>
          <h4 className='mb-2'>
            I'm a <span className='txt-blue'>{mydata.role}</span> from{' '}
            <span className='txt-blue'>{mydata.country}</span>
          </h4>
          <p className='mb-2'>{mydata.shortbio}</p>

          <div className={styles.about_list}>

            <div className={styles.about_list_item}>
              <div className={styles.item}>
                <p className=''>Birthday</p>
                <p>{birthday}</p>
              </div>
              <div className={styles.item}>
                <p className=''>Age</p>
                <p>{getAge(mydata.birthday)}</p>
              </div>
              <div className={styles.item}>
                <p className=''>Phone</p>
                <p>{mydata.phone}</p>
              </div>
            </div>

            <div className={styles.about_list_item}>
              <div className={styles.item}>
                <p className=''>G-mail</p>
                <p><a href={`mailto:${mydata.email}@gmail.com`} target='_blank' rel='noreferrer'>{mydata.email}</a></p>
              </div>
              <div className={styles.item}>
                <p className=''>Residence</p>
                <p>{`${mydata.residence.city}, ${mydata.residence.country}`}</p>
              </div>
              <div className={styles.item}>
                <p className=''>Hobbies</p>
                <p>{mydata.hobbies[0]}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
