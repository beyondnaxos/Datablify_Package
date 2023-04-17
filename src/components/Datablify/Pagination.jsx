import React, { useEffect } from "react"
import styles from "./Pagination.module.css"

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

  const number = 1

  const colorCurrentPage = (number) => {
    if (number === currentPage) {
      return "black"
    }
  }

  const backgroundColorCurrentPage = (number) => {
    if (number === currentPage) {
      return "white"
    }
  }

  return (
    <div className={styles.pagination}>
      {currentPage === 2 ? (
        <>
          <button
            key={1}
            className={styles.paginationButton}
            onClick={() => setCurrentPage(number)}
            style={{ order: 0, color: colorCurrentPage(number), backgroundColor: backgroundColorCurrentPage(number) }}
          >
            {1}
          </button>
        </>
      ) : (
        <>
          <button
            key={1}
            className={styles.paginationButton}
            onClick={() => setCurrentPage(number)}
            style={{ order: 0, color: colorCurrentPage(number), backgroundColor: backgroundColorCurrentPage(number) }}
          >
            {1}
          </button>
          <button className={styles.paginationButton} style={{ order: 1 }} onClick={prevPage}>
            <span className={styles.paginationButtonIcon}>{"<"}</span>
          </button>
        </>
      )}
      <button
        key={currentPage}
        className={styles.paginationButton}
        onClick={() => setCurrentPage(currentPage)}
        style={{ order: 2, color: colorCurrentPage(currentPage), backgroundColor: backgroundColorCurrentPage(currentPage) }}
      >
        {currentPage}
      </button>

      {currentPage === pageNumbers.length - 1 ? (
        <>
          <button
            key={pageNumbers.length}
            className={styles.paginationButton}
            onClick={() => setCurrentPage(pageNumbers.length)}
            style={{
              order: pageNumbers.length + 1,
              color: colorCurrentPage(pageNumbers.length),
              backgroundColor: backgroundColorCurrentPage(pageNumbers.length),
            }}
          >
            {pageNumbers.length}
          </button>
        </>
      ) : (
        <>
          <button
            key={pageNumbers.length}
            className={styles.paginationButton}
            onClick={() => setCurrentPage(pageNumbers.length)}
            style={{
              order: pageNumbers.length + 2,
              color: colorCurrentPage(pageNumbers.length),
              backgroundColor: backgroundColorCurrentPage(pageNumbers.length),
            }}
          >
            {pageNumbers.length}
          </button>
          <button className={styles.paginationButton} style={{ order: pageNumbers.length + 1 }} onClick={nextPage}>
            <span className={styles.paginationButtonIcon}>{">"}</span>
          </button>
        </>
      )}
      {/* <button className={styles.paginationButton} style={{ order: pageNumbers.length + 1 }} onClick={nextPage}>
        <span className={styles.paginationButtonIcon}>{">"}</span>
      </button> */}
    </div>
  )
}

export default Pagination
