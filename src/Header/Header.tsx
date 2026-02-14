import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/Context";

const Header = () => {
  const { UserCart } = useContext(Context);

  const totalItems = UserCart.reduce((sum, item) => sum + item.count, 0);

  return (
    <div style={{ position: "fixed", width: "100vw" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #dee2e6",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#007bff",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          فروشگاه
        </Link>
        <nav>
          <Link
            to="/cart"
            style={{
              margin: "0 1rem",
              textDecoration: "none",
              color: "#007bff",
              position: "relative",
            }}
          >
            سبد خرید
            {totalItems > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  borderRadius: "50%",
                  padding: "0.2rem 0.5rem",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              >
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
