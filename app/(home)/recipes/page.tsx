import NewestRecipes from "@/components/NewestRecipes";
import React from "react";

const Recipes = () => {
  return (
    <section className="max-w-7xl xl:mx-auto mx-8 my-8 flex h-full flex-col justify-center items-center">
      <NewestRecipes />
    </section>
  );
};

export default Recipes;
