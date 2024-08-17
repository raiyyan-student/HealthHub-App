import React from "react";
import NotificationPreferences from "./NotificationPreferences";
import PrivacySettings from "./PrivacySettings";
import ThemeCustomization from "./ThemeCustomization";

const Settings = () => {
  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <NotificationPreferences />
      <PrivacySettings />
      <ThemeCustomization />
    </div>
  );
};

export default Settings;