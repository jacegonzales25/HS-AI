import TextContainer from './Components/TextContainer/textContainer.jsx';
import Terminal  from './Components/Terminal/terminal.jsx';
import Sidebar from './Components/SideBar/sideBar.jsx';
import './App.css';
import React, { useState } from "react";

function App() {

  const [clickState, setIsClicked] = useState(false);

  function submitPrompt() {
    setIsClicked(true);
    console.log(clickState);
  }


  return (
    <div className="App">
      <Sidebar />
      <header className="App-header">
        <TextContainer isClicked={clickState}/> 
        <Terminal submitFunction={submitPrompt}/>      
      </header>
    </div>
  );
}

export default App;
