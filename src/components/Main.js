import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import mainImage from "../assets/main-image.svg";
const Main = ({ fetchData, handleChange, search, data }) => {
  return (
    <>
      <div className="navbar">
        <Box
          sx={{
            width: "100vw",
            height: "3rem",
            backgroundColor: "#058C42",
            fontFamily: "georgia",
            fontSize: "2rem",
            pl: "3.5rem",
            zIndex: 99,
            position: "absolute",
            top: "0",
            boxShadow: "1px 1px 5px 1px black",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2 className="text-white">Nutrio</h2>
          <div>
            <Link to="/">
              <HomeIcon className="mr-4  text-white text-3xl" />
            </Link>
          </div>
        </Box>
      </div>
      <div className="front-container">
        <div className="sub-front-container1">
          <h1>Nourish your body, fuel your soul</h1>
          <p
            style={{
              fontWeight: "200",
              maxWidth: "20rem",
              fontSize: "1.2rem",
              color: "#2F4858",
              marginTop: "1.2rem",
            }}
          >
            Elevate your taste buds and your health with every bite
          </p>

          <form>
            <div className="search-place">
              <input
                type="text"
                value={search}
                onChange={handleChange}
                className="search-bar-main"
                placeholder="Search for your favorite Food..."
              />
              <button onClick={fetchData} className="submit-result">
                <Link to="/result">Search</Link>
              </button>
            </div>
          </form>
        </div>
        <div className="sub-front-container2">
          <img src={mainImage} alt="image" className="dining" />
        </div>
      </div>
    </>
  );
};

export default Main;
