import React from "react";
import SocialSharing from "./SocialSharing";
import SupportGroups from "./SupportGroups";
import ExpertAdvice from "./ExpertAdvice";

const CommunitySupport = () => {
  return (
    <div className="community-support-container">
      <h1>Community & Support</h1>
      <SocialSharing />
      <SupportGroups />
      <ExpertAdvice />
    </div>
  );
};

export default CommunitySupport;