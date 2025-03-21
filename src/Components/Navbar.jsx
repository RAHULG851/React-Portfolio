import logo from "../assets/rglogo.png.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-16" src= {logo} alt="logo"/>
        
        </div>

       
       

    <div className="m-3 flex items-center justify-centre gap-5 text-2xl">
    <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
     
        <a
          href="https://github.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://x.com/i/flow/login"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaTwitter/>
        </a>

        <a
          href="https://www.freesumes.com/wp-content/uploads/2018/04/contrast-resume-design.jpg"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <FaFileAlt/>
        </a>
     
    </div>
    </nav>
  );
};

export default Navbar;
