import React, { useState } from 'react';

const InputElement = () => {
  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);
  return (
    <div>
        <h1>Welcome to React Hooks</h1>
        <input onChange={(e) => {
            setInputText(e.target.value);
            setHistoryList([...historyList, e.target.value]);
            }}
        
        placeholder='Enter Some Text' />
        <b>{inputText}</b>
        <hr /> <br />
        <ul>
        { historyList.map((hist, key) => {
            return (
                <div key={key}>{hist}</div>
            )
        })}
        </ul>
    </div>
  )
};

export default InputElement;
