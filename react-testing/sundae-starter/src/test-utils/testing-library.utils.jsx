import { render } from '@testing-library/react';
import { OrderDetailsProvider } from '../context/OrderDetail';

const renderWithContext = (ui, options) => {
  render(ui, { wrapper: OrderDetailsProvider, ...options });
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';

export { renderWithContext as render };
