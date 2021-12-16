import './App.css';
import OutputDisplay from './components/OutputDisplay';
import InputKeys from './components/InputKeys';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const setInputValue = (value)=>{
    if(value !=="="){
      setOutput('')
      setError('')
    }
    if(value === "All Clear"){
      setInput('')
    }else if(value === "Clear"){
      setInput(input.slice(0,-1))
    }else if(value === "="){
      generateOutput()
      setInput('')
    }else{
      setInput(input + value)
    }
  }
  const generateOutput =()=>{
    try{
    const out = evaluate(input)
    setOutput(out)
    }catch(err){
      setError(err.message)
    }
  }
  return (
    <div className="App">
    <div>X</div>
    <div>+</div>
    <div>%</div>
    <div>=</div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <h1>Calculator App</h1>
    <OutputDisplay input={input} output={output} error={error}/>
    <InputKeys setInputValue={setInputValue}/>
    </div>
  );
}

export default App;
