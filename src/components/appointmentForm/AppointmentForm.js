import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContact = (e) => {
    setContact(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
        />
      </label>
      <label>
        Contact:
        <select value={contact} onChange={handleChangeContact}>
          <option value="">No Contact Selected</option>
          {contacts.map((contact) => (
            <option key={contact.id} value={contact.name}>
              {contact.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          min={getTodayString()}
          onChange={handleChangeDate}
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={handleChangeTime}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
