import '../App.css';
import { useNavigate } from 'react-router-dom';



export default function About() {
  let navigate = useNavigate()
  return (
    
    <div className='aboutcontainer'>
        
           <h1 className='About'>About Me</h1> 
           <div className='paragraph'>
            <p>Hello! My name is Lauren and I am transitioning into software engineering. As you can imagine, I like the old school nostaldja of the more archaic games. These days
              if one were to look for me, you'll find me in my office expanding on my knowledge of coding to create more interactive websites that are both visually appealing and fun to use. If I'm not coding, I am most
              likely with friends playing <b>Dungeons and Dragons</b>. I would love to work with you and bring your visions to life. 
            </p>
            
          </div>
          <div className='buttoncontainer'>
          <button onClick={() => navigate("/")}>Back</button>
        </div>
    
    
    </div>
    
  );
}
