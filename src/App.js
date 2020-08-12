import React from 'react';
import './App.css';

import Central from './components/Central'
import FirstSidecompoents from './components/FirstSidecompoents'
import ThirdSideComponent from './components/ThirdSideComponent'

function App() {
  return (

    <div className="app">
   {/* sidebar */}
    <FirstSidecompoents/>
    
    {/* feed */}
    <Central/>

    {/* tending */}
    <ThirdSideComponent/>
    </div>
  );
}

export default App;
