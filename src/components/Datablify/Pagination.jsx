import React from 'react'
import styles from './Pagination.module.css'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

  const nextPage = () => {
    if (currentPage !== nPages) console.log(currentPage)
    if (currentPage >= nPages) {
      setCurrentPage(1)
    } else {
      setCurrentPage(currentPage + 1)
    }

  }

  const prevPage = () => {
    if (currentPage !== 1) console.log(currentPage)
    if (currentPage <= 1) {
      setCurrentPage(pageNumbers.length)
    } else {
      setCurrentPage(currentPage - 1)
    }
  }


  const colorCurrentPage = (number) => {
    if (number === currentPage) {
      return 'black'
    }
  }

  const backgroundColorCurrentPage = (number) => {
    if (number === currentPage) {
      return 'white'
    }
  }


  return (
    <div className={styles.pagination}>
      <button className={styles.paginationButton} style={{ order:1 }} onClick={prevPage}>
        <span className={styles.paginationButtonIcon}>{'<'}</span>
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={styles.paginationButton}
          onClick={() => setCurrentPage(number)}
          style={{ order:number +1 , color: colorCurrentPage(number) , backgroundColor: backgroundColorCurrentPage(number) }}
        >
          {number}
        </button>
      ))}
      <button className={styles.paginationButton} style={{ order:pageNumbers.length +1}}  onClick={nextPage}>
        <span className={styles.paginationButtonIcon}>{'>'}</span>
      </button>
    </div>
  )
}

export default Pagination
