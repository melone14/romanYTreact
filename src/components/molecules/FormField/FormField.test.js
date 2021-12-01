import '@testing-library/jest-dom';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField name="name" label="name" id="name" />);
  });
});
