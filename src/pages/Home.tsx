import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { MainButton } from "../styles";
import { Link } from "react-router-dom";

import PopularGames from "../components/PopularGames";

const Home: React.FC<{}> = () => {
    
  return (
    <Parallax pages={2} style={{ top: "20", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Tabletop Organizer</h1>
          <p>Organize your games!</p>
        </div>
        <div>
          <Link to="/users/auth/login">
            <MainButton color="main">Login</MainButton>
          </Link>
          <Link to="/users/auth/signup">
            <MainButton color="main">Sign Up</MainButton>
          </Link>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={2}
        style={{ backgroundColor: "#ff6d6d" }}
      />

      <ParallaxLayer
        offset={1}
        speed={0.5}
        
      >
        <PopularGames />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;
