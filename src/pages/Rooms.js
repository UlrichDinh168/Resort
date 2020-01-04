import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our rooms">
        <Link to="/rooms" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
