// App.js
import React, { useState } from 'react';
import './App.css';
import './components/marks.css'
// import Header from './components/header'


function App() {
  const [st1, setSt1] = useState('');
  const [st2, setSt2] = useState('');
  const [st3, setSt3] = useState('');
  const [marks1, setMarks1] = useState('');
  const [marks2, setMarks2] = useState('');
  const [marks3, setMarks3] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [remainingMarks, setRemainingMarks] = useState('');

  const calculateMarks = (score, total, newTotal) => {
    return (score / total) * newTotal;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMarks1(calculateMarks(st1, 50, 10).toFixed(2));
    setMarks2(calculateMarks(st2, 50, 10).toFixed(2));
    setMarks3(calculateMarks(st3, 50, 20).toFixed(2));
    const total = parseFloat(marks1) + parseFloat(marks2) + parseFloat(marks3);
    setTotalMarks(total.toFixed(2));
    setRemainingMarks((100 - total).toFixed(2));
  };

  const handleReset = () => {
    setSt1('');
    setSt2('');
    setSt3('');
    setMarks1('');
    setMarks2('');
    setMarks3('');
    setTotalMarks('');
    setRemainingMarks('');
  };
  

  return (
    <>
    <div className="App">
      <h1 className="title">Marks Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label className="input-label">
          Enter marks for st1 (out of 50):
          <input className="input-field" type="number" value={st1} onChange={(e) => setSt1(e.target.value)} required />
        </label>
        <br />
        <label className="input-label">
          Enter marks for st2 (out of 50):
          <input className="input-field" type="number" value={st2} onChange={(e) => setSt2(e.target.value)} required />
        </label>
        <br />
        <label className="input-label">
          Enter marks for st3 (out of 50):
          <input className="input-field" type="number" value={st3} onChange={(e) => setSt3(e.target.value)} required />
        </label>
        <br />
        <button className="calculate-button" type="submit">Calculate</button>
      </form>
      {totalMarks && (
        <div className="output-container">
          <h2 className="output-heading">Outputs:</h2>
          <p className='output-results'>Marks for st1 (out of 10): {marks1}</p>
          <p className='output-results'>Marks for st2 (out of 10): {marks2}</p>
          <p className='output-results'>Marks for st3 (out of 20): {marks3}</p>
          <p className='output-results'>Total marks (out of 40): {totalMarks}</p>
          <p className='output-results'>Remaining %age to pass in ETE: {remainingMarks}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default App;