import React from 'react'
import styles from './CarDetails.module.css'

const CarDetails = ({ carros }) => {
    return (
        <div className='container'>
            <h2 style={{textAlign: 'start'}}>Desafio 5</h2>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th className={styles.th}>Marca</th>
                        <th className={styles.th}>KM</th>
                        <th className={styles.th}>Cor</th>
                        <th className={styles.th}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {carros.map(carro => (
                        <tr key={carro.id} className={carro.novo ? styles.trNovo : styles.tr} >
                            <td className={styles.td}>{carro.marca}</td>
                            <td className={styles.td}>{carro.km}</td>
                            <td className={styles.td}>{carro.cor}</td>
                            {carro.novo ? (
                                <td className={`${styles.td} ${styles.carroNovo}`}>Este carro é novo!</td>
                            ) : (
                                <td className={styles.td}>Este carro não é novidade!</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CarDetails
