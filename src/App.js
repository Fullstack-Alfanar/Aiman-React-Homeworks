import './App.css';
import React from 'react';
import NavBar from './components/navbar/navbar';
import UpdateTime from './components/timedata/updatTime';

function App() {
  return (
    <div>
      <UpdateTime />
      <NavBar />
    </div >

  );
}

export default App;
