import React, { useState } from 'react';
import Routes from './routes/routes';
import './App.css'

function App() {
  const [menubar, setMenubar] = useState(false)

 
  return (
    <div className="App">
      <Routes menubar={menubar} toggle={()=>{setMenubar(!menubar)}} />
    </div>
  );
}

export default App;
