"use client";

import Results from "@/components/Results";
import { responseData } from "@/types";
import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";

type Props = {
  params: {
    recipeId: string;
    serving: string;
  };
};
type Inputs = {
  RecipeID: number;
  Servings: number;
};


const Recipe = (props: Props) => {

const [response, setResponse] = useState<responseData>(null);

useEffect(() => {
  const fetchData = async (data: Inputs) => {
    let reqOptions = {
      url: "/api/recipes",
      method: "POST",
      data: data,
    };
    const response = await axios.request(reqOptions);
    setResponse(await response.data);
    console.log(response);
  };

  fetchData({RecipeID: Number(props.params.recipeId), Servings: Number(props.params.serving)});
}, []);
  return (
    <Results
          response={response}
          servings={Number(props.params.serving)} setLoading={()=>{console.log("avoiding setState")}}    ></Results>
  );
};

export default Recipe;
