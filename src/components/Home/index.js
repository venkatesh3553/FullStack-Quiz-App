import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';

import { Link } from "react-router-dom";
import './index.css'
class Home extends Component{
    render(){
        return(
            <>
            <h1 className='home-head'>Choose Your Text Topic</h1>
            <div className='home-bg'>
                
               <Link to={'/animals'} className='link-card'>
                    <div className='topic-card'>
                        <img src='https://tse3.mm.bing.net/th/id/OIP.oN23awZ3HM0kbeQ4cv-S3AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' className='image' alt='Image'/>
                        <h1 className='card-name'>Animals</h1>
                    </div>
                </Link>

                <Link to={'/gk'} className='link-card'>
                    <div className='topic-card'>
                        <img src='https://play-lh.googleusercontent.com/0MXQa_68ZxY1p0F7s8T733ANiRo1-xcZvRjmgOnwCOObq5qbeNnm-V3WVgOrgsjJ-Tw' className='image' alt='Image'/>
                        <h1 className='card-name'>GK</h1>
                    </div>
                </Link>

                <Link to={'/history'} className='link-card'>
                    <div className='topic-card'>
                        
                        <img src='https://www.thrillophilia.com/blog/wp-content/uploads/2014/07/Hampi.jpg' className='image' alt='Image'/>
                        <h1 className='card-name'>History</h1>
                    </div>
                </Link>

                <Link to={'/mathematics'} className='link-card'>
                    <div className='topic-card'>
                        
                        <img src='https://marketplace.canva.com/EAFMf8D5qPw/1/0/1600w/canva-blue-and-green-illustrated-kids-math-quiz-presentation-QY-fLz689PQ.jpg' className='image' alt='Image'/>
                        <h1 className='card-name'>Mathematics</h1>
                    </div>
                </Link>

                <Link to={'/music'} className='link-card'>
                    <div className='topic-card'>
                        
                        <img src='https://tse3.mm.bing.net/th/id/OIP.-Fh3M9r6nkBP_QVXi5TD6wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' className='image' alt='Image'/>
                        <h1 className='card-name'>Music</h1>
                    </div>
                </Link>

                <Link to={'/movies'} className='link-card'>
                    <div className= 'topic-card'>
                        
                        <img src='https://wallpapercave.com/wp/wp1945909.jpg' className='image' alt='Image'/>
                        <h1 className='card-name'>Movies</h1>
                    </div>
               </Link>

               <Link to={'/physics'} className='link-card'>
                    <div className='topic-card'>
                        
                        <img src='https://tse1.mm.bing.net/th/id/OIP.T-HHuVgQ7SjDmU7c8kQK0wHaEf?rs=1&pid=ImgDetMain&o=7&rm=3' className='image' alt='Image'/>
                        <h1 className='card-name'>Physics</h1>
                    </div>
                </Link>

                <Link to={'/planets'} className='link-card'>
                    <div className='topic-card'>
                       
                        <img src='https://tse4.mm.bing.net/th/id/OIP.0oKlE1kBFFnIaQ_wIVmdVgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' className='image' alt='Image'/>
                         <h1 className='card-name'>Planets</h1>
                    </div>
                </Link>

                <Link to={'/science'} className='link-card'>
                    <div className='topic-card'>
                        
                        <img src='https://www.quizzmind.com/img/science-nature.webp' className='image' alt='Image'/>
                        <h1 className='card-name'>Science</h1>
                    </div>
                </Link>

                <Link to={'/sports'} className='link-card'>
                    <div className='topic-card'>
                        <img src='https://images.squarespace-cdn.com/content/v1/58ee0b551e5b6c8ff18b94ad/1699891416586-ISX1YK543UHUKVS9WHSA/sports+quiz+questions+and+answers.jpg' className='image' alt='Image'/>
                        <h1 className='card-name'>Sports</h1>
                    </div>
                </Link>
                </div>
            </>
        )
    }
} 
export default Home