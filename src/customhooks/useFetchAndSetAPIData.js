import React, { useState, useEffect } from "react";

function useFetchAndSetAPIData(apiUrl) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchAndSetApiData = async () => {
      const apiRawData = await fetch(apiUrl);
      const apiDataJson = await apiRawData.json();
      setApiData(apiDataJson);
    };

    fetchAndSetApiData();
  }, []);
  return apiData;
}

export default useFetchAndSetAPIData;
