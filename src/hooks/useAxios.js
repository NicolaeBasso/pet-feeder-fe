import axios from "axios";
import { useEffect, useState } from "react";

const accessToken =  {
  "X-Access-Token": "MOCK_f98295ea42621f86f4606a5f09ab23083b28a3308fd26da5cef273543a1073d4" }
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
