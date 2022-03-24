import React, {useState} from "react";
import './App.css';

const ENDPOINT = 'http://localhost:3001'

function App() {

  const [cricketData,setCricketData]= useState([]);



    fetch(`${ENDPOINT}/questions`).then(response=>{
      console.log(response);
    })

  return (
    <div className="App">

        <h4>quizz</h4>
      

    

    </div>
  );
}

export default App;
