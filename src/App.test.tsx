import { render, screen, waitFor } from '@testing-library/react';
import Home from './components/Home';
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/react'
import testTheme from './testTheme';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(axios);

mock.onGet('http://localhost:3001/trips').reply(200, [
  {
      id: 1,
      title: "European Quest",
      countries: 8,
      days: 21,
      emissionsValue: 100,
      emissionsUnit: "kg",
      rating: 4.5,
      imageUrl: "https://images.unsplash.com/photo-1611522135886-a632d94ff6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 2,
      title: "Autumn Roadtrip",
      countries: 1,
      days: 1,
      emissionsValue: 4,
      emissionsUnit: "t",
      rating: 4.9,
      imageUrl: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
]);

test('fetches and displays the correct data', async () => {
  render(
    <ChakraProvider theme={testTheme}>
      <Home />
    </ChakraProvider>
  );

  await waitFor(() => expect(screen.getByText('European Quest')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('8 countries, 21 days')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('100 kg CO₂e')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('4.5')).toBeInTheDocument());

  await waitFor(() => expect(screen.getByText('Autumn Roadtrip')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('1 country, 1 day')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('4 t CO₂e')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('4.9')).toBeInTheDocument());
});
