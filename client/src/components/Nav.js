import '../App.css';
import { useNavigate } from 'react-router-dom';




const Nav = (props) => {

  let navigate = useNavigate()

  
  return (
    
    <div className='buttons'>
        
           <button onClick={() => navigate("/about")}>About</button> 
           <button onClick={() => navigate("projects")}>Projects</button>
    </div>
    
  );
}
export default Nav