import React from "react";
import styledComponents from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const data = [
    {
      image: service1,
      title: "Choose Destination",
      description: "If you want to go to a destination, you can choose from the following options",
    },
    {
      image: service2,
      title: "Explore the Place",
      description: "Explore the place you want to visit",
    },
    {
      image: service3,
      title: "Start Your Journey",
      description: "Start your journey with us",
    },
    {
      image: service4,
      title: "Let's Enjoy",
      description: "Let's enjoy your experience with us",
    },
  ];
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/search";
    navigate(path);
  };
  return (
    <Section id="services">
      <div className="services">
        {data.map(({ image, title, description }) => {
          return (
            <div className="service" key={title}>
              <img onClick={routeChange} src={image} alt="service" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
export default Services;
const Section = styledComponents.section`
  margin: 8rem 4rem;
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .service {
      padding: 1.5rem 2rem;
      text-align: center;
      background-color: var(--card-grey);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      h3 {
        color: var(--primary-text);
      }
      p {
        color: var(--secondary-text);
      }
      img {
        height: 128px;
        width: 128px;
      }
      transition: var(--default-transition);
      &:hover {
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 3rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
