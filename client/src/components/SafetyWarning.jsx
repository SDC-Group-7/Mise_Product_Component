import React from 'react';

const SafetyWarning = () => (
  <div className="safety-warning" style={{
    display:"flex",
    textAlign:"left",
    flexDirection:"row-reverse",
    alignItems:"center",
    justifyContent:"space-between",
    wordBreak:"break-word"
  }}>
      <span className="warning-message">Warning!<br/>Choking Hazard.<br/>Small parts.</span>
      <div className="warning-icon" display="block">This is a warning icon.</div>
  </div>
);

export default SafetyWarning;