import './textContainer.css';
import InnerButtonContainer from './InnerComponents/InnerButtonContainer/innerButtonContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';



function TextContainer({isClicked}) {
  return (
    <div className="container text-Container" id="content">
      {!isClicked ? <InnerButtonContainer /> : <h1>placeholder</h1>}
    </div>
  );
} 

export default TextContainer;
