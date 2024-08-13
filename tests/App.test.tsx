import { render, screen, waitFor } from '@testing-library/react';
import App from '../src/App';
import React from 'react';
// import axios from 'axios';

jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('App', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });



  it('fetches and displays data on GET request', async () => {
    // const mockedGetData = [
    //   { id: 1, name: 'Michael Phelps' },
    //   { id: 2, name: 'Ian Thorpe' },
    // ];

    // mockedAxios.get.mockResolvedValueOnce({ data: mockedGetData });

    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText('Hello World! :D')).toBeInTheDocument;
    });
  });


})

