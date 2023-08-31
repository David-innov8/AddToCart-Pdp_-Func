import React, { createContext, useContext, useState, useEffect } from 'react';

// Import the cartItemsType interface
import { cartItemsType } from './Products';
// Define the shape of the context
interface ApiContextType {
  apiData: cartItemsType[];
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export function useApi() {
    const context = useContext(ApiContext);
    if (!context) {
      throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
  }

// Context provider component
export function ApiProvider({ children }: { children: React.ReactNode }) {
  const [apiData, setApiData] = useState<cartItemsType[]>([]);

  // Fetch data from the API and update the state
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products') // Replace with your API URL
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error('Error fetching API data:', error));
  }, []);

  return(
    <ApiContext.Provider value={{apiData}}>
        {children}
    </ApiContext.Provider>
  )
}
