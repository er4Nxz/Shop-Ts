import { useContext } from "react";
import { Context } from "../Context/Context";
import type { Products } from "../Types/Shop.types";

const Cart = () => {
  const { UserCart, removeProduct, removeAll, addProduct } =
    useContext(Context);

  const totalPrice = UserCart.reduce(
    (sum, item) => sum + item.price * item.count,
    0,
  );

  if (UserCart.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2 style={{ marginTop: "100px" }}>سبد خرید خالی است</h2>
        <p>هیچ محصولی در سبد خرید شما وجود ندارد.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0px auto" }}>
      <h1 style={{ marginTop: "100px" }}>سبد خرید</h1>
      <div style={{ marginBottom: "2rem" }}>
        {UserCart.map((item: Products) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #dee2e6",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
              backgroundColor: "#f8f9fa",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <div style={{ flex: 1, marginLeft: "1rem" }}>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>{item.title}</h3>
              <p style={{ margin: "0", color: "#6c757d" }}>
                قیمت: {item.price} تومان
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={() => removeProduct(item.id)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "0.5rem",
                  cursor: "pointer",
                  marginRight: "0.5rem",
                }}
              >
                -
              </button>
              <span style={{ margin: "0 1rem", fontSize: "1.2rem" }}>
                {item.count}
              </span>
              <button
                onClick={() => addProduct(item.id)}
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "0.5rem",
                  cursor: "pointer",
                  marginLeft: "0.5rem",
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          textAlign: "right",
          borderTop: "1px solid #dee2e6",
          paddingTop: "1rem",
        }}
      >
        <h3>مجموع قیمت: {totalPrice.toFixed(2)} تومان</h3>
        <button
          onClick={removeAll}
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "0.75rem 1.5rem",
            cursor: "pointer",
            fontSize: "1rem",
            marginTop: "1rem",
          }}
        >
          پاک کردن سبد خرید
        </button>
      </div>
    </div>
  );
};

export default Cart;
