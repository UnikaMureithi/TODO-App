import React from 'react';
import './App.css';
import ViewTasks from './components/ViewTasks';
import Heading from './components/Heading';
import BoxLayout from './components/BoxLayout';

function App() {
  const API_URL = "http://localhost:3500/"
  return (
<div className="App">
      <BoxLayout>
        <Heading/>
        <ViewTasks  API_URL = {API_URL}/>
      </BoxLayout>
    </div>  );
}

export default App;
