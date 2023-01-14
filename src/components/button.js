import React from "react";
import { Link } from "react-router-dom";
import "./hom.scss";
const button = () => {
  return (
    <>
      <div className="button pl-32">
        <Link to="/landing">
          <button className="svg-example text-3xl">
            GET STARTED
            <svg id="right">
              <path
                d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </>
  );
};

export default button;
