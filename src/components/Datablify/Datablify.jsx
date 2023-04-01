
import styles from './Datablify.module.css'

export const Datablify = ({ data, categories }) => {

  const isValidData = categories.length === Object.keys(data[0]).length

  const copyToClipboard = (e) => {
    const text = e.target.innerText
    navigator.clipboard.writeText(text)
    e.target.innerText = 'Copied'
    setTimeout(() => {
      e.target.innerText = text
    }, 750)
  }

  
  const limitRows = (e) => {
    const limit = Number(e.target.value)
    const rows = document.querySelectorAll('.tableRow')
    rows.forEach((row, index) => {
      if (index >= limit) {
        console.log('change')
        row.style.display = 'none'
      } else {
        console.log('changed')
        row.style.display = 'block'
      }
    })
  }

  return (
    <section className={styles.tableCompContainer}>
      {isValidData ? (
        <>
          <div className={styles.viewAndSearch}>
            <div className={styles.limitViewContainer}>
              <span className={styles.spaninfo}>Show</span>
              <select onChange={(e) => limitRows(e)}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span className={styles.spaninfo}>entries</span>
            </div>
            <div>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search..."
              />
            </div>
          </div>
          <table className={styles.tableContainer}>
            <thead>
              <tr>
                {categories.map((category) => (
                  <th className={styles.title}>{category}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((row, index) => (
                <tr className={styles.tableRow} key={index}>
                  {Object.entries(row).map(([key, value]) => (
                    <td className={styles.rowData} onClick={(e) => copyToClipboard(e)}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className={styles.errorContainer}>
          <h1 className={styles.errorTitle}>Error</h1>
          <p className={styles.errorText}>
            Categories and datas are not corresponding
          </p>
          <p className={styles.errorCompare}>
            you have <span className={styles.counter}>{categories.length}</span>{' '}
            categories and{' '}
            <span className={styles.counter}>
              {Object.keys(data[0]).length}
            </span>{' '}
            value(s) per row{' '}
          </p>
        </div>
      )}
    </section>
  )
}
