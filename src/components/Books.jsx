import React from "react";
import desserts from "../Assets/Images/img_desserts.jpg";
import greens from "../Assets/Images/img_GreensCookbook.jpg";
import kitchen from "../Assets/Images/img_in_my_kitchen.jpg";
import local from "../Assets/Images/img_local_flavors.jpg";
import veggie from "../Assets/Images/img_new_vegetarian_cooking.jpg";
import onion from "../Assets/Images/img_onion_in_my_pocket.jpg";
import savory from "../Assets/Images/img_savory_way.jpg";
import squash from "../Assets/Images/img_squash_soups.jpg";
import vegSup from "../Assets/Images/img_vegetarian_suppers.jpg";
import whatEat from "../Assets/Images/img_what_we_eat.jpg";
import vegSoup from "../Assets/Images/img_vegetable_soups.jpg";
import vegLit from "../Assets/Images/img_vegetable_literacy-1.jpg";

const Books = () => {
  return (
    <div
      name="books"
      className="w-full h-full bg-[#E0DDCF] text-white scroll-smooth"
    >
      {/*Container */}
      <div className="max-w-[1240px] mx-auto py-10 flex flex-col justify-center items-center w-full h-full">
        <div className="text-2xl font-medium text-center bg-[#Fff] text-black w-full shadow-xl">
          <p>Books</p>
        </div>

        <div className="w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 pb-2 cursor-pointer">
          <div className=" shadow-md w-44 hover:scale-110 duration-300 rounded-xl bg-white flex justify-center items-center p-3 ">
            <img
              src={desserts}
              alt=""
              className="mx-auto w-[150px] rounded-2xl"
            />
          </div>
          <div className=" shadow-md w-44 hover:scale-110 duration-300 rounded-xl bg-white flex justify-center items-center p-3  cursor-pointer">
            <img
              src={greens}
              alt=""
              className="mx-auto w-[150px] rounded-2xl"
            />
          </div>
          <div className=" shadow-md w-44 hover:scale-110 duration-300 rounded-xl bg-white flex justify-center items-center p-3">
            <img
              src={kitchen}
              alt=""
              className="mx-auto w-[150px] rounded-2xl"
            />
          </div>
          <div className=" shadow-md w-44 hover:scale-110 duration-300 rounded-xl bg-white flex justify-center items-center p-3">
            <img src={local} alt="" className="mx-auto w-[150px] rounded-2xl" />
          </div>
          <div className=" shadow-md w-44 hover:scale-110 duration-300 rounded-xl bg-white flex justify-center items-center">
            <img
              src={veggie}
              alt=""
              className="mx-auto w-[150px] rounded-2xl"
            />
          </div>
          <div className=" shadow-md w-44 hover:scale-110 duration-300 rounded-xl bg-white flex justify-center items-center p-3">
            <img src={onion} alt="" className="mx-auto w-[150px] rounded-2xl" />
          </div>
          <div className=" shadow-md w-44 hover:scale-110 duration-300 rounded-xl bg-white flex justify-center items-center p-3">
            <img
              src={savory}
              alt=""
              className="mx-auto w-[150px] rounded-2xl"
            />
          </div>
          <div className=" shadow-md w-44 hover:scale-110 duration-300 rounded-xl bg-white flex justify-center items-center p-3">
            <img
              src={squash}
              alt=""
              className="mx-auto w-[150px] rounded-2xl"
            />
          </div>
          <div className=" shadow-md w-44 hover:scale-110 duration-300 rounded-xl bg-white flex justify-center items-center p-3">
            <img
              src={vegSup}
              alt=""
              className="mx-auto w-[150px] rounded-2xl"
            />
          </div>
          <div className=" shadow-md w-44 hover:scale-110 duration-300 rounded-xl bg-white flex justify-center items-center p-3">
            <img
              src={whatEat}
              alt=""
              className="mx-auto w-[150px] rounded-2xl"
            />
          </div>
          <div className=" shadow-md w-44 hover:scale-110 duration-300 rounded-xl bg-white flex justify-center items-center p-3">
            <img
              src={vegSoup}
              alt=""
              className="mx-auto w-[150px] rounded-2xl"
            />
          </div>
          <div className=" shadow-md w-44 hover:scale-110 duration-300 rounded-xl bg-white flex justify-center items-center p-3">
            <img
              src={vegLit}
              alt=""
              className="mx-auto w-[150px] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
