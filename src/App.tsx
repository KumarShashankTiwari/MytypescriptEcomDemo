import { useState } from "react";
import { useQuery } from "react-query";
import { Drawer } from "@material-ui/core";

import { LinearProgress } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import Item from "./Item/Item";
//styles
import { Wrapper } from "./App.styles";
// Types
export type CartItemType = {
  id: number;
  category: String;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  console.table(data);

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something Went</div>;

  return (
 <div> <Wrapper>
    <Grid container spacing={3}>
      {data?.map((item) => (
        <Grid item key={item.id} xs={12} sm={4}>
          <Item item={item} handleAddToCart={handleAddToCart} />
        </Grid>
      ))}
    </Grid>
  </Wrapper></div>);
};

export default App;
