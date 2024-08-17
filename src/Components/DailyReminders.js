import React, { useState } from "react";

const DailyReminders = () => {
  const [reminders, setReminders] = useState([
    "Drink Water",
    "Take Medication",
    "Go for a Walk"
  ]);

  const [newReminder, setNewReminder] = useState("");

  const addReminder = () => {
    if (newReminder.trim()) {
      setReminders([...reminders, newReminder]);
      setNewReminder("");
    }
  };

  return (
    <div className="reminders-container">
      <h2>Daily Reminders</h2>
      <ul className="reminder-list">
        {reminders.map((reminder, index) => (
          <li key={index}>{reminder}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newReminder}
        onChange={(e) => setNewReminder(e.target.value)}
        placeholder="Add a new reminder"
      />
      <button onClick={addReminder}>Add Reminder</button>
    </div>
  );
};

export default DailyReminders;