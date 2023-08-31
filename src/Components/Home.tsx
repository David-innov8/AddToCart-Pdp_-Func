import * as React from 'react';
import { Navbar } from './Navbar';
import { Products } from './Products';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div>
        <Navbar/>
        <Products/>
    </div>
  );
}
