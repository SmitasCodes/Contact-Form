import React from 'react';
import styles from './TableRow.module.css';

const TableRow = (props) => {
  return (
    <tr className={styles.table_row}>
      <td>{props.email}</td>
      <td>{props.name}</td>
      <td>{props.message}</td>
    </tr>
  )
}

export default TableRow