import React from 'react';
import './App.css';

function Button(props){
  return <button className={props.type}>
    <p className={props.animate} >{props.text}</p>
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
      <Intro className="fade-in-bottom"/>
      <section className='projects'>
        <Project />
        <Project />
        <Project />
      </section>
      <section className='outro'>
        <Button className='toTop' arrow='&#8594;' />
      </section>
      <section className='footer'>
        <a href="https://wo1vin.github.io/Portfolio/services.html" 
          className='creator'>Del Monte</a>
      </section>
  </div>
}

function Intro(){  
    return <section className="intro">
  
      <div className="visualContainer">
        <h2>Future visual goes here</h2>
      </div>
  
      <div>
        <h2>Est nulla fugiat minim amet non nisi.Dolor elit aliqua laboris irure do labore deserunt ullamco.</h2>
        <Button text='Take a peek' type='eye' animate='flip-out-hor-bottom'/>
      </div>
    </section>
}

function Project(){
  return <article>
    <header>
      <div>
        <h3>Project Name</h3>
        <span>Short description</span>
      </div>
      <div>
        <p>The why of the project, what you did.</p>
        {/* eslint-disable-next-line */}
        <a href='#' className='links'>Link &#8594;</a>
      </div>
    </header>
    <div>
      <h3>Stock images of widescreen and mobile views of the project</h3>
    </div>
  </article>
}


export default App;
