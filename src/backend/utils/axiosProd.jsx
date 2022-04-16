import axios from "axios";
import { useState, useEffect } from "react";

export default function useAxiox(endPoint) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dataResponse, setDataResponse] = useState();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(endPoint);
        setDataResponse(response.data);
      } catch (err) {
        setError(true);
        console.log("Something Went wrong, Please check error: ", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { loading, error, dataResponse };
}
