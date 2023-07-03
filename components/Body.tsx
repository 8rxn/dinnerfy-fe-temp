"use client";
import React, { FC, useState } from "react";
import Form from "./Form";
import Results from "./Results";
import Wrapper from "./ui/Wrapper";
import Loading from "./ui/Loading";

interface Props {}

const Body: FC<Props> = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<{
    RecipeID: number;
    Name: string;
    Recipe_Meta: object;
    Interest_Tags: object;
    Diet_Tags: string[];
    Cooking_Meta: object;
    SServe_1?: object;
    Serve_2?: object;
    Serve_3?: object;
    Serve_4?: object;
    Serve_5?: object;
    Serve_6?: object;
  } | null>(null);
  return (
    <Wrapper styles="text-md pt-20 ">
      {loading ? (
        <Loading/>
      ) : !!response?.Name ? (
        <Results response={response} setResponse={setResponse} />
      ) : (
        <>
          <Form setLoading={setLoading} setResponse={setResponse} />
        </>
      )}
    </Wrapper>
  );
};

export default Body;
