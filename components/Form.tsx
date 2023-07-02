"use client";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  RecipeID: number;
  Servings: number;
};

const Form = () => {
  const fetchData = async (data: Inputs) => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      RecipeID: 60,
      Servings: 3,
    });

    let reqOptions = {
      url: "https://dinnerfy-ds-production.up.railway.app/recipe",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    console.log(response.data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => fetchData(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center"
    >
      <input
        placeholder="RecipeID"
        defaultValue="RecipeId"
        {...register("RecipeID", { required: true })}
      />
      {errors.RecipeID && <span>{errors.RecipeID.type}</span>}
      <input
        placeholder="Servings"
        {...register("Servings", { required: true })}
      />
      {errors.Servings && <span>This field is required</span>}
      <button type="submit" className="mt-4">
        Submit
      </button>
    </form>
  );
};

export default Form;
