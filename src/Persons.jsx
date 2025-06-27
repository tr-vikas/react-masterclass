import React from "react";

function Persons({ peopleList }) {
  return (
    <div>
      {peopleList.map((person) => {
        return (
          <div key={person.name}>
            <h1>Welcome, {person.name}</h1>
            <p>Your age is {person.age} years old</p>
            <p>Your gender is {person.gender}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Persons;
