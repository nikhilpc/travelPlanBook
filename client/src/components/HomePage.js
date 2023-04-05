import image from "../images/BannerImage.png";
import styledComponents from "styled-components";
const HomePage = () => {
  return (
    <SearchDiv>
      <BannerImage src={image} alt="logo" />
      <Form>
        <label htmlFor="search">Enter country name:</label>
        <input type="text" placeholder="Search" />
      </Form>
    </SearchDiv>
  );
};
const BannerImage = styledComponents.img`
    width: 30%;
    height: 30%;
    left: 35vw;
    top: 5vh;
    position: relative;
    padding: 70px 0 40px;
    `;
const SearchDiv = styledComponents.div`
    display: flex;
    flex-direction: column;
    position: relative;`;

const Form = styledComponents.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
   `;
export default HomePage;
