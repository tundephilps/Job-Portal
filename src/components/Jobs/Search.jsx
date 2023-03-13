import {
  Close,
  GpsFixedOutlined,
  Home,
  HomeMini,
  HomeOutlined,
  LocationCityOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import React from "react";
import JobCards from "./JobCards";
import Navbar from "../Homepage/Navbar";

// Create a reference to the form element
let formRef = React.createRef();
let inputRef = React.createRef();
// Create a function to reset the form
const resetForm = () => {
  formRef.current.reset();
};
const resetInput = () => {
  inputRef.current.reset();
};

const Search = () => {
  return (
    <>
      <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] mt-[8rem]">
        <form action="" ref={formRef}>
          <div className="firstDiv flex lg:flex-row flex-col w-[40] md:w-[70] lg:w-[100%] justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-7">
            <div className="flex gap-2 items-center">
              <SearchOutlined className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
                placeholder="Search Job Here..."
              />
              <AiOutlineCloseCircle
                className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
                onClick={resetForm}
              />
            </div>

            <div className="flex gap-2 items-center">
              <HomeOutlined className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
                placeholder="Search By Company..."
              />
              <AiOutlineCloseCircle
                className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
                onClick={resetForm}
              />
            </div>

            <div className="flex gap-2 items-center">
              <GpsFixedOutlined className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
                placeholder="Search By Location..."
              />
              <AiOutlineCloseCircle
                className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
                onClick={resetForm}
              />
            </div>

            <button className="bg-blueColor h-full p-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
              Search
            </button>
          </div>
        </form>
        <form
          className="secDiv flex items-center gap-10 justify-center flex-col"
          ref={inputRef}
        >
          <div className="singleSearch flex  items-center gap-2 ">
            <label htmlFor="relevance" className="text-[#808080] font-semibold">
              Date Posted:
            </label>
            <select
              name=""
              id="relevance"
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option value="">Anytime</option>
              <option value="">Last 24 hours </option>

              <option value="">Past Month</option>
              <option value="">Past Week</option>
            </select>
          </div>

          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="relevance" className="text-[#808080] font-semibold">
              Job Type:
            </label>
            <select
              name=""
              id="relevance"
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option value="">Full Time</option>
              <option value="">Part Time </option>
              <option value="">Contract</option>
              <option value="">Internship</option>
            </select>
          </div>

          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="relevance" className="text-[#808080] font-semibold">
              Location:
            </label>
            <select
              name=""
              id="relevance"
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option value="">Remote</option>
              <option value="">Onsite </option>
              <option value="">Hybrid</option>
            </select>
          </div>
          <span className="text-[#a1a1a1] cursor-pointer" onClick={resetInput}>
            Clear All
          </span>
        </form>
      </div>
    </>
  );
};

export default Search;
