import './App.css';
import React from 'react';
import BrandDataList from "./components/branddatalist/branddatalist.js";
import UpdateTime from "./components/timedata/updatTime.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UpdateTime />
        <BrandDataList />
      </header>
    </div>
  );
}

export default App;
