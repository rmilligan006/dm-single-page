import React from "react";
import aboutpic from "../Assets/Images/imgMyGarden.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#fff] scroll-smooth">
      <div className=" w-screen md:h-screen sm:w-full flex items-center justify-start">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-1">
          <div className="col-span-2">
            <img src={aboutpic} alt="" className="pt-28" />
            <p className="text-xs font-thin ml-5 w-[300px]">
              Photo by Christopher Hirsheimer
            </p>
          </div>
          <div className="max-w-[1240px] w-full flex justify-center items-center">
            <p className="text-sm  font-light py-12 m-2 tracking-normal h-[355px]">
              Deborah Madison is the award-winning author of fourteen cookbooks,
              including The New Vegetarian Cooking for Everyone and Vegetable
              Literacy. Her books have received four lames Beard Foundation Book
              Awards and five awards from the IACP; she was inducted into the
              James Beard Foundation Cookbook Hall of Fame in 2016 and the Who's
              Who of Food and Beverage in 2005. She lives in New Mexico. Thanks
              to her beloved cookbooks and groundbreaking work as the chef at
              Greens Restaurant in San Francisco, Deborah Madison, though not a
              vegetarian herself, has long been revered as this country's
              leading authority on vegetables. She profoundly changed the way
              generations of Americans think about cooking with vegetables,
              helping to transform "vegetarian" from : dirty word into a
              mainstream way of eating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
