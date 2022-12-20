import {Logo} from '../components/index';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Link} from 'react-router-dom';
const Landing = () =>{
    return (
        <Wrapper>
        <nav>
           <Logo />
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>
                    Job <span>Tracking</span> App
                </h1>
                <p>
                    I'm baby pBR&B mlkshk letterpress microdosing 3 wolf moon yuccie cornhole hashtag pop-up tumblr disrupt offal fanny pack fingerstache. Humblebrag microdosing poke blue bottle squid affogato truffaut master cleanse lomo vexillologist. Fashion axe tbh iPhone pork belly. Gastropub church-key synth, meditation same banh mi vaporware post-ironic knausgaard four dollar toast before they sold out.
                    Truffaut skateboard banh mi organic tonx yuccie cornhole readymade mustache normcore scenester enamel pin master cleanse. Raw denim church-key actually ugh leggings cliche thundercats vape. Woke praxis organic lo-fi bitters prism mumblecore small batch flexitarian kale chips poutine kickstarter flannel. Glossier mustache health goth tumblr yr trust fund locavore fingerstache stumptown ascot meditation shoreditch DSA drinking vinegar cardigan.
                </p>   
                <Link to='/register' className='btn btn-hero'>Login/Register
                </Link>
            </div>
                <img src={main} alt='job hunt' className='img main-img'>        
                </img>
            
        </div>       
        </Wrapper>
    )
}


export default Landing