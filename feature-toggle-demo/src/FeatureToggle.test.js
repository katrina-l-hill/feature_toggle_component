import { render, screen } from '@testing-library/react';
import FeatureToggle from './FeatureToggle';

describe('FeatureToggle Component', () => {
  
    // Normal test cases
  test('renders feature name when isEnabled is true', () => {
    render(<FeatureToggle isEnabled={true} featureName="Feature A" />);
    expect(screen.getByText('Feature A')).toBeInTheDocument();
  });

  test('renders disabled message when isEnabled is false', () => {
    render(<FeatureToggle isEnabled={false} featureName="Feature B" />);
    expect(screen.getByText('Feature Feature B is disabled')).toBeInTheDocument();
  });

  test('renders feature name when isEnabled is true (Feature C)', () => {
    render(<FeatureToggle isEnabled={true} featureName="Feature C" />);
    expect(screen.getByText('Feature C')).toBeInTheDocument();
  });

  //Edge test cases
  test('renders empty string when featureName is empty and isEnabled is true', () => {
    render(<FeatureToggle isEnabled={true} featureName="" />);
    const emptyElement = screen.getByTestId('feature-toggle');
    expect(emptyElement).toBeInTheDocument();
    expect(emptyElement).toHaveTextContent(''); 
  });

  test('handles long featureName string when isEnabled is false', () => {
    const longFeatureName = "Feature " + "A".repeat(1000);
    render(<FeatureToggle isEnabled={false} featureName={longFeatureName} />);
    expect(screen.getByText(`Feature ${longFeatureName} is disabled`)).toBeInTheDocument();
  });

  test('defaults to disabled when isEnabled is not passed', () => {
    render(<FeatureToggle featureName="Feature D" />);
    expect(screen.getByText('Feature Feature D is disabled')).toBeInTheDocument();
  });

});
