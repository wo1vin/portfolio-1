import React, { createElement } from 'react';
import './App.css';

function Button(props){
  return <button className={props.type}>
    <p className={props.animate} >{props.text}</p>
  </button>
}

function Header(props){
  return <header className="fade-in-bottom">
    <h1>{props.text}</h1>
  </header>
}

function App() {  
  return <div>
      <Header text='Denisse Del Monte' />
      <Intro className="fade-in-bottom"/>
      <section className='projects'>
        <Header text='Projects'></Header>
        <Project 
          title='THE ART LOUNGE' 
          product='Social Platform' 
          description='The Art Lounge is a web app where users can post their art and receive constructive criticism and appreciation with a focus on improving their skills.'
          link='https://artlounge.cyclic.app/'
          image='https://github.com/wo1vin/Portfolio/blob/main/images/ArtLounge.gif?raw=true'
          altText='recording of the art lounge website demo' 
          techUsed={['JavaScript','BootStrap','Node','Express']}/>
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
    return <section className="intro fade-in-bottom">
  
      <div className="visualContainer">
        <h2>Future visual goes here</h2>
      </div>
  
      <div>
        <h2>Est nulla fugiat minim amet non nisi.Dolor elit aliqua laboris irure do labore deserunt ullamco.</h2>
        <Button text='Take a peek' type='eye' animate='flip-out-hor-bottom'/>
      </div>
    </section>
}

function Project(props){ 
  return <article>
    <header>
      <div>
        <h3>{props.title}</h3>
        <span>{props.product}</span>
      </div>
      <div>
        <p>{props.description}</p>
        {/* eslint-disable-next-line */}
        <a href={props.link} className='linkBtn'>Link &#8594;</a>
      </div>
    </header>
    <div>
      <img src={props.image} alt={props.altText} ></img>
      <div className='tech'>
        <h3>Tech Stack</h3>
        <ul>
          <li>{props.techUsed}</li>
        </ul>
      </div>
      {/* replace gif with stock images of widescreen and mobile views of the project [0]
      [
    "JavaScript",
    "NootStrap",
    "node",
    "Express"
]*/}
    </div>
  </article>
}
// function Stack(props){
  // props.techArr.forEach(d => {
  //   let newEl = createElement('li',`${d}`)
  //   console.log(newEl)
  //   document.querySelector('ul').addChild(newEl)
  // })
  
  // console.log(props.techArr)

  // for(let i = 0; i < ; i++){
  //   document.querySelector('ul')
  // }

  // return <div className='tech'>
  //       <h3>Tech Stack</h3>
  //       <ul>
         
           



export default App;
