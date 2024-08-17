import React, { useState } from "react";

const NotificationPreferences = () => {
  const [reminders, setReminders] = useState({
    water: true,
    medication: false,
    exercise: true
  });

  const handleChange = (e) => {
    setReminders({
      ...reminders,
      [e.target.name]: e.target.checked
    });
  };

  return (
    <div className="notification-preferences-container">
      <h2>Notification Preferences</h2>
      <form>
        <label>
          <input
            type="checkbox"
            name="water"
            checked={reminders.water}
            onChange={handleChange}
          />
          Remind to drink water
        </label>
        <label>
          <input
            type="checkbox"
            name="medication"
            checked={reminders.medication}
            onChange={handleChange}
          />
          Remind to take medication
        </label>
        <label>
          <input
            type="checkbox"
            name="exercise"
            checked={reminders.exercise}
            onChange={handleChange}
          />
          Remind to exercise
        </label>
      </form>
    </div>
  );
};

export default NotificationPreferences;