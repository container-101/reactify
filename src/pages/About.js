import React, {Component} from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log("Location is : " , location);
    console.log("Match is : ", match);
    console.log("Query is : ", query);
    const detail = query.detail === 'true';
    return(
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail:blahblah'}
        </div>
    );
};

export default About;