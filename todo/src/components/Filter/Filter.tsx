import styles from './Filter.module.css'

interface Props {
  filterSelection: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
function Filter({ filterSelection }: Props) {
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
