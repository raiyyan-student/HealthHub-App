import React, { useState } from "react";

const SleepLog = () => {
  const [sleepEntries, setSleepEntries] = useState([]);
  const [sleepDate, setSleepDate] = useState("");
  const [hours, setHours] = useState("");

  const addSleepEntry = () => {
    if (sleepDate && hours) {
      setSleepEntries([...sleepEntries, { sleepDate, hours }]);
      setSleepDate("");
      setHours("");
    }
  };

  return (
    <div className="sleep-log-container">
      <h2>Sleep Log</h2>
      <input
        type="date"
        value={sleepDate}
        onChange={(e) => setSleepDate(e.target.value)}
      />
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        placeholder="Hours of Sleep"
      />
      <button onClick={addSleepEntry}>Add Entry</button>
      <ul className="sleep-list">
        {sleepEntries.map((entry, index) => (
          <li key={index}>
            {entry.sleepDate} - {entry.hours} hours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SleepLog;