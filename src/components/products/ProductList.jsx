import ProductCard from "./ProductCard";
import styles from "../../styles/ProductList.module.css";
import useSWR from "swr";
import { fetcher } from "../../utils/fetch";
import { useState } from "react";
import ProductDetails  from "./ProductDetails";

const ProductList = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
	const { data, error, isLoading } = useSWR(
		"http://fakestoreapi.com/products",
		fetcher
	);

	// const [products, setProducts] = useState ([])

	// useEffect (() => {
	//     fetch("http://fakestoreapi.com/products")
	//     .then((res) => res.json ())
	//     .then((productsRes)=>setProducts(productsRes))
	// },[])

	if (isLoading) {
		return <p>Trwa ładowanie</p>;
	}
	if (error) {
		return <p>Wystąpił błąd</p>;
	}

	return (<div className="flex flex-row space-between">
		<div className={styles.container}>
			{data.map((product) => (
				<ProductCard key={product.id} product={product} onClick={()=>setSelectedProduct(product)} />
			))}
		</div>
        <ProductDetails selectedProduct={selectedProduct}/>
        </div>
	);
};

export default ProductList;
