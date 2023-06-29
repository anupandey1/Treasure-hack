import React from "react";
import { Link } from "react-router-dom";
import mainImage from "../assets/main-image.svg";
import Navbar from "./navbar";
const Main = ({ fetchData, handleChange, search, data }) => {
  return (
    <>
      <div className="height-fix">
        <Navbar />
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
      </div>
    </>
  );
};

export default Main;
