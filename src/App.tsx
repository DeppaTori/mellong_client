import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';

const App: React.FC = () => {
  return (
    <div>
       <Hello name="TypeScript" />
    </div>
  );
}

export default App;
