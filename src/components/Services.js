import React, { Component } from "react";
import Title from "../components/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }
    ]
  };
  render() {
    return (
      
        <section className='services'>
          <Title title="Services" />
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="services">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </div>
        </section>
    
    );
  }
}
