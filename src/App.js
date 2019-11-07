import React from 'react';
import Info from "./components/infogen"

import "bulma/css/bulma.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Please work</h1>
      </header>
      <Info showID="62715"/>
      <Info showID="61709"/>
      <Info showID="12697"/>
      <Info showID="12971"/>
      <Info showID="12609"/>
    </div>
  );
}


export default App;
