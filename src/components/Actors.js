import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <div>
        {actors.map((actor, index) => {
          return (
            <div key={index}>
              <h3>Name: {actor.name}</h3>
              <p>Movies:</p>
              <ul>
                {actor.movies.map((movie, index) => (
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

export default Actors;
