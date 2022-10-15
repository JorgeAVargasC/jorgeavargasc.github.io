import React from 'react'
import styles from './Projects.module.css'

import { FaEye, FaGithub } from 'react-icons/fa'

export default function Project ({ project }) {
  return (
    <div class={styles.card}>
      <div class={styles.card_img}> </div>
      <ul class={styles.social_media}>
        <li>
          <a href={project.liveURL} target='_blank' rel='noreferrer'>
            <FaEye />
          </a>
        </li>
        <li>
          <a href={project.githubURL} target='_blank' rel='noreferrer'>
            <FaGithub />
          </a>
        </li>
      </ul>
      <div class={styles.card_info}>
        <p class={styles.title}>{project.name}</p>
        <p class={styles.subtitle}>Jorge Vargas</p>
      </div>
    </div>
  )
}
