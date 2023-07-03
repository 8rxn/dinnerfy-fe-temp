import { Response } from "@/types";
import React, { FC } from "react";

const Results: FC<Response> = ({ response, setResponse, setLoading }) => {
  return (
    <div className="flex flex-col items-center w-full gap-2 px-2 text-primary">
      <div className="flex justify-between items-center w-full sm:gap-14 gap-6 max-[300px]:gap-2">
        <h1 className="primary font-extrabold sm:text-5xl text-3xl break-words text-left  max-w-[60%] max-[300px]:text-2xl ">
          {response?.Name } <span className="text-xl sm:text-3xl">{`#${response?.RecipeID}`}</span>
        </h1>
        {/* Refresh Button for getting  new Recipe */}
        <button
          className="text-xl max-[300px]:text-sm bg-primary-light text-white fill-white sm:px-6 p-3 rounded-xl hover:scale-105 transition-transform "
          onClick={() => {
            setLoading(true);
            setResponse(null);
            setLoading(false);
          }}
        >
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

      <div className="w-full flex gap-4 sm:text-lg text-sm max-[300px]:flex-col max-[300px]:gap-1 max-[300px]:mt-2 items-start ">
        <h3 className="font-semibold break-keep">AKA:</h3>
        {response?.Recipe_Meta.Aliases.map((item) => (
          <p key={item}>{item}</p>
        ))}
        <p className="ml-4">
          <span className="font-semibold">
            {response?.Recipe_Meta.rating.noOfReviews}{" "}
          </span>{" "}
          Reviews{" - "}
          <span className="font-semibold">
            {response?.Recipe_Meta?.rating?.starRating}
          </span>{" "}
          &#11088;{" "}
        </p>
      </div>

      <div className="w-full flex gap-4 sm:text-lg text-sm flex-wrap max-[300px]:gap-1 max-[300px]:mt-2 items-start underline underline-offset-8 ">
        {response?.Interest_Tags.tags.map((item) => (
          <p key={item}>{item}</p>
        ))}
        {response?.Diet_Tags.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div className=" mt-6 mb-4">
        <h3 className=" text-start font-medium sm:text-2xl text-sm break-words max-w-[90%] max-[300px]:text-2xl ">
          {response?.Recipe_Meta.description}
        </h3>
      </div>

      <div className="flex text-start items-start w-full justify-start  sm:text-lg text-sm ">
        <h3 className="">Nutritional Details: </h3>
        <div className="w-full flex gap-4 flex-wrap max-[300px]:gap-1 font-semibold gap-y-0">
          {response?.Recipe_Meta.nutritionFact.map((item) => (
            <span className=" break-keep max-w-[90%] ">{item}</span>
          ))}
        </div>
      </div>
      <div className="flex text-start items-start w-full justify-start  sm:text-lg text-sm ">
        <h3 className="">Popular In: </h3>
        <div className="w-full flex gap-4 flex-wrap max-[300px]:gap-1 font-semibold gap-y-0">
          {response?.Recipe_Meta.popularRegion.map((item) => (
            <span className=" break-keep max-w-[90%] ">{item}</span>
          ))}
        </div>
      </div>

      <div className="w-full flex gap-1 sm:gap-4 sm:text-lg text-sm flex-col sm:flex-row items-start text-start">
        <p className="">
          Calories :{" "}
          <span className="font-semibold">
            {response?.Recipe_Meta.calories}
          </span>
        </p>
        <p className="">
          Carbon Footprint :{" "}
          <span className="font-semibold">
            {response?.Recipe_Meta.carbonFootprint}
          </span>
        </p>
        <p className="">
          Source :{" "}
          <span className="font-semibold">
            {response?.Recipe_Meta.informationSource}
          </span>
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default Results;
