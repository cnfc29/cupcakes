export type CupcakesType = {
  id: number;
  title: string;
  description: string;
  img: string;
  price: string;
};

export type InitialStateType = {
  cupcakes: CupcakesType[];
};
