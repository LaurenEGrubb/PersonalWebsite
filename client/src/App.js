import './App.css';
import { Canvas } from "@react-three/fiber"
import { RedFormat } from 'three';
import { OrbitControls } from '@react-three/drei'
import Home from './components/Home'
import { useGLTF } from '@react-three/drei'
import Nav from './components/Nav'
import {Routes, Route} from 'react-router-dom'
import Text from './components/Text'
import { useNavigate } from 'react-router-dom'


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    {/* <div className='pagewrap'>
      <Text />
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.2}/>
        <directionalLight position={[-2,5,2]} intensity={1}/>
        <Dragon />
      </Canvas>
      <Nav />
    
    </div> */}
    </div>
  );
}


