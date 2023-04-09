import React from 'react'
import styles from './Datablify.module.css'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

  const nextPage = () => {
    if (currentPage !== nPages) console.log(currentPage)
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    if (currentPage !== 1) console.log(currentPage)
    setCurrentPage(currentPage - 1)
  }

  return (
    <div className={styles.pagination}>
      <button className={styles.paginationButton} onClick={prevPage}>
        <span className={styles.paginationButtonIcon}>{'<'}</span>
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={styles.paginationButton}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}
      <button className={styles.paginationButton} onClick={nextPage}>
        <span className={styles.paginationButtonIcon}>{'>'}</span>
      </button>
    </div>
  )
}

export default Pagination
