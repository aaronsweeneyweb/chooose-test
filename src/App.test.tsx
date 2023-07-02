import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './components/Home';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(axios);

mock.onGet('http://localhost:3001/trips').reply(200, [
  {
    id: 1,
    title: 'European Quest',
    countries: 1,
    days: 2,
    emissionsValue: 10,
    emissionsUnit: 'kg',
    rating: 5,
    imageURL: 'http://test.com',
  },
]);

test('fetches and displays data', async () => {
  render(<Home />);
  await waitFor(() => expect(screen.getByText('European Quest')).toBeInTheDocument());
});
