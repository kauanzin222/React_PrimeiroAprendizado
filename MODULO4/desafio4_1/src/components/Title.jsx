import React from 'react'
import styles from './Title.module.css'

const Title = ({ children }) => {
    return (
        <div className='container'>
            <h2>CSS Module</h2>
            <h1 className={styles.myTitle}>Meu título</h1>
            {children}
        </div>
    )
}

export default Title
