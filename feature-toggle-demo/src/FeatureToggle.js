import React from 'react';

function FeatureToggle({ isEnabled, featureName }) {
  return (
    <div>
      {isEnabled ? (
        <p>{featureName}</p>
      ) : (
        <p>Feature {featureName} is disabled</p>
      )}
    </div>
  );
}

export default FeatureToggle;