import React from "react";
import soups from "../Assets/Images/soups.jpg";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Calendar = () => {
  return (
    <div name="calendar" className="w-full h-full bg-[#857B6A] text-white scroll-smooth">
      {/*Container */}
      <div className="max-w-[1240px] mx-auto py-10 flex flex-col justify-center items-center w-full h-full">
        <div className="text-2xl font-medium text-center bg-[#FDFBF5] text-black w-full shadow-xl">
          <p className="font-normal text-md">Events Calendar</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className=" grid grid-cols-3 gap-8 pb-2 cursor-pointer">
          <div className="col-span-3">
            <div className=" flex flex-row justify-center items-center w-[350px]">
              <div className="">
                <p className="text-5xl font-semibold text-end">17</p>
              </div>
              <div className="px-2 font-bold text-center">
                <p>MARCH</p>
                <p>2022</p>
              </div>
              <div>
                <p className=" text-sm font-light tracking-tighter ">
                  Organic Farming Conference, Grain Presentation Join Deborah as
                  she shares her wealth of knowledge on heirloom grain
                  varietals.
                </p>
              </div>
              <MdOutlineArrowForwardIos size={30} />
            </div>
            <div className=" flex flex-row justify-center items-center py-4 w-[350px]">
              <div>
                <p className="text-5xl font-semibold text-end">12</p>
              </div>
              <div className="px-3 font-bold text-center">
                <p>APRIL</p>
                <p>2022</p>
              </div>
              <div>
                <p className=" text-sm font-light tracking-tighter ">
                  NM Writer's Dinner (Rising Writer Networker- experienced
                  writers with new writers) Guest speaker: Deborah Madison
                </p>
              </div>
              <MdOutlineArrowForwardIos size={30} />
            </div>
            <div className=" flex flex-row justify-center items-center py-4 w-[350px]">
              <div>
                <p className="text-5xl font-semibold text-end">30</p>
              </div>
              <div className="px-2 font-bold text-center">
                <p>June</p>
                <p>2022</p>
              </div>
              <div>
                <p className=" text-sm font-light tracking-tighter ">
                  Deborah judges the competition at Green Chile Cheeseburger
                  Smackdown for the 5th year in a row held in Santa Fe, NM.
                </p>
              </div>
              <MdOutlineArrowForwardIos size={30} />
            </div>
            <div className=" flex flex-row justify-center items-center py-4 w-[350px]">
              <div>
                <p className="text-5xl font-semibold text-end">4</p>
              </div>
              <div className="px-5 font-bold text-center">
                <p>JULY</p>
                <p>2022</p>
              </div>
              <div>
                <p className=" text-sm font-light tracking-tighter ">
                  Food Writer's Lab - Albuguerque. NM. Deborah teaches a
                  cookbook writing workshop with live cooking demo. Tickets
                  available starting May 1, 2022.
                </p>
              </div>
              <MdOutlineArrowForwardIos size={30} />
            </div>
            <div className=" flex flex-row justify-center items-center py-6 w-[350px]">
              <div>
                <p className="text-5xl font-semibold text-end">2</p>
              </div>
              <div className="px-5 font-bold text-center">
                <p>AUG</p>
                <p>2022</p>
              </div>
              <div>
                <p className=" text-sm font-light tracking-tighter ">
                  Book Passage podcast interview with lane Hirshfield. Tune in
                  to listen = KPRP New Mexico
                </p>
              </div>
              <MdOutlineArrowForwardIos size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
