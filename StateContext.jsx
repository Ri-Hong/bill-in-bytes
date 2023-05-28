import React, { createContext, useState } from 'react';

export const StateContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    transactions: [
      {
        storeName: 'No Frills',
        date: 'July 16, 2022',
        total: 124.09,
        category: 'grocery'
      },
      {
        storeName: 'Home Depot',
        date: 'August 13, 2022',
        total: 420.54,
        category: 'retail'
      },
      {
        storeName: 'McDonalds',
        date: 'September 14, 2022',
        total: 352.23,
        category: 'restaurant'
      },
      {
        storeName: 'Cineplex',
        date: 'January 11, 2022',
        total: 14.03,
        category: 'entertainment'
      },
      {
        storeName: 'Spencers',
        date: 'March 20, 2022',
        total: 69.69,
        category: 'entertainment'
      },
      {
        storeName: 'Starbucks',
        date: 'April 5, 2022',
        total: 6.99,
        category: 'restaurant'
      },
      {
        storeName: 'Walmart',
        date: 'May 3, 2022',
        total: 152.17,
        category: 'grocery'
      },
      {
        storeName: 'Best Buy',
        date: 'June 8, 2022',
        total: 879.99,
        category: 'retail'
      },
      {
        storeName: 'Petrol Canada',
        date: 'July 21, 2022',
        total: 40.09,
        category: 'gas'
      }
    ],
  });

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
};
