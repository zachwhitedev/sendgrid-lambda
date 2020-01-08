import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const[state, setState] = useState({
    email: '',
    message: ''
  })

  const onSubmit = () => {
    axios.post('/api/sendmail', {
      email: state.email,
      message: state.message
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
      

  const onChangeHandler = (e) => {
    setState({...state, [e.target.name]: e.target.value});
  }

  useEffect(() => {
    console.log(state.message)
  })

  return (
    <div className="App">
      <div className='form-container'>
        <div>
          <input 
            id='email-input'
            type='email' 
            placeholder='email'
            name='email'
            onChange={(e) => {onChangeHandler(e)}}
            value={state.email}
            >
          </input>
        </div>
        <div>
          <textarea
          id='message-input'
          type='text'
          placeholder='message'
          name='message'
          onChange={(e) => {onChangeHandler(e)}}
          value={state.message}
          ></textarea>
        </div>
        <button id='send-btn' onClick={() => onSubmit()}>Send</button>
      </div>

    </div>
  );
}

export default App;
