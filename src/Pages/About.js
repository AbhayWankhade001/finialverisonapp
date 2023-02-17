import React from "react";
import { Link } from "react-router-dom";
import Vp from "../Component/vp";

function About() {
  return <div>
  
  <Vp></Vp>
  <Link to="/MainoPage">
  <button type="submit" className="btn btn-primary">
              Send
            </button></Link>
  </div>;
}

export default About;