import { useParams } from "react-router-dom";
import ProductDetails from "../components/products/ProductDetails";

function ProductDetailsPage() {
  const { id } = useParams();

  return (
    <>
      <ProductDetails id={id} />
    </>
  );
}

export default ProductDetailsPage;