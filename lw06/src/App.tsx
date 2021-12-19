import * as React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import Imagejpg from './0209-modnaya-eda-sushi-pitstsa-i-kartofel-fri-0.jpg'




function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">
      <img src={Imagejpg} className='Imagejpg1' alt={"Imagejpg"}/>
      </header>

    </div>
  );
}

export default App;
