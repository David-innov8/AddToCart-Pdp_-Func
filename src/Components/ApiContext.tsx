import React, { createContext, useContext, useState, useEffect } from 'react';

// Import the cartItemsType interface
import { cartItemsType } from './Products';
// Define the shape of the contextType contains the structrue of the api
interface ApiContextType {
  apiData: cartItemsType[];
}

// create the context
const ApiContext = createContext<ApiContextType | undefined>(undefined);

export function useApi() {
    const context = useContext(ApiContext);
    if (!context) {
      throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
  }

// Context provider component
// so this export function hold all the api data. Import useApi to use use the api data store in the context.

// note for self: reactNode simply reps all types that a react componetn can take
export function ApiProvider({ children }: { children: React.ReactNode }) {
  const [apiData, setApiData] = useState<cartItemsType[]>([]);

  // Fetch data from the API and update the state
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products') 
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


//