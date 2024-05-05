import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Usefetch(query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function fetchData(q) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${q}`
      );
      const getData = await response.json();
     

      if (getData?.data?.recipes) {
        setData(getData?.data?.recipes);
        setLoading(false);
        setError(null);
        navigate("/");
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (query != "") {
      fetchData(query);
    }
  }, [query]);

  return [data, loading, error];
}
