import styles from './Datablify.module.css'

export const Datablify = ({ data, categories }) => {

  return (
    <section className={styles.tableCompContainer}>
      <div className={styles.viewAndSearch}>
        <div className={styles.limitViewContainer}>
          <span className={styles.spaninfo}>Show</span>
          <select>
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
                <td className={styles.rowData}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
