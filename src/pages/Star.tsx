import React from "react";
import { Link, Route, useParams } from "react-router-dom";
import { Noti } from ".";

const Posts = () => {
  const match = useParams();
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        <li>
          <Link to={`${match.url}/1`}>Post #1</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>Post #2</Link>
        </li>
        <li>
          <Link to={`${match.url}/3`}>Post #3</Link>
        </li>
        <li>
          <Link to={`${match.url}/4`}>Post #4</Link>
        </li>
      </ul>
      {/* <Route path={match.url} render={() => <h3>Please select any post</h3>} /> */}
      <Route path={`${match.url}/:id`} element={Noti} />
    </div>
  );
};

export default Posts;
