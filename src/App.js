//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';


function App() {
  return (
    //BEM naming
    <div className="App">
        
      <div className="app__body">
        <Sidebar />
        
        <Chat />
      </div>
    </div>
  );
}

export default App;
