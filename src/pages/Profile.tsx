import React from "react";
import queryString from "query-string";
import { useLocation, useParams } from "react-router-dom";

const About = () => {
  const { search } = useLocation();
  const { name } = useParams();
  const query = queryString.parse(search);
  const detail = query.detail === "true";
  return (
    <div>
      <h2>About {name}</h2>
      {detail && "detail:blahblah"}
    </div>
  );
};

export default About;
