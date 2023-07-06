import './innerButtonContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import templates from './template';
import React from 'react'





function Card(props) {

  const cardVal = props.cardContent;
  const handleClick = () => {
    //Click On Value to Text Area
    console.log(cardVal);
    document.getElementById('PromptTextArea').value = cardVal;
  }

    return( 

        <div style={{ cursor: 'pointer' }} onClick={handleClick} className="card card-attributes">
          <div className="card-body">
            <p className="card-text"><q> {props.cardContent} </q></p>
          </div>
        </div>


    );
}

function createCard(template) {
    return (
        <Card 
            cardContent = {template.content}
        />

    );
    
}

function innerButtonContainer() {

   
  

  return (
    <div className="container">
    <h2>HighlyGPT</h2>
    <img className="icon" src="/light-bulb-svgrepo-com.svg" alt="lightbulb" />
    <h3 className="title">Examples</h3>
      <div className="button-cont">
          {templates.map(createCard)}
      </div>
    </div>
  );
}

export default innerButtonContainer;
