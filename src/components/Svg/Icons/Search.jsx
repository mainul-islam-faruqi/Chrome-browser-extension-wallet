import React from "react";
import Svg from "../Svg";

const Search = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.08366 1.66675C4.53983 1.66675 1.66699 4.53959 1.66699 8.08341C1.66699 11.6272 4.53983 14.5001 8.08366 14.5001C9.64553 14.5001 11.0771 13.942 12.1898 13.0145L16.8378 17.6626C17.0657 17.8904 17.435 17.8904 17.6628 17.6626C17.8906 17.4348 17.8906 17.0654 17.6628 16.8376L13.0147 12.1895C13.9423 11.0768 14.5003 9.64529 14.5003 8.08341C14.5003 4.53959 11.6275 1.66675 8.08366 1.66675ZM2.83366 8.08341C2.83366 5.18392 5.18416 2.83341 8.08366 2.83341C10.9832 2.83341 13.3337 5.18392 13.3337 8.08341C13.3337 10.9829 10.9832 13.3334 8.08366 13.3334C5.18416 13.3334 2.83366 10.9829 2.83366 8.08341Z"
        fill="#6871EA"
      />
    </Svg>
  );
};

export default Search;
