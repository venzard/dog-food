import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const Card = function(){
  return <div className='card'> ^-^ </div>
}

ReactDOM.render(
  <>
    <h1>Hello <span className="mark"> React</span>!</h1>
    <div className='box'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
  </>,
  document.querySelector("#root") 
);  