import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import type { Products } from "../Types/Shop.types";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
type ProductsProps = {
  product: Products;
  addProduct: (id: number) => void;
};
const Productss = ({ addProduct, product }: ProductsProps) => {
  const navigate = useNavigate();

  const HandleAddProduct = () => {
    addProduct(product.id);
    Swal.fire({
      title: "محصول شما به سبد خرید اضافه شد",
      icon: "success",
      showCancelButton: true,
      cancelButtonColor: "rgba(77, 82, 74, 1)",
      cancelButtonText: "ادامه",
      confirmButtonText: "رفتن به سبد خرید",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      }
    });
  };
  return (
    <div
      key={product.id}
      style={{
        border: "1px solid #dee2e6",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "4px",
          marginBottom: "1rem",
        }}
      />
      <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>
        {product.title}
      </h3>
      <p
        style={{
          margin: "0 0 1rem 0",
          color: "#6c757d",
          fontSize: "0.9rem",
        }}
      >
        {product.description.length > 100
          ? product.description.substring(0, 100) + "..."
          : product.description}
      </p>
      <div>
        {Array(Math.ceil(product.rating.rate))
          .fill(0)
          .map((_, i) => (
            <AiFillStar key={i} style={{ color: "orange" }} />
          ))}
        {Array(5 - Math.ceil(product.rating.rate))
          .fill(0)
          .map((_, i) => (
            <AiOutlineStar key={i} style={{ color: "orange" }} />
          ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#28a745",
          }}
        >
          {product.price} تومان
        </span>
        <button
          onClick={HandleAddProduct}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          افزودن به سبد
        </button>
      </div>
    </div>
  );
};

export default Productss;
