import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav>
      <section>
        <h1>My Blog</h1>  
        <div className={styles.NavLink}>
          <Link className="button" to="/">Posts</Link>
          <Link className="button" to="/addPost">Add new post</Link>
        </div>
      </section>
    </nav>
  )
}
