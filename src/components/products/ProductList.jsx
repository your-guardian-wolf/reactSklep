import ProductCard from "./ProductCard";
import styles from "../../styles/ProductList.module.css";
import { useState, useMemo } from "react";
import ProductDetails from "./ProductDetails";
import useProducts from "../../hooks/useProducts";

const ProductList = () => {
	const [sortState, setSortState] = useState("none");
	const { data, error, isLoading } = useProducts ();

	const sortedProducts = useMemo(() => {
		if (!data) return [];

		const listCopy = [...data];

		switch (sortState) {
			case "price_asc":
				return listCopy.sort((a, b) => a.price - b.price);
			case "price_desc":
				return listCopy.sort((a, b) => b.price - a.price);
			default:
				return listCopy;
		}
	}, [data, sortState]);

	if (isLoading) {
		return <p>Trwa ładowanie</p>;
	}
	if (error) {
		return <p>Wystąpił błąd</p>;
	}

	return (
		<div className="flex flex-wrap flex-row space-between">
			<select
				value={sortState}
				onChange={(e) => {
					setSortState(e.target.value);
				}}
				className="mb-4 p-2 border rotued "
			>
				<option value="none">sortuj według ceny</option>
				<option value="price_asc">rosnąco</option>
				<option value="price_desc">malejąco</option>
			</select>

			<div className={styles.container}>
				{sortedProducts?.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onClick={() => setSelectedProduct(product)}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductList;
