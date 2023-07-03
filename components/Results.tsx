import { Response } from "@/types";
import React, { FC } from "react";

const Results: FC<Response> = ({ response, setResponse,setLoading }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between items-center w-full px-2 sm:gap-14 gap-6 max-[300px]:gap-2">
        <h1 className="text-primary font-extrabold sm:text-5xl text-3xl break-words text-left  max-w-[60%] max-[300px]:text-2xl ">
          {response?.Name}
        </h1>
        {/* Refresh Button for getting  new Recipe */}
        <button className="text-xl max-[300px]:text-sm bg-primary-light text-white fill-white sm:px-6 p-3 rounded-xl hover:scale-105 transition-transform " onClick={()=>{setLoading(true);setResponse(null);setLoading(false)}}>
          <span className="md:block hidden">Get Another Recipe</span>
          <span className="md:hidden block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M479.522-142.043q-140.718 0-239.076-98.74-98.359-98.739-98.359-238.397 0-139.659 98.359-239.337 98.358-99.679 239.455-99.679 84.886 0 151.022 34.912 66.135 34.912 116.186 94.958v-129.87h72.043v281.957H536.957v-71.804H711.13q-40-59.522-97.119-95.044-57.118-35.522-134.489-35.522-109.375 0-184.753 75.103-75.378 75.103-75.378 184.107 0 109.805 75.372 184.928 75.371 75.123 184.818 75.123 81.52 0 150.176-46.782 68.656-46.783 96.895-125.348h79.544Q775.957-280 685.037-211.022q-90.92 68.979-205.515 68.979Z" />
            </svg>
          </span>
        </button>

      </div>
       <div className="px-2 mt-8">
       <h2 className="text-primary text-start font-medium sm:text-2xl text-sm break-words max-w-[90%] max-[300px]:text-2xl ">
        {response?.Recipe_Meta.description}
        </h2>
       </div>
       <div className="grid grid-cols-2">
        <div className="col-span-1">
        Also Known As
        </div>
        <div className="col-span-1 flex gap-2">
        {response?.Recipe_Meta.Aliases.map((item)=>(<p key={item}>{item}</p>))}
        </div>
        
       </div>
    </div>
  );
};

export default Results;
