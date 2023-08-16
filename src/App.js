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
  // const tech=['JavaScript','BootStrap','Node','Express']

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
          tech1='JavaScript' tech2='React' tech3='Bootstrap' tech4='Node' />
        <Project
          title='PET PAIR' 
          product='API interface' 
          description='Pet Pair was created as a way to look through a collection of pets that are ready for adoption. Go find a new friend or just relieve some stress.'
          link='https://wo1vin.github.io/petpair/'
          image='https://wo1vin.github.io/Portfolio/images/PetPair.gif'
          altText='recording of the Pet Pair website demo' 
          tech1='JavaScript' tech2='React' tech3='Bootstrap' tech4='Node' />
        <Project 
          title='BETHEL ART STUDIO' 
          product='Business Website' 
          description='Bethel Art Studio is owned by two friendly women who host painting sessions. Their new site is now functional and matches their fun-loving presence.'
          link='https://wo1vin.github.io/BethelArtStudio/'
          image='https://wo1vin.github.io/Portfolio/images/BAS.gif'
          altText='recording of the Bethel Art Studio website demo' 
          tech1='JavaScript' tech2='CSS' tech3='Coolors'/>
        <Project 
          title='ARUBA COFFEE TRADERS' 
          product='Business Website' 
          description='Aruba Coffee Traders is a fairtrade coffee company that takes pride in the freshness of its products and the airy style of its location, so their page is fresh and vibrant to match.'
          link='https://aruba-coffee-traders.glitch.me/'
          image='https://wo1vin.github.io/Portfolio/images/02-Aruba-Coffee-Traders.gif'
          altText='recording of the Aruba Coffee Traders website demo' 
          tech1='JavaScript' tech2='CSS' tech3='Bootstrap' tech4='Glitch'/>
        <Project 
          title='LAS VEGAS ATTRACTIONS' 
          product='Utility Web App' 
          description='Customizeable list of attractions in Las Vegas that takes the hassle out of where to go. Go have more fun and spend less time browsing the internet.'
          link='https://lasvegas.cyclic.app/'
          image='https://wo1vin.github.io/Portfolio/images/LasVegas.gif'
          altText='recording of the LAS VEGAS ATTRACTIONS website demo' 
          tech1='JavaScript' tech2='OAuth 2.0' tech3='Figma' tech4='MongoDB' tech5='Node'/>
        <Project 
          title='CLARITY COUNSELING' 
          product='Business Website' 
          description='Webpage for a dedicated licensed therapist. Their clean and refined page continues to bring them more clients than they can manage.'
          link='https://wo1vin.github.io/BethelArtStudio/'
          image='https://wo1vin.github.io/Portfolio/images/BAS.gif'
          altText='recording of the Bethel Art Studio website demo' 
          tech1='JavaScript' tech2='CSS' tech3='Coolors'/>
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
        <div style={{width:"100%",height:"0","padding-bottom":"105%",position:"relative"}}>
          <iframe title="Earth Planet" src="https://giphy.com/embed/QZmdM3gGzuACQMnh3L" width="100%" height="100%" style={{"position":"absolute"}}  allowFullScreen></iframe>
        </div>
          <a href="https://giphy.com/gifs/QZmdM3gGzuACQMnh3L">Earth Planet GIF By K. K. KOIVULA</a>
      </div>
  
      <div>
        <h2>Hi! I'm Denisse Del Monte, but you can call me Scar.<br/> Welcome to my site! Come check out what I've been working on.</h2>
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
          <li>{props.tech1}</li>
          <li>{props.tech2}</li>
          <li>{props.tech3}</li>
          <li>{props.tech4}</li>
          <li>{props.tech5}</li>
        </ul>
      </div>
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
