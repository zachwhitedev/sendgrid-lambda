import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [state, setState] = useState({
    email: '',
    message: '',
    submitMessage: ''
  });

  const onSubmit = () => {
    axios
      .post('/api/sendmail', {
        email: state.email,
        message: state.message
      })
      .then(res =>
        setState({
          ...state,
          submitMessage: res.data.message,
          email: '',
          message: ''
        })
      )
      .catch(err => console.log(err));
  };

  const onChangeHandler = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className='App'>
      <div className='form-container'>
        <div>
          <input
            id='email-input'
            type='email'
            placeholder='youremail@gmail.com'
            name='email'
            onChange={e => {
              onChangeHandler(e);
            }}
            value={state.email}
          ></input>
        </div>
        <div>
          <textarea
            id='message-input'
            type='text'
            placeholder='message'
            name='message'
            onChange={e => {
              onChangeHandler(e);
            }}
            value={state.message}
          ></textarea>
        </div>
        <button id='send-btn' onClick={() => onSubmit()}>
          Send
        </button>
        <p id='submitMessage'>{state.submitMessage}</p>
      </div>
    </div>
  );
}

export default App;
