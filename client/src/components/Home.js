import '../App.css';
import { Canvas, render, useFrame } from "@react-three/fiber"
import { RedFormat } from 'three';
import { OrbitControls } from '@react-three/drei'
import Dragon from './Dragon'
import { useGLTF } from '@react-three/drei'
import Nav from './Nav'
import Text from './Text'
import Projects from './Projects'
import React from 'react'





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
    
      <div className='pagewrap'>
        <Text />
        <ErrorBoundary>
        <Canvas className='canvas'>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.3}/>
          <directionalLight position={[-2,5,4]} intensity={1}/>
          <Dragon />
        </Canvas>
        </ErrorBoundary>
        <Nav />
      
      </div>
      
    );
  }
  export default Home
  