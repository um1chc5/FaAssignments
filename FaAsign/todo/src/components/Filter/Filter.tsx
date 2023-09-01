import styles from './Filter.module.css'

interface FilterProps {
  filterSelection: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function Filter({ filterSelection }: FilterProps) {
  return (
    <div className={styles.filter}>
      <h3>List</h3>
      <select onChange={filterSelection} className={styles.select}>
        <option value='all'>all</option>
        <option value='todo'>To do</option>
        <option value='done'>Done</option>
      </select>
    </div>
  )
}

export default Filter
