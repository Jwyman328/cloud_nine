import React, { useState, useEffect } from "react";

type NewsApiData = [{text_content:string, photo_url: string},{text_content:string, photo_url: string},{text_content:string, photo_url: string}]
type TourApiData = {date:string,location:string, venue:string}[]
type ApiData = NewsApiData | TourApiData | [] ;
type SetApiData = Function;

function useFetchAndSetAPIData<ApiDataType>(apiUrl:string): ApiDataType {
  const [apiData, setApiData] = useState<any>([]);

  //"http://127.0.0.1:8000/latest_news_items/" for dev

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
