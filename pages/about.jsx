import { Link } from 'react-router-dom';


const About = () => {
    return(
        <div className="about">

    <Link to="/" className="start">Home</Link>

            <h2 className="text">This is the About App Site!</h2>
        </div>
    )
}

export default About;