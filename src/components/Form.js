import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    admin: false,
  });

  function handleFormData(e) {
    const name = e.target.name;
    let value = e.target.value;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleFormData}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleFormData}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleFormData}
        checked={formData.checked}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
