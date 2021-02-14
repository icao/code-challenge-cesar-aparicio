import { useState, useEffect } from "react";
import { getPokemons } from "../helpers/pokeApi";

const useFetchPokemons = () => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getPokemons()
      .then((response) => {
        setResponse(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return [response, error, isLoading];
};

export default useFetchPokemons;
