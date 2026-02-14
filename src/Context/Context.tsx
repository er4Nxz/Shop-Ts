import {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
import type { CartContextType, Products } from "../Types/Shop.types";
import UseFetch from "../Hook/UseFetch";
export const Context = createContext({} as CartContextType);

const ShopContext: FC<PropsWithChildren> = ({ children }) => {
  const [UserCart, setUserCart] = useState<Products[]>([]);
  const { data: shop } = UseFetch("https://fakestoreapi.com/products");

  const addProduct = (id: number) => {
    setUserCart((prev) => {
      const mainProductInCart = prev.find((item) => item.id === id);
      if (mainProductInCart) {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      } else {
        const mainProductInShop = shop.find(
          (item) => item.id === id,
        ) as Products;
        return [...prev, { ...mainProductInShop, count: 1 }];
      }
    });
  };

  const removeProduct = (id: number) => {
    setUserCart(
      (prev) =>
        prev
          .map((item) => {
            if (item.id === id) {
              if (item.count > 1) {
                return { ...item, count: item.count - 1 };
              } else {
                return null;
              }
            }
            return item;
          })
          .filter((item) => item !== null) as Products[],
    );
  };

  const removeAll = () => {
    setUserCart([]);
  };
  return (
    <Context.Provider
      value={{
        addProduct,
        removeAll,
        removeProduct,
        shop,
        UserCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ShopContext;
