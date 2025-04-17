export const ProductDetails = ({ selectedProduct }) => {
	if (!selectedProduct) {
		return <p>Wybierz produkt, żeby wyświetlić szczegóły</p>;
	}
	return (
		<>
			<div className="sticky w-[400px]">Szczegóły: 
     

            <p>KATEGORIA: {selectedProduct.category}</p>
            <p>OPIS: {selectedProduct.description}</p>
            <p>OCENA: {selectedProduct.rating.rate}</p>
</div>
            
		</>
	);
};
