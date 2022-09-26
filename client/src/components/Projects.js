import { useNavigate } from 'react-router-dom';
import '../App.css';



export default function Projects() {
  let navigate = useNavigate()
  return (
    
    <div className='projectwrap'>
        
           <h1 className='About'>Some Projects</h1> 
           <p className='Project'>These are some of the projects I have been working on to practice and hone my skills</p>
          <div className='projectcontainer'>
          <div className='box' onClick={() => window.location.assign("https://damp-plains-81661.herokuapp.com/")}>Animal Crossing Forum</div>
          <div className='box' onClick={() => window.location.assign("https://github.com/LaurenEGrubb/Battle-Ship")}>BattleShip</div>
          <div className='box' onClick={() => window.location.assign("https://github.com/LaurenEGrubb/Battle-Ship")}>Movie Database</div>
          </div>
           <button onClick={() => navigate("/")}>Back</button>
    
    </div>
    
  );
}
