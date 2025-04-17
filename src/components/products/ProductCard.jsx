const ProductCard = ({ product, onClick }) => {
	console.log(product);
	return (
		<div onClick={onClick} className="flex flex-col items-center">
			<p className="text-2xl text-red-500">{product.title}</p>
			<p>{product.price.toFixed(2)} zł</p>
			<p>
				<img src={product.image} width="300px" />
			</p>
		</div>
	);
};

export default ProductCard;
