import ProductCard from "./ProductCard";
import styles from "../../styles/ProductList.module.css";
import { useState, useMemo } from "react";
import useProducts from "../../hooks/useProducts";
import useDebounce from "../../hooks/useDebounce"

const ProductList = () => {
	const [sortState, setSortState] = useState("none");
	const { data, error, isLoading } = useProducts();
	const [priceMin, setPriceMin] = useState("0");
	const [priceMax, setPriceMax] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");
	const debouncedSearchTerm = useDebounce(searchTerm);
	const [selectedCategory, setSelectedCategory] = useState("all");

	const filteredAndSortedProducts = useMemo(() => {
		if (!data) return [];

		const filteredProducts = data.filter((product) => {
			return (
				(product.price >= priceMin || !priceMin) &&
				(product.price <= priceMax || !priceMax) &&
				(selectedCategory === "all" || product.category === selectedCategory) &&
				(!searchTerm ||
					product?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
					product?.description
						?.toLowerCase()
						.includes(searchTerm.toLowerCase()))
			);
		});

		const listCopy = [...filteredProducts];

		switch (sortState) {
			case "price_asc":
				return listCopy.sort((a, b) => a.price - b.price);
			case "price_desc":
				return listCopy.sort((a, b) => b.price - a.price);
			default:
				return listCopy;
		}
	}, [data, sortState, priceMin, priceMax, selectedCategory, searchTerm]);

	const categoryOptions = useMemo(() => {
		if (!data) return [];

		const uniqueCategories = [];

		for (const product of data) {
			if (!uniqueCategories.includes(product.category)) {
				uniqueCategories.push(product.category);
			}
		}

		return ["all", ...uniqueCategories];
	}, [data]);

	console.log(categoryOptions);

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

			<input
				type="text"
				placeholder="Szukaj produktu..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				className="p-2 border rounded-md"
			/>

			<select
				value={selectedCategory}
				onChange={(e) => {
					setSelectedCategory(e.target.value);
				}}
				className="mb-4 p-2 border rounded"
			>
				{categoryOptions.map((category) => (
					<option key={category} value={category}>
						{category === "all" ? "Wszystkie kategorie" : category}
					</option>
				))}
			</select>

			<div className="flex">
				<label className="flex flex-col items-center" min-width="200px">
					Cena od:
				</label>
				<input
					type="number"
					min="0"
					value={priceMin}
					onChange={(e) => setPriceMin(e.target.value)}
					className="p-2 border rounded-md w-full"
				></input>
			</div>
			<div className="flex">
				<label className="flex flex-col items-center">Cena do:</label>
				<input
					type="number"
					min="0"
					value={priceMax}
					onChange={(e) => setPriceMax(e.target.value)}
					className="p-2 border rounded-md w-full"
				></input>
			</div>

			<div className={styles.container}>
				{filteredAndSortedProducts?.map((product) => (
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
