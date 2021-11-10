import { Link } from "react-router-dom";
import Video from "../components/Videos/Backgroundmovie.mp4";

const About = () => {
  return (
    <div>
      <video className="bkvideo" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>

      <Link to="/" className="start">
        Startseite
      </Link>

      <div className="content">
        <img className="logo_about" src="../src/images/Logo.png" alt="" />

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
    </div>
  );
};

export default About;
