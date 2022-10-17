import '../App.css';
import { Canvas, render, useFrame } from "@react-three/fiber"
import { RedFormat } from 'three';
import { OrbitControls, Stage } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import Nav from './Nav'
import Text from './Text'
import React from 'react'
import Room from './Room'
import Study from './Study'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";





const Home = () => {
 class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    } 
  }
    return (
    <div className="container">
     
      <Nav/>
      <section class="one">
        <h1 className='welcome'>Welcome, I'm Lauren Grubb, Software Engineer | Customer Specialist </h1>
        <ErrorBoundary>
        <div className='pagewrap'> 
             
                <div className='info'>About
                  <p>Creating a quality user experience has always been my goal. As someone transitioning into tech, I can provide the creativity, passion and personable skills. Many describe me as a go-getter and a pleasure to work with. 
                  <p>I personally love to work, I can't imagine a life without working towards something, seeing if I can make something better. This has resulted in me being a quick learner... and a passionate one at that.  </p>
                  <p>I am looking for a company that can push me to my limits, a team that I can grow with, and products that we can be proud of. 
                    When I'm not coding and working on new projects, friends and family often find me learning new languages (French and German), writing my novel, or playing a good old game of Dungeons and Dragons.</p>
                    Here are some of the technologies I am proficient in<button>Javascript</button><button>Python</button><button>React</button><button>Vue</button><button>Three.js</button><button>Postgresql</button><button>MongoDB</button><button>Express.js</button><button>Markdown</button><button>HTML</button><button>CSS</button><button>Django</button>
                  </p>
                    


                </div>
          </div>
        <Canvas className='canvas' height='100' width='100'>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.3}/>
          <directionalLight position={[-2,.4,3]} intensity={.5} width={672}/>
          <Stage preset="rembrandt" intensity={.4} environment="city">
          <Study />
          </Stage>
        </Canvas>
        </ErrorBoundary>
          {/* <div className='pagewrap'> 
              <h1 className='title'>About</h1>
                <div className='info'>
                  <p>Hello my name is Lauren</p>
                </div>
          </div> */}
         
      </section>
      <section class="two">
        <h1>Projects</h1>
      </section>
      <section class="three">
        <h1>Contact Me</h1>
      </section>



      <div className='pagewrap'>
        
        
      </div>
       <Nav />
      <div>
  
      </div>
    </div>
      
    );
  }
  export default Home
  