import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios'

axios
  .get('https://localhost:44381/api/books')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })

const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
}

export default App;
