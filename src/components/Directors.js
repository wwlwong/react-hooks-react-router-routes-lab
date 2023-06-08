import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    <div>
      {directors.map((director, index) => {
        return (
          <div key={index}>
            <h3>Name: {director.name}</h3>
            <p>Movies:</p>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        )
      }
      )}
    </div>
  </div>
  );
}

export default Directors;
