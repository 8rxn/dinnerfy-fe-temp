"use client";
import React, { FC, useState } from "react";
import Form from "./Form";
import Results from "./Results";
import Wrapper from "./ui/Wrapper";
import Loading from "./ui/Loading";
import { responseData } from "@/types";

interface Props {}

const Body: FC<Props> = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<responseData>(null);
  return (
    <Wrapper styles="text-md pt-20 ">
      {loading ? (
        <Loading/>
      ) : !!response?.Name ? (
        <Results response={response} setResponse={setResponse} setLoading={setLoading} />
      ) : (
        <>
          <Form setLoading={setLoading} setResponse={setResponse} />
        </>
      )}
    </Wrapper>
  );
};

export default Body;
