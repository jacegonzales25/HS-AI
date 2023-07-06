import './terminal.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";



function Terminal(props) {
  return (
    <div className="container">
      <div className="fixed-bottom text-box">
        <div className="form-group">
          <textarea className="form-control" id="PromptTextArea" rows="1" placeholder="send a message"></textarea>
        </div>
        <Button className="Submit-Btn" onClick={props.submitFunction}>Submit</Button>
      </div>
    </div>
  );
}

export default Terminal;
