import '../App.css';
import { useNavigate } from 'react-router-dom';
import gif from '../components/Spyro.gif'




const Nav = (props) => {

  let navigate = useNavigate()

  
  return (
    <div className="gameconsole"> 
           <button className="left" onClick={() => navigate("projects")}>Projects</button>
           <img className="gif" src={gif} alt="loading..."/>
           <button className="right" onClick={() => navigate("/about")}>About</button>
   </div>
    
  );
}
export default Nav