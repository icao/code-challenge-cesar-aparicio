import { useState, useEffect } from "react";
import { getDetailsPokemon } from "../helpers/pokeApi";

const useFetchDetailsPokemon = (number) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (number) {
      setIsLoading(true);
      getDetailsPokemon(number)
        .then((response) => {
          setResponse(response);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [number]);

  return [response, error, isLoading];
};

export default useFetchDetailsPokemon;
