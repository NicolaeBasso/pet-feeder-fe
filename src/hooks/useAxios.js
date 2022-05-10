import axios from "axios";
import { useEffect, useState } from "react";

const accessToken =  {
  "X-Access-Token": "MOCK_token" }
axios.defaults.baseURL = "https://baseurl/...";

const useAxios = ({ url}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const fetchData = () => {
      axios.get(url, { headers: accessToken})
        .then((res) => {setResponse(res.data)})
        .catch((err) => setError(err))
        .finally(() => setLoading(false));

    };
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;