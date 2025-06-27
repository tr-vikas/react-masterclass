import React from "react";
import { findSquare } from "./utils.js";

function Square({ num, name, gender, age }) {
  const square = findSquare(num);

  return (
    <h2>
      Square of number {num} is {square}
      {name ? (
        <>
          for name {name} and age {age} and gender {gender}
        </>
      ) : null}
    </h2>
  );
}

export default Square;

/**
 * MOUNTING - a component is added to the DOM
 * UPDATING - a component is updated in the DOM
 * UNMOUNTING - a component is removed from the DOM
 */
