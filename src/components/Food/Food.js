import React from "react";
import classes from "./Food.module.css";
import Card from "../UI/Card";
import FoodCard from "./FoodCard";
import data from "../../data/food";

const Food = () => {
  const items = data.map((item) => (
    <FoodCard
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      photo={item.photo}
    />
  ));

  return (
    <section className={classes.food}>
      <Card>
        <ul>{items}</ul>
      </Card>
    </section>
  );
};

export default Food;
