import React, { useState, useEffect } from "react";
import styles from "./Table.module.css";
import getDocuments from "../../utils/getDocuments";
import TableRow from "./TableRow";

const Table = () => {
  const [contactsData, setContactsData] = useState([]);
  const colorr = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocuments();
        setContactsData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  });

  return (
    <div className={styles.table_div}>
      {contactsData.length === 0 ? (
        <p>No data was found</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contactsData.map((contact) => {
              return <TableRow
                email={contact.email}
                name={contact.name}
                message={contact.message}
              />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
