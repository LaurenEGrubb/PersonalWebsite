import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Canvas } from "@react-three/fiber"
import { RedFormat } from 'three';
import { OrbitControls } from '@react-three/drei'
import Dragon from './Dragon'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { useGLTF } from '@react-three/drei'
import Nav from './Nav'
import {Routes, Route} from 'react-router-dom'
import Text from './Text'





const Home = () => {
    return (
    
      <div className='pagewrap'>
        <Text />
        <Canvas className='canvas'>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.3}/>
          <directionalLight position={[-2,5,2]} intensity={1}/>
          <Dragon />
        </Canvas>
        <Nav />
      
      </div>
      
    );
  }
  export default Home
  