import '../App.css';
import { useNavigate } from 'react-router-dom';





const Nav = (props) => {

  let navigate = useNavigate()

  
  return (
    
    <div className="sidenav"> 
      <div className='links'>
        <button className='big-button'>About</button>
      </div>
      <div className='links'>
        <button className='big-button'>Projects</button>
      </div>
      <div className='links'>
      <button className='big-button'>Contact Me</button>
      </div>
   </div>
    
  );
}
export default Nav