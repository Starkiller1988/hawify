import { Link } from "react-router-dom";
import IMG1 from '../components/images/arrowwhite.png'
import IMG2 from '../components/images/logo2.png'

const About = () => {
  return (
    <>
      <div className="content">

      <Link to="/" className="start">
      <img src={IMG1} alt="arrow" className="arrow"/>
      </Link>
      
        <img className="logo_about" src={IMG2} alt="" />

        <div><h1 className="apptitle">HAWI.FY</h1></div>

        <div className="about_hawify">
          <p>
            <strong>HAWI.FY</strong> ist eine Kombination aus den Worten
            "Hauswirtschaft" und dem englischen Wort "Identify" (deu.:
            "identifizieren"). Die Anwendung wurde im Rahmen des Web-Development
            Bootcamps von "neuefische" programmiert. Die Programmierung dieser
            Anwendung betrug insgesamt vier Wochen und dient als nützliche
            Hilfestellung für den Haushaltsalltag. Die primären Komponenten
            bestehen aus einem Kassenbuch und einer Einkaufsliste. Als weitere
            nützliche Features wurden noch ein Taschenrechner mit einfacher
            Funktion und ein Kalender für die täglichen "To-Do's"
            einprogramiert. Erweiterungen der Anwendung sind geplant.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
