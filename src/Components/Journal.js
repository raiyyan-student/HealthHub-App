import React, { useState } from "react";

const Journal = () => {
  const [entry, setEntry] = useState("");

  const saveEntry = () => {
    if (entry) {
      alert(`Journal Entry Saved:\n${entry}`);
      setEntry("");
    }
  };

  return (
    <div className="journal-container">
      <h2>Journal</h2>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write about your thoughts and feelings..."
      />
      <button onClick={saveEntry}>Save Entry</button>
    </div>
  );
};

export default Journal;