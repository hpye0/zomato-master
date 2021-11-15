import React from "react";
import FoodTab from "../Components/FoodTab";

import Navbar from "../Components/Navbar";
// import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
  return (
    <>
      <div className="container  ">
        <Navbar />

        {props.children}
      </div>
      <FoodTab />
    </>
  );
};

export default HomeLayout;
