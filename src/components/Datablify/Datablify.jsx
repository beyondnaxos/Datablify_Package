import Styles from "./Datablify.module.css"

export const Datablify = ({ data }) => {
  return (
    <section className={Styles.tableCompContainer}>
      <div className={Styles.viewAndSearch}>
        <div className={Styles.limitViewContainer}>
          <span>Show</span>
          <select>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span>entries</span>
        </div>
        <div>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr key={index}>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.startDate}</td>
              <td>{row.department}</td>
              <td>{row.dateOfBirth}</td>
              <td>{row.street}</td>
              <td>{row.city}</td>
              <td>{row.state}</td>
              <td>{row.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
