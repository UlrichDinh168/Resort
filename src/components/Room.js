import React from "react";
// import Hero from '../components/Hero'
// import Banner from '../components/Banner'
import { Link } from "react-router-dom";
import defaultImg from "../images/room-6.jpeg";
import PropTypes from "prop-types";
// import { memo } from "react";

const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  // console.log(room);
  return (
    <article className="room">
      <div className="img-container">
        {/* import defaultImg from "../images/room-1.jpeg"; */}
        {/* render the images[0] but if there somehow aren't any images,
        show default image */}
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;
