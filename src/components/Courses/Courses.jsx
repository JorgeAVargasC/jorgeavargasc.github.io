import React from 'react'
import mydata from '../../data/mydata'
import styles from './Courses.module.css'
import { FaEye } from 'react-icons/fa'

export default function Courses () {
  return (
    <div id='courses' className={`${styles.courses} container`}>
      <h3>Courses</h3>
      <ul>
        {mydata.courses.map((course) => {
          return (
            <li key={course.id}>
              <h4>{course.title}</h4>
              <span>{course.institution}</span>
              <small>{course.date}</small>
              <a href={course.link}>
                <FaEye />
                View Certification
              </a>
            </li>
          )
        })}
      </ul>

    </div>
  )
}
