import React from "react";
import styledComponents from "styled-components";
import cuba from "../assets/cuba.png";
import france from "../assets/france.png";
import japan from "../assets/japan.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Destinations = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/search";
    navigate(path);
  };
  // const [name, setName] = React.useState("Cuba");

  // const routeChangeCountry = () => {
  //   let path = `/blog/${name}`;
  //   navigate(path);
  // };


  const data = [
    {
      name: "Cuba",
      image: cuba,
    },
    {
      name: "France",
      image: france,
    },
    {
      name: "Japan",
      image: japan,
    },
  ];
  return (
    <Section id="destination">
      <div className="info">
        <h2>
          Top <span>Destinations</span> In The World
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout from it.
        </p>
        <Button onClick={routeChange}>Discover More</Button>
      </div>

      <div className="destinations">
        {data.map(({ name, image }) => {
          return (
            <div className="destination" key={name}>

              <div className="image">
                <img src={image} alt="destinations" />
                <CountryLink to={`/blog/${name}`}>{name}</CountryLink>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
export default Destinations;
const Button = styledComponents.button`
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  border: none;
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
`;
const CountryLink = styledComponents(Link)`
  text-decoration: none;
  position: absolute;
  left: 6vw;
  bottom: 1vw;
  font-size: 1.5rem;
  color: orange;
  `

const Section = styledComponents.section`
  display: flex;
  gap: 5rem;
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;
    h2 {
      font-size: 3rem;
      line-height: 3rem;
      span {
        color: var(--primary-color);
      }
    }
    p {
      color: var(--secondary-text);
    }
  }
  .destinations {
    flex: 2;
    display: flex;
    gap: 2rem;
    .destination {
      position: relative;
      img {
        height: 20rem;
      }
      .name {
        position: absolute;
        bottom: 0rem;
        height: 100%;
        width: 100%;
        background: linear-gradient(
          to bottom,
          #ffffff14,
          #000000ae
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        display: flex;
        flex-direction: column-reverse;
        h3 {
          margin-left: 1rem;
          font-size: 1.5rem;
          color: white;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0rem 2rem;
    flex-direction: column;
    gap: 3rem;
    .destinations {
      flex-direction: column;
      .destination {
        img {
          width: 100%;
        }
      }
    }
  }
`;
