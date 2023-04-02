import React from "react";
import Svg from "../Svg";

const Menu = (props) => {
  return (
    <Svg viewBox="0 0 18 20" {...props}>
      <path d="M18 17.9857C18 18.2547 17.8946 18.5127 17.7071 18.7029C17.5196 18.8931 17.2652 19 17 19H1C0.734784 19 0.48043 18.8931 0.292893 18.7029C0.105357 18.5127 2.4071e-07 18.2547 2.4071e-07 17.9857V7.32576C-0.000105484 7.1712 0.0346172 7.01865 0.101516 6.87978C0.168415 6.74091 0.26572 6.61939 0.386 6.52448L8.386 0.2137C8.56154 0.0751972 8.7776 0 9 0C9.2224 0 9.43846 0.0751972 9.614 0.2137L17.614 6.52448C17.7343 6.61939 17.8316 6.74091 17.8985 6.87978C17.9654 7.01865 18.0001 7.1712 18 7.32576V17.9857ZM16 16.9715V7.82072L9 2.29904L2 7.82072V16.9715H16Z" />
    </Svg>
  );
};

export default Menu;
