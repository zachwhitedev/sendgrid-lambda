import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='form-container'>
        <div>
          <input 
            id='email-input'
            type='email' 
            placeholder='email'
            name='email'
            >
          </input>
        </div>
        <div>
          <textarea
          id='message-input'
          type='text'
          placeholder='message'
          name='message'
          ></textarea>
        </div>
        <button id='send-btn'>Send</button>
      </div>

    </div>
  );
}

export default App;
