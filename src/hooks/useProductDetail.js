import useSWR from "swr";
import { fetcher } from "../utils/fetch";


const useProductDetails = ( { id} ) => {
    const { data, error, isLoading } = useSWR (
        `https://fakestoreapi.com/products/${id}`,
        fetcher);

        return {
            data,
            error,
            isLoading,
        };
}

export default useProductDetails;