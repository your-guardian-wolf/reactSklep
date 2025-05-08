import useSWR from "swr";
import { fetcher } from "../utils/fetch";

const useProducts = () => {
    const { data, error, isLoading } = useSWR(
		"http://fakestoreapi.com/products",
		fetcher);

        return {
            data,
            error,
            isLoading,
        };
}

export default useProducts;