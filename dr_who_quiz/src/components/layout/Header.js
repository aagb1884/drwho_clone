import { HeaderNavBar } from './HeaderNavBar';
import './layout.css'

const Header = () => {
    return (
        <header className='header'>
            <img className="quiz-logo" src="/images/Doctor-Who-Quiz-Logo.png" 
                alt="dr-who-logo" ></img>
        <HeaderNavBar />
        </header>
     );
}
 
export default Header;