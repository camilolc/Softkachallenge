import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { getScores } from "../helpers/getData";
export const useFetch = () => {
  const [data, setData] = useState({
    data: [],
  });

  useEffect(() => {
    getData().then((imgs) => {
      setData({
        data: imgs,
      });
    });
  }, []);

  return data;
};

export const useFetchScores = () => {
  const [data, setData] = useState({
    data: [],
  });

  useEffect(() => {
    getScores().then((imgs) => {
      setData({
        data: imgs,
      });
    });
  }, []);

  return data;
};
