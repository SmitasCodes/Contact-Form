import React from "react";
import formValidation from "../../utils/formValidation";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <form onSubmit={formValidation} className={styles.form}>
      <div>
        <label>Name:</label>
        <input type="text" id="nameInput" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" id="emailInput" />
      </div>
      <div>
        <label>Message:</label>
        <input type="text" id="messageInput" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default Form;
