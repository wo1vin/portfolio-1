import React from 'react';
import './App.css';
import Eye from './blinking-eye.gif';

function Button(){
  return <button 

  // onMouseOver={()=>{ 
  //   document.querySelector("button").style = {
  //     "background" : `#000 url("${Eye}") -35px -75px no-repeat`,
  //   }
  // }}
  //   onMouseLeave={()=>{ 
  //     document.querySelector("button").style = {
  //       "background" : "black",
  //       // "transition" : " 2s ease-in 2s", 
  //     }
      // document.getElementById("peek").innerText = "Take a peek"
    //}} 
    
    >
    <p className='flip-out-hor-bottom' id="peek">Take a peek</p>
  </button>
}

function Header(){
  return <header className="fade-in-bottom">
    <h1>Denisse Del Monte</h1>
  </header>
}

function App() {  
  return <div>
      <Header />
      <Intro />
  </div>
}

function Intro(){  
    // const [view,setView] = useState("black")

    // function handleMouseOver(){
    //   setView("#000 url(../public/blinking-eye.gif) -35px -75px no-repeat")
    // }
    return <section className="intro">
  
      <div className="visualContainer">
        <h2>Future visual goes here</h2>
      </div>
  
      <div>
        <h2>Est nulla fugiat minim amet non nisi.Dolor elit aliqua laboris irure do labore deserunt ullamco.</h2>
        <Button />
      </div>
    </section>
}

export default App;
