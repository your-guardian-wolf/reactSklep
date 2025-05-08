import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleCartAction = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="flex flex-col items-center cursor-pointer border p-4">
      <Link to={`/products/${product.id}`} className="text-center">
        <p className="text-xl">{product.title}</p>
        <img src={product.image} width="100" alt={product.title} />
        <p>{product.price.toFixed(2)} zł</p>
      </Link>
      <button
        onClick={handleCartAction}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
      >
        {isInCart ? "Usuń z koszyka" : "Dodaj do koszyka"}
      </button>
    </div>
  );
};

export default ProductCard;