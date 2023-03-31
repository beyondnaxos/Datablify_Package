import styles from "./Datablify.module.css"

export const Datablify = ({ data }) => {

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
          <span className={styles.spaninfo} >entries</span>
        </div>
        <div>
          <input type="text" className={styles.searchInput}placeholder="Search..." />
        </div>
      </div>
      <table className={styles.tableContainer}>
        <thead>
          <tr>
            <th className={styles.title}>First Name</th>
            <th className={styles.title}>Last Name</th>
            <th className={styles.title}>Start Date</th>
            <th className={styles.title}>Department</th>
            <th className={styles.title}>Date of Birth</th>
            <th className={styles.title}>Street</th>
            <th className={styles.title}>City</th>
            <th className={styles.title}>State</th>
            <th className={styles.title}>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr className={styles.tableRow} key={index}>
              <td className={styles.rowData}>{row.firstName}</td>
              <td className={styles.rowData}>{row.lastName}</td>
              <td className={styles.rowData}>{row.startDate}</td>
              <td className={styles.rowData}>{row.department}</td>
              <td className={styles.rowData}>{row.dateOfBirth}</td>
              <td className={styles.rowData}>{row.street}</td>
              <td className={styles.rowData}>{row.city}</td>
              <td className={styles.rowData}>{row.state}</td>
              <td className={styles.rowData}>{row.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
