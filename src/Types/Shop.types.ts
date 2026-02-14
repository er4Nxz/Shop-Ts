export type CartContextType = {
  shop: Products[];
  UserCart: Products[];
  removeAll: () => void;
  removeProduct: (id: number) => void;
  addProduct: (id: number) => void;
};
export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  count: number;
};
