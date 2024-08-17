import React, { useState } from "react";

const PrivacySettings = () => {
  const [dataSharing, setDataSharing] = useState(true);

  const handleChange = (e) => {
    setDataSharing(e.target.checked);
  };

  return (
    <div className="privacy-settings-container">
      <h2>Privacy Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={dataSharing}
          onChange={handleChange}
        />
        Allow data sharing for better recommendations
      </label>
    </div>
  );
};

export default PrivacySettings;