import { Link } from "react-router-dom";
import Video from "../components/Videos/Backgroundmovie.mp4";
import React from "react";
import styled from "styled-components";
import HomeComponent from "../components/expense_tracker_components/home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: Electrolize;
`;

const Header = styled.span`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-top: 0px;
  font-family: Electrolize;
`;

function Expense() {
  return (
    <>
      <video className="bkvideo" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>

      <Link to="/" className="start">
        Startseite
      </Link>


      <div className="content">
        <Container>
          <Header>Kassenbuch</Header>
          <HomeComponent />
        </Container>
      </div>
    </>
  );
}

export default Expense;
