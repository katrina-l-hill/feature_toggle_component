// src/FeatureToggle.js
import React from 'react';

const FeatureToggle = ({ isEnabled, featureName }) => {
  return (
    <div data-testid="feature-toggle">
      {isEnabled ? featureName : `Feature ${featureName} is disabled`}
    </div>
  );
};

export default FeatureToggle;
